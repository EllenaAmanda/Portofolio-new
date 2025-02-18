import React from 'react'
import { Link } from 'react-scroll'

function Navigation() {
  return (
    <nav>
        {/* <ul className='text-base flex gap-12 fixed right-0 league-spartan-reg mt-12 me-24 bg-neutral-50/10 backdrop-blur-sm'> */}
        {/* <ul className='text-base flex gap-12 fixed justify-end right-0 league-spartan-reg w-full h-32 items-center pe-[5%] bg-neutral-50/10 backdrop-blur-md'> */}
        <ul className='text-base flex gap-12 fixed justify-end right-0 league-spartan-reg w-full pt-12 pb-2 items-center pe-[5%] bg-neutral-50'>
        {/* <li className='cursor-pointer transition-all delay-150 duration-300 ease-out hover:animate-fade-in animate-fade-out'>Home</li> */}
            <Link to="hero" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Home</li></Link>
            <Link to="about" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>About me</li></Link>
            <Link to="portofolio" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Portofolio</li></Link>
            <Link to="blog" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Blog</li></Link>
        </ul>
    </nav>
  )
}

export default Navigation