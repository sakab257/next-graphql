import React from 'react'

const Equipe = () => {
  const personnes = ['bilel', 'aichatou', 'ange', 'alice', 'johana', 'ali','☠️ salim ☠️','mohammed','thomas']
  return (
    <>
      {personnes.map((personne, index)=>{
        return(
          <div key={index} className='font-medium uppercase hover:bg-black hover:text-white hover:border-black px-20 py-5 w-full flex justify-center items-center transition-all cursor-pointer border-3 box-border'>
            {personne}
          </div>
        )
      })}
    </>

  )
}

export default Equipe
