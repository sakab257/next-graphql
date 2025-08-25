import React from 'react'

interface EquipeProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Equipe = ({ onTagSelect, selectedTag }: EquipeProps) => {
  const personnes = ['bilel', 'aichatou', 'ange', 'alice', 'johana', 'ali','salim','thomas','mohammed']
  
  return (
    <>
      {/* Version XL+ : layout vertical actuel */}
      <div className='hidden xl:flex xl:flex-col xl:justify-between xl:items-center xl:w-full xl:h-full'>
        <div 
          onClick={() => onTagSelect(null)}
          className={`w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-3 flex justify-center gap-2 items-center transition-all cursor-pointer border-3 box-border ${selectedTag === null ? 'bg-black text-white border-black border-b-3' : ''}`}
        >
          <span className='text-2xl'>✨</span> {`L'équipe`} <span className='text-2xl'>✨</span>
        </div>
        {personnes.map((personne, index)=>{
          const isSelected = selectedTag === personne
          return(
            <div 
              key={index} 
              onClick={() => onTagSelect(personne)}
              className={`w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-5 py-3 mb-2 flex justify-center items-center transition-all cursor-pointer border-3 box-border ${isSelected ? 'bg-black text-white border-black border-b-3' : ''}`}
            >
              {personne}
            </div>
          )
        })}
      </div>

      {/* Version < XL : layout horizontal avec scroll */}
      <div className='xl:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide'>
        <div 
          onClick={() => onTagSelect(null)}
          className={`font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-2 flex justify-center gap-2 items-center transition-all cursor-pointer border-2 box-border whitespace-nowrap text-sm flex-shrink-0 ${selectedTag === null ? 'bg-black text-white border-black' : ''}`}
        >
          <span className='text-lg'>✨</span> {`L'équipe`} <span className='text-lg'>✨</span>
        </div>
        
        {personnes.map((personne, index)=>{
          const isSelected = selectedTag === personne
          return(
            <div 
              key={index} 
              onClick={() => onTagSelect(personne)}
              className={`font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-2 flex justify-center items-center transition-all cursor-pointer border-2 box-border whitespace-nowrap text-sm flex-shrink-0 ${isSelected ? 'bg-black text-white border-black' : ''}`}
            >
              {personne}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Equipe
