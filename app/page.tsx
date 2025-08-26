'use client'
import React, { useState } from 'react'
import Articles from '../components/articles'
import Navbar from '../components/navbar'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'


const Home = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  return (
<>
      <div className='h-full w-full'>
        <Navbar />

        {/* Layout pour XL+ : sidebar à gauche, articles à droite */}
        <div className='hidden xl:flex'>
            <div className='w-1/6 flex flex-col gap-2 relative p-2'>
              <Sidebar onTagSelect={setSelectedTag} selectedTag={selectedTag} />
            </div>
            <div className='w-5/6 flex flex-col gap-2 p-2'>
              <Articles selectedTag={selectedTag} />
            </div>
        </div>

        {/* Layout pour < XL : disposition verticale avec sidebar horizontale */}
        <div className='xl:hidden flex flex-col'>
            <div className='w-full p-2'>
              <Articles selectedTag={selectedTag} onTagSelect={setSelectedTag} />
            </div>
        </div>
        <Footer />
    </div>
</>
  )
}

export default Home
