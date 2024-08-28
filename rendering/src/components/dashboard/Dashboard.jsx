import React from 'react'
import Admin from './Admin'

const Dashboard = ({user}) => {
  switch (user) {
    case "Admin":
        return <Admin/>
    case "Trainer":
        return <h1>welcome Trainer</h1>
    case "student":
        return <h1>welcome student</h1>
    default:
        return <h1>Give the Crenditaials</h1>
  }
 
}

export default Dashboard
