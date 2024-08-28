import React from 'react'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact'
// import Services from '../pages/Services'
// import AboutUs from '../pages/LinkboutUs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul style={{display:"flex",justifyContent:"space-around",listStyleType:"none"}}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={"/aboutus"}>aboutus</Link></li>
        <li><Link to={'/contact'}>contactus</Link></li>
        <li><Link to={'/services'}>services</Link></li>
      </ul>
    </div>
  )
}

export default Header
