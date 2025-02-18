import React from 'react'

function Portofolio() {
  return (
    <div className='min-h-screen py-[10rem]' id='portofolio'>
        <h3 className='text-center league-spartan-reg text-xl mb-[6rem]'>Portofolio</h3>
        <ul className='flex flex-col gap-24'>
          <li className='font-[myFont] text-[32px] cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>Front End / Full-Stack Projects</li>
          <li className='font-[myFont] text-[32px] cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>Graphic Design</li>
          <li className='font-[myFont] text-[32px] cursor-pointer transition-all delay-150 duration-300 ease-out bg-transparent hover:bg-black hover:text-white p-2'>UI / UX</li>
        </ul>
    </div>
  )
}

export default Portofolio