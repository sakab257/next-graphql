'use client'
import React, { useState } from 'react'
import Articles from '../components/articles'
import Navbar from '../components/navbar'
import Sidebar from '@/components/sidebar'


const Home = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  return (
<>
      <div className='h-full w-full'>
        <Navbar />
      <div className='flex'>
          <div className='w-5/6 flex flex-col gap-2 p-2'>
            <Articles selectedTag={selectedTag} />
          </div>
          <div className='w-1/6 flex flex-col gap-2 relative p-2'>
            <Sidebar onTagSelect={setSelectedTag} selectedTag={selectedTag} />
          </div>
      </div>
    </div>
</>
  )
}

export default Home
