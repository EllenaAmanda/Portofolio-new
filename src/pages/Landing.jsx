import React from 'react'
import About from "../component/About"
import Blog from "../component/Blog"
import Footer from "../component/Footer"
import Home from "../component/Home"
import Navigation from "../component/Navigation"
import Portofolio from "../component/Portofolio"
import Socmed from "../component/Socmed"

function Landing() {
  return (
    <div>
        <Navigation/>
        <div>
          {/* <Socmed /> */}
        </div>
      <div className="px-[12%] bg-neutral-50">  
        <Home />
        <hr></hr>
        <About/>
        <hr></hr>
        <Portofolio />
        <hr></hr>
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default Landing