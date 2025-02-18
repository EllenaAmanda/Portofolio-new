import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Porto1 from "./pages/Porto1"
import Porto2 from "./pages/Porto2"
import Porto3 from "./pages/Porto3"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/porto1" element={<Porto1 />}/>
          <Route path="/porto2" element={<Porto2 />}/>
          <Route path="/porto3" element={<Porto3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
