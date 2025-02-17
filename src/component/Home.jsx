import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className='min-h-screen flex items-center'>
        {/* <h1 className="font-[MyFont] text-8xl/48">Hello, I'm Ellena Amanda</h1> */}
        {/* <h1 className="font-[MyFont] text-9xl/48 overflow-hidden whitespace-nowrap inline-block border-r-4 border-black animate-typewriter">Hello, I'm Ellena Amanda</h1> */}
        <TypeAnimation 
           sequence={[
            // Same substring at the start will only be typed once, initially
            "Hello, I'm Ellena Amanda",
            1000]}
            speed={50}
            repeat={Infinity}
            className='font-[MyFont] text-8xl/48'
        />
    </div>
  )
}

export default Home