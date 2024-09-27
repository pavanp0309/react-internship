import React from 'react'
import { useContext } from 'react'
import { Dmart } from '../Context'
const CompB = () => {
    let Context=useContext(Dmart)
    console.log("B:",Context)
  return (
    <div>
      
    </div>
  )
}

export default CompB
