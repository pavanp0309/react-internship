import React from 'react'
import { store } from '../store'
import Example2 from './Example2'
console.log(store)

const Example1 = () => {
  return (
   <store.Provider value={"ravi"}>
     <Example2/>
   </store.Provider>
  )
}

export default Example1
