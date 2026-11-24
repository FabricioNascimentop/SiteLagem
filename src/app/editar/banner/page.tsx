import { prisma } from "@/lib/prisma"
import BannerEditClient from "./bannerEditClient"


export default async function BannerEdit(){
    const bannerInfo = await prisma.publicacao.findMany()
    


    return(
        <BannerEditClient bannerInfo={bannerInfo}/>
    )
}