import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from "./pages/Hero"
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <div className=''> <Navbar /> </div>
      <main>
        <Routes>
          < Route path="/" element={<Hero/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
