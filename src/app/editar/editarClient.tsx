'use client'

import type { usuarios } from "@/generated/prisma/client"
import styles from "./style.module.scss"
import Link from "next/link"

interface EditarClientProps {
  usuario: usuarios | null;
}

export default function EditarClient({usuario}: EditarClientProps){
    if (!usuario){
        return <h1>not oi</h1>
    }
    return(
        <main className={styles.main}>
            <div className={styles.usuario}>
                <h2>{usuario.nome}</h2>
                <p>Clique na área que deseja trabalhar</p>
            </div>

            <div className={styles.container}>

                <Link href={"/editar/banner"}>
                    <div className={styles.hero}>
                        <h2>Banner principal</h2>
                    </div>
                </Link>
                
                <Link href={"/editar/publis"}>
                    <div className={styles.hero}>
                        <h2>Publicações</h2>
                    </div>
                </Link>

                <Link href={"/editar/trabalhos"}>
                    <div className={styles.hero}>
                        <h2>Trabalhos (dashboards)</h2>
                    </div>
                </Link>

                <Link href={"/editar/noticias"}>
                    <div className={styles.hero}>
                        <h2>Notícias</h2>
                    </div>
                </Link>

            </div>
        </main>
    )
}