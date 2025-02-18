import About from "./component/About"
import Blog from "./component/Blog"
import Home from "./component/Home"
import Navigation from "./component/Navigation"
import Portofolio from "./component/Portofolio"
import Socmed from "./component/Socmed"

function App() {

  return (
    <div>
      <Navigation/>
      <Socmed />
      <div id="scroll-container" className="px-[12%] bg-neutral-50">  
        <Home />
        <hr></hr>
        <About/>
        <hr></hr>
        <Portofolio />
        <hr></hr>
        <Blog />
      </div>
    </div>
    
  )
}

export default App
