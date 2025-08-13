import React from 'react'

const Equipe = () => {
  const personnes = ['bilel', 'aichatou', 'ange', 'alice', 'johana', 'ali','salim','mohammed','thomas']
  return (
    <div className='flex flex-col justify-between flex-1 h-full overflow-y-auto gap-1'>
      {personnes.map((personne, index)=>{
        return(
          <div key={index} className='w-full font-medium uppercase hover:bg-black hover:text-white hover:border-black px-4 py-3 flex justify-center items-center transition-all cursor-pointer border-3 box-border '>
            {personne}
          </div>
        )
      })}
    </div>

  )
}

export default Equipe
