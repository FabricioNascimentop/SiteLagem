'use server'

import { cookies } from 'next/headers'

export async function logoutUsuario() {
  const cookieStore = await cookies()

  cookieStore.delete('session')

  return {
    sucesso: true,
    mensagem: 'Logout realizado com sucesso.'
  }
}
