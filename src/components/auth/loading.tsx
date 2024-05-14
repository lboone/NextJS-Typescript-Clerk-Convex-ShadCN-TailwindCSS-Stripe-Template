import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <main className="flex w-screen h-screen items-center justify-center bg-white">
        <Image src={"/logo.svg"} alt="logo" width={200} height={200} className="animate-pulse duration-700 m-auto"/>
    </main>
  )
}

export default Loading