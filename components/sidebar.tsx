import React from 'react'
import Equipe from './equipe'

interface SidebarProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Sidebar = ({ onTagSelect, selectedTag }: SidebarProps) => {
  return (
    <>
      {/* Version XL+ : sidebar verticale actuelle */}
      <div className='hidden xl:flex xl:w-full xl:h-dvh xl:flex-col xl:border-black xl:sticky xl:top-1 xl:gap-3'>
        <div className='flex flex-col h-full'>
          <Equipe onTagSelect={onTagSelect} selectedTag={selectedTag} />
        </div>
      </div>

    </>
  )
}

export default Sidebar
