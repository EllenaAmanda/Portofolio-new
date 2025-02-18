import React from 'react'

function Blog() {
  return (
    <section  className='min-h-screen league-spartan-reg py-[10rem]' id='blog'>
        <h3 className='text-center text-xl mb-[6rem]'>Blog</h3>
        <div className='flex flex-col gap-24 w-fit'>
            <a target="_blank" href='https://medium.com/@ellenaamanda846/improving-gamification-in-campaign-com-ux-case-study-reediting-febc2d73ddc2'>
              <article className='cursor-pointer transition-all delay-150 duration-300 ease-out flex flex-col gap-6 border-b border-transparent hover:border-black pb-5'>
                  <h3 className='font-[myFont] text-2xl'>Gamification in Campaign.com — UI/UX Case Study</h3>
                  <p className='text-2xl'>8 min read · Nov 29, 2022</p>
              </article>
            </a>
            <a target='_blank' href='https://medium.com/@ellenaamanda846/ux-case-study-study-space-198374fab93c'>
              <article className='cursor-pointer transition-all delay-150 duration-300 ease-out flex flex-col gap-6 border-b border-transparent hover:border-black pb-5'>
                  <h3 className='font-[myFont] text-2xl'>UX Case Study — Study Space</h3>
                  <p className='text-2xl'>7 min read · Oct 11, 2022</p>
              </article>
            </a>
        </div>
    </section>
  )
}

export default Blog