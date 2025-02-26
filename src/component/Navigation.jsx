import React, { useState } from 'react'
import { Link } from 'react-scroll'
import menu from '../assets/logo/menu.svg' 
import NavSmall from './NavSmall'

function Navigation() {
  const [status, setStatus] = useState(false)
  function handleClick () {
    setStatus(!status)
  }
  return (
    <div>
      <nav className='md:block hidden'>
          <ul className='text-base flex gap-12 fixed justify-end right-0 league-spartan-reg w-full pt-12 pb-2 items-center pe-[5%] bg-neutral-50'>
              <Link to="hero" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Home</li></Link>
              <Link to="about" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>About me</li></Link>
              <Link to="portofolio" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Portofolio</li></Link>
              <Link to="blog" smooth={true} duration={500} ><li className='cursor-pointer transition-all delay-150 duration-300 ease-out border-b border-transparent hover:border-black/75 px-1'>Blog</li></Link>
          </ul>
      </nav>

      <nav className='md:hidden'>
          <img src={menu}  onClick={handleClick} className='w-[40px] fixed right-0 m-8 cursor-pointer'/>
          {status && 
          <NavSmall status={setStatus}/>}
          
      </nav>
    </div>
  )
}

export default Navigation