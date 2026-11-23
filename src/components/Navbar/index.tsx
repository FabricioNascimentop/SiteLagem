
import { getUsuarioLogado } from '@/lib/auth'
import NavbarClient from './navbarClient'

export default async function Navbar() {
  const usuario = await getUsuarioLogado()

  return (
    <NavbarClient usuarioNome={usuario?.nome ?? null} />
  )
}
