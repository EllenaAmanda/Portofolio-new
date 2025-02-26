import React from 'react'
import Socmed from './Socmed'

function Footer() {
  return (
    <footer className='p-12 bg-black text-white league-spartan-reg text-2xl'>
      <div className='md:flex justify-between items-center'>
        <span>Ellena Amanda - ellenaamanda846@gmail.com</span>
        <Socmed />
      </div>
    </footer>
  )
}

export default Footer