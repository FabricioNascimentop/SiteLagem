import { redirect } from "next/navigation";
import { getUsuarioLogado } from "@/lib/auth";
import EditarClient from "./editarClient";

export default async function Editar() {
  const usuario = await getUsuarioLogado();

  if (!usuario) {
    redirect("/usuarios/login");
  }

  return <EditarClient nomeUsuario={usuario.nome} />;
}