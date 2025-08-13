import React from 'react'

interface EquipeProps {
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const Equipe = ({ onTagSelect, selectedTag }: EquipeProps) => {
  const personnes = ['bilel', 'aichatou', 'ange', 'alice', 'johana', 'ali','salim','mohammed','thomas']
  
  return (
    <div className='flex flex-col justify-between flex-1 h-full overflow-y-auto gap-1'>
      <div 
        onClick={() => onTagSelect(null)}
        className={`w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-3 flex justify-center items-center transition-all cursor-pointer border-3 box-border ${selectedTag === null ? 'bg-black text-white' : ''}`}
      >
        Tous
      </div>
      {personnes.map((personne, index)=>{
        const isSelected = selectedTag === personne
        return(
          <div 
            key={index} 
            onClick={() => onTagSelect(personne)}
            className={`w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-3 flex justify-center items-center transition-all cursor-pointer border-3 box-border ${isSelected ? 'bg-black text-white' : ''}`}
          >
            {personne}
          </div>
        )
      })}
    </div>

  )
}

export default Equipe
