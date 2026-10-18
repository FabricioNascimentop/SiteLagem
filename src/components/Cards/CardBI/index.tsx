import styles from './style.module.scss'
import Image from 'next/image'


interface TypePropsBI {
    id: number;
    titulo: string;
    descricao: string;
    srcImage: string;
    alt: string;
}
export default function CardBI({titulo, alt, srcImage, descricao}:TypePropsBI){
    return(
        <div className='quadro'>
            <div className='quadro-img'>
                <Image src={srcImage} alt={alt} width={900} height={400}></Image>
            </div>
            <div className='quadro-text'>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
            </div>
        </div>
    )
}