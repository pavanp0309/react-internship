import React from 'react'
import { useContext } from 'react'
import { store } from '../store'

const CompC = () => {
    let context=useContext(store)
    console.log(context)
  return (
    <div>
      
    </div>
  )
}

export default CompC
