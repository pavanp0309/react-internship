import React from 'react'

import { Routes,Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Header from './componets/Header'

const App = () => {
  return (
    <div>
      
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
       </Routes>
      
      
    </div>
  )
}

export default App
