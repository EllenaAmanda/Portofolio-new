import React from 'react'
import { Link } from 'react-router-dom'
import womenrise from "../assets/photos/womenrise.png"
import Footer from "../component/Footer"
import Navigation from '../component/Navigation'

function Porto1() {
  return (
    <div>
    <Navigation />
    <div className="px-[12%] py-[6%] bg-neutral-50 min-h-screen">
        <h2 className='font-[myFont] text-center text-3xl mb-[6%] '>Front End / Full-Stack Projects</h2>
        <div className='justify-items-center grid grid-cols-1 lg:grid-cols-2  gap-24 league-spartan-reg'> 
            <Link target="_blank" to="https://women-rise3-t.vercel.app/">
            <div className='w-sm text-center'>
                <img src={womenrise} className='border border-neutral-200 rounded-md w-sm h-64 object-cover object-[50%15%] mb-4'/>
                <p className='font-semibold text-lg'>WomenRise 3T</p>
                https://women-rise3-t.vercel.app/
            </div>
            </Link>

            <Link target="_blank" to="https://women-rise3-t.vercel.app/">
            <div className='w-sm text-center'>
                <img src={womenrise} className='border border-neutral-200 rounded-md w-sm h-64 object-cover object-[50%15%] mb-4'/>
                <p className='font-semibold text-lg'>WomenRise 3T</p>
                https://women-rise3-t.vercel.app/
            </div>
            </Link>


            <Link target="_blank" to="https://women-rise3-t.vercel.app/">
            <div className='w-sm text-center'>
                <img src={womenrise} className='border border-neutral-200 rounded-md w-sm h-64 object-cover object-[50%15%] mb-4'/>
                <p className='font-semibold text-lg'>WomenRise 3T</p>
                https://women-rise3-t.vercel.app/
            </div>
            </Link>

        </div>

        
    </div>
    <Footer />
    </div>
  )
}

export default Porto1