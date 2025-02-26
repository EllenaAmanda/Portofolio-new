import React from 'react'
import { Link } from 'react-scroll'

function NavSmall({status}) {
    function handleClick () {
        status(false)
    }
  return (
    <div>
        <div onClick={handleClick} className='fixed h-screen bg-black w-full opacity-35'></div>
        <div className='fixed w-1/2 bg-neutral-50 h-screen right-0 z-10'>
        <ul className='text-base flex flex-col gap-12 league-spartan-reg w-full pt-12 items-center bg-neutral-50'>
            <Link to="hero" smooth={true} duration={500} ><li className='cursor-pointer'>Home</li></Link>
            <Link to="about" smooth={true} duration={500} ><li className='cursor-pointer'>About me</li></Link>
            <Link to="portofolio" smooth={true} duration={500} ><li className='cursor-pointer'>Portofolio</li></Link>
            <Link to="blog" smooth={true} duration={500} ><li className='cursor-pointer'>Blog</li></Link>
        </ul>              
        </div>
    </div>
  )
}

export default NavSmall