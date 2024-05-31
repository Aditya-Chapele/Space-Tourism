import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


function Home() {
  
  return (
      <div className='home full-width min-h-screen'>
        <Navbar/>
        <div className='grid  pt-20 lg:grid-cols-2  md:p-16 lg:p-24'>
          <div className="text w-full md:w-[70%] self-center md:self-end flex flex-col items-center md:items-start">
            <h2 className='text-[16px] sm:text-[20px] md:text-[28px] text-center md:text-start'>SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className='text-[50px] md:text-[100px] lg:text-[150px] leading-tight-none'>SPACE</h1>
            <p className='text-lg text-center md:text-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className=" self-center  md:self-end">
            <Link to={'/destination'} className='aspect-square explore rounded-full mx-auto bg-white flex items-center justify-center transition-[outline] outline hover:outline-[50px] hover:outline-white/15'>
              <h2 className='text-black text-4xl '>Explore</h2>
            </Link>
          </div>
        </div>
    
      </div>
  )
}

export default Home