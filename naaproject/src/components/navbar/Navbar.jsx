import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const[collpased,setCollpased]=useState(false)
    console.log(collpased)

    // function which makes false value To True value when button is cliked
    let showToggle=()=>{
        setCollpased(!collpased)
    }
  return (
  <>
  <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" >NaaProject</NavLink>
    <button className="navbar-toggler" type="button" onClick={showToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${!!collpased && "show"}`} id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link " aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'} >About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to={'/services'} >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to={'/contact'} >Contact</NavLink>
        </li>
      </ul>
      {/* Logins start */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item px-1 ">
          <NavLink className=" btn btn-outline-success " >SignIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn btn-outline-danger " >Register</NavLink>
        </li>
      </ul>
      {/* Logins end */}
      
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
