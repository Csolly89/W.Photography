import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from "./pages/Hero"
import About from "./pages/About"
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
function App() {

  return (
    <Router>
      <div className=''> <Navbar /> </div>
      <main>
        <Routes>
          < Route path="/" element={<Hero/>} />
          < Route path="/about" element={<About />} />
          < Route path="/services" element={<Services />} />
          < Route path="/portfolio" element={<Portfolio />} />
          < Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
