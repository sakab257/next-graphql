import React from 'react'
import Filtres from './equipe'

const Sidebar = () => {
  return (
    <div className='w-full h-svh flex flex-col border-3 border-black sticky top-0'>
      <div className='h-16 flex justify-center items-center border-b-3 gap-3'>
        <span className='animate-pulse text-3xl'>✨</span>
        <h1 className='text-3xl font-semibold uppercase'>L'équipe</h1>
        <span className='animate-pulse text-3xl'>✨</span>
      </div>
      <div className='flex-1 flex flex-col items-center justify-around gap-3 p-3'>
        <Filtres />
      </div>
    </div>
  )
}

export default Sidebar
