import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'

function Porto3() {
  return (
    <div>
        <div className="px-[12%] py-[6%] bg-neutral-50 min-h-screen">
        <h2 className='font-[myFont] text-center text-3xl mb-[8%] '>UI / UX Design</h2>
        <div className='justify-items-center grid grid-cols-1 lg:grid-cols-2  gap-24 league-spartan-reg'> 

            <Link target="_blank" to="https://www.figma.com/proto/GQCVdBrUCTTytIwMF92QTC/Wireframe-Practice?page-id=43%3A125&node-id=235%3A1994&starting-point-node-id=235%3A1994&source=post_page-----198374fab93c---------------------------------------">
            <div className='w-sm text-center'>
                <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*XhmrxgVf0BXy8tcj4bOjIA.png" className='border border-neutral-200 rounded-md w-sm h-64 object-cover object-[50%15%] mb-4'/>
                <p className='font-semibold text-lg'>Study Space</p>
            </div>
            </Link>

            <Link target="_blank" to="https://www.figma.com/proto/kE631BQkgSFjExFCNcdzHz/Prototype?page-id=0%3A1&node-id=35-3209&p=f&viewport=648%2C306%2C0.06&t=WbV9pMoK2uxs9i4f-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A3376&show-proto-sidebar=1">
            <div className='w-sm text-center'>
                <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lsKfEkjkbLu04rPbSWMPdw.png" className='border border-neutral-200 rounded-md w-sm h-64 object-cover object-[50%15%] mb-4'/>
                <p className='font-semibold text-lg'>Gamification in Campaign.com</p>
            </div>
            </Link>

            
        </div>

        
    </div>
    <Footer />
    </div>
  )
}

export default Porto3