import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'


const App = () => {
  return (
  <>
  <Navbar/>
  {/* Implementing the Routing to create single page application */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
<Footer/>
  </>
  )
}

export default App
