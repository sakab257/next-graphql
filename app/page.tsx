import React from 'react'
import Articles from '../components/articles'
import Navbar from '../components/navbar'
import Sidebar from '@/components/sidebar'
import { montserrat } from '@/lib/font'


const Home = () => {
  return (
<>
      <div className='h-full w-full'>
        <Navbar />
      <div className='flex'>
          <div className='w-5/6 flex flex-col gap-2 p-2'>
            <Articles />
          </div>
          <div className='w-1/6 flex flex-col gap-2 relative'>
            <Sidebar />
          </div>
      </div>
    </div>
</>
  )
}

export default Home
