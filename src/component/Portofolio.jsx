import React from 'react'
import { Link } from 'react-router-dom'

function Portofolio() {
  return (
    <div className='min-h-screen py-[10rem]' id='portofolio'>
        <h3 className='text-center league-spartan-reg text-xl mb-[6rem]'>Portofolio</h3>
        <ul className='flex flex-col md:gap-24 gap-16'>
          <Link to="/porto1"><li className='font-[myFont] md:text-[32px] text-2xl cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>Front End / Full-Stack Projects</li></Link>
          <Link to="/porto2"><li className='font-[myFont] md:text-[32px] text-2xl cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>Graphic Design</li></Link>
          <Link to="/porto3"><li className='font-[myFont] md:text-[32px] text-2xl cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>UI / UX</li></Link>
        </ul>
    </div>
  )
}

export default Portofolio