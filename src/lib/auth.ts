
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

function getSecret() {
  const secret = process.env.AUTH_SECRET

  if (!secret) {
    throw new Error('AUTH_SECRET não configurada.')
  }

  return new TextEncoder().encode(secret)
}

// CRIAR TOKEN
export async function criarToken(usuarioId: string) {
  return new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(usuarioId)
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret())
}

// VALIDAR TOKEN
export async function validarToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: ['HS256']
    })

    return payload.sub ?? null
  } catch {
    return null
  }
}

// RECUPERAR USUÁRIO AUTENTICADO
export async function getUsuarioLogado() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value

  if (!token) return null

  const usuarioId = await validarToken(token)

  if (!usuarioId) return null

  const usuario = await prisma.usuarios.findUnique({
    where: { id: Number(usuarioId) }
  })

  if (!usuario || !usuario.ativo) return null

  return usuario
}
