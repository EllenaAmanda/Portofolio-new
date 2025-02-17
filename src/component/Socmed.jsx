import React from 'react'
import email from "../assets/logo/email.svg"
import github from "../assets/logo/github.svg"
import linked from "../assets/logo/linked.svg"

function Socmed() {
  return (
    <div className='flex gap-6 fixed right-0 bottom-0 me-16 mb-8'>
        <a href='mailto:ellenaamanda846@gmail.com'><img src={email} className='hover:invert cursor-pointer transition-all delay-150 duration-300 ease-in-out'/></a>
        <a target="_blank" href='https://github.com/EllenaAmanda'><img src={github} className='hover:invert cursor-pointer transition-all delay-150 duration-300 ease-in-out'/></a>
        <a target='_blank' href='https://www.linkedin.com/in/ellenaamanda/'> <img src={linked} className='hover:invert cursor-pointer transition-all delay-150 duration-300 ease-in-out'/></a>
    </div>
  )
}

export default Socmed