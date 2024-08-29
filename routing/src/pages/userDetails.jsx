import React from 'react'
import { useParams } from 'react-router-dom' // hook used to get dynamic data
import Data from '../utility/data'

import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
    let userdata=useParams()
    console.log(userdata)

    let userInfo=Data.find(ele=>ele.id==userdata.id)
    console.log(userInfo)

    let navigate=useNavigate() //hook to navigate back to the Pages
    let navigateback=()=>{ // function used to provide functionality when btn i cliked
        navigate('/services')
    }

  return (
    <div>
      <h1>User:{userInfo.name}</h1>
      <h1>User:{userInfo.email}</h1>
      <h1>User:{userInfo.username}</h1>
      <h1>User:{userInfo.phone}</h1>
      <button onClick={()=>navigateback()}>Back</button>
    </div>
  )
}

export default UserDetails
