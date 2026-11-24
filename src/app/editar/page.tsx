import { getUsuarioLogado } from "@/lib/auth";
import EditarClient from "./editarClient";

export default async function Editar(){
    const usuario = await getUsuarioLogado()
    return(
        <EditarClient usuario={usuario}/>
    )
}