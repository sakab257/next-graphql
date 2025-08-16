import React from 'react'

interface EquipeProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Equipe = ({ onTagSelect, selectedTag }: EquipeProps) => {
  const personnes = ['bilel', 'aichatou', 'ange', 'alice', 'johana', 'ali','salim','thomas','mohammed']
  
  return (
    <div className='flex flex-col justify-between items-center w-full h-full'>
      <div 
        onClick={() => onTagSelect(null)}
        className={`w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-3 flex justify-center gap-2 items-center transition-all cursor-pointer border-3 box-border ${selectedTag === null ? 'bg-black text-white border-black border-b-3' : ''}`}
      >
        <span className='text-2xl'>✨</span> L'équipe <span className='text-2xl'>✨</span>
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

  )
}

export default Equipe
