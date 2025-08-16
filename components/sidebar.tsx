import React from 'react'
import Equipe from './equipe'

interface SidebarProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Sidebar = ({ onTagSelect, selectedTag }: SidebarProps) => {
  return (
    <>
      <div className='w-full h-dvh flex flex-col border-black sticky top-1 gap-3'>
        <div className='flex flex-col h-full'>
          <Equipe onTagSelect={onTagSelect} selectedTag={selectedTag} />
        </div>
      </div>
      
    </>
  )
}

export default Sidebar
