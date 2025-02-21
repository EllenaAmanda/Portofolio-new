import React from 'react'
import Footer from '../component/Footer'

function Porto2() {
  const first = [
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Story%20Academic%20Validation/Academic%20Validation.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Story%20Academic%20Validation/2.png?raw=true",
  ]

  const second = [
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/1.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/2.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/3.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/4.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/5.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/6.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/7.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Thrity%20Flirty%20and%20Thriving/8.png?raw=true"
  ]

  const third = [
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/1.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/2.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/3.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/4.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/5.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/6.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/7.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/You%20do%20not%20deserve%20a%20rest.%20Says%20who/8.png?raw=true"
  ]
  
  const fourth = [
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Productivity%20Boosters%20Time%20Managing%20Tactics/Productivity%20Boosters%20Time%20Managing%20Tactics.png?raw=true",
    "https://github.com/EllenaAmanda/portofolio-images/blob/main/Productivity%20Boosters%20Time%20Managing%20Tactics/VBG%20HRTD.png?raw=true"
  ]
  // first.map((url, index) => {
  //   console.log(url)
  // })
  return (
    <div>
        <div className="px-[12%] py-[6%] bg-neutral-50 min-h-screen">
        <h2 className='font-[myFont] text-center text-3xl mb-[8%] '>Graphic Design</h2>

          <div className='flex flex-col gap-8 items-center'> 

          <div className="border border-neutral-200 h-80 w-2/3 overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory rounded-md space-x-4 justify-center">
              {first.map((url, index) => (
                <div key={index} className="snap-center flex-shrink-0 ">
                  <img src={url} className="h-80 w-full object-contain" />
                </div>
              ))}
            </div>

            <div className="border border-neutral-200 h-80 w-2/3 overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory rounded-md space-x-4">
              {second.map((url, index) => (
                <div key={index} className="snap-start flex-shrink-0">
                  <img src={url} className="h-80 w-full object-contain" />
                </div>
              ))}
            </div>

            <div className="border border-neutral-200 h-80 w-2/3 overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory rounded-md space-x-4">
              {third.map((url, index) => (
                <div key={index} className="snap-start flex-shrink-0">
                  <img src={url} className="h-80 w-full object-contain" />
                </div>
              ))}
            </div>

            <div className="border border-neutral-200 h-80 w-2/3 overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory rounded-md space-x-4">
              {fourth.map((url, index) => (
                <div key={index} className="snap-start flex-shrink-0">
                  <img src={url} className="h-80 w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Porto2