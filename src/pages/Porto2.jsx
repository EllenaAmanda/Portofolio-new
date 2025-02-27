import React from 'react'
import Footer from '../component/Footer'
import gallery from '../data/graphic.json'

function Porto2() {
  // first.map((url, index) => {
  //   console.log(url)
  // })
  return (
    <div>
        <div className="px-[12%] py-[6%] bg-neutral-50 min-h-screen">
        <h2 className='font-[myFont] text-center text-3xl mb-[8%] '>Graphic Design</h2>

          <div className='flex flex-col gap-8 md:gap-24 items-center w-fit'> 
          {gallery.map(({image, id}) => (
            <div className="border border-neutral-200 h-fit  overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory rounded-md space-x-4">
                
                  
                    {image.map((image) => (
                      <div key={id} className="snap-center flex-shrink-0 ">
                        <img src={image} className="h-100 w-full object-contain" />
                      </div>
                    ))
                    }    
                  
                
              </div>
            ))}

          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Porto2