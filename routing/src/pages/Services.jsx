import React from 'react'
import Data from '../utility/data'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
     {
      Data.map((ele ,index)=>{
        // destructuring the user Data
        let {id,name,username,email}=ele 
        return (
          <div style={{width:'250px',border:"2px solid red",marginBottom:"3px"}} key={id}>
           <Link to={`/services/${id}`}>
              <h3>Name:${name}</h3> 
              <h3>userName:${username}</h3> 
              <h3>userEmail:${email}</h3> 
           </Link>
          </div>
        )
      })
     }
    </div>
  )
}

export default Services
