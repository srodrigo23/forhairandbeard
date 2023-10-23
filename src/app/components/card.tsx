import Image from 'next/image'

const Card = (props:any) =>{
    return(
        <div className='shadow-md rounded-md flex content-center place-content-center p-2'>
            <Image
                className='w-auto'
                src={`${props.path}`}
                alt={`ilustration-${props.path}`}
                width={150}
                height={100}
                priority
            />
        </div>
    )
}

export default Card;