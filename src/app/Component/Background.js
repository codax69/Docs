import React from 'react'
import ForGround from './ForGround'
import Card from './Card'

const Background = () => {
  return (
    <div className="absolute w-full h-screen bg-zinc-800">
        <h1 className='bg-text absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[20rem] tracking-tighter font-semibold text-zinc-900 text-center'>Docs.</h1>
        <h2 className='text-zinc-200 text-2xl font-semibold tracking-tighter leading-tight text-center mt-5'>Document.</h2>
    </div>
  )
}

export default Background