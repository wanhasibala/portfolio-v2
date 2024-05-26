import Image from 'next/image'
import React from 'react'

const Photo = ({alt, src}: {alt:string, src: string}) => {
  return (
    <>
    <Image src={src} alt={alt} layout='fill' className='object-cover w-photo-width aspect-video h-photo-height' objectFit='contain'/>
    </>
  )

}

export default Photo