import React from 'react'
import Equipe from './equipe'

interface SidebarProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Sidebar = ({ onTagSelect, selectedTag }: SidebarProps) => {
  return (
    <div className='w-full h-dvh flex flex-col border-3 border-black sticky top-1'>
      <div className='h-16 flex justify-center items-center border-b-3 gap-1'>
        <span className='animate-pulse text-3xl'>✨</span>
        <h1 className='text-2xl font-semibold uppercase'>L'équipe</h1>
        <span className='animate-pulse text-3xl'>✨</span>
      </div>
      <div className='flex-1 flex flex-col justify-between p-4 py-2 overflow-hidden'>
        <Equipe onTagSelect={onTagSelect} selectedTag={selectedTag} />
      </div>
    </div>
  )
}

export default Sidebar
