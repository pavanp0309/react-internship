import { useEffect, useState } from 'react'
import useFetch from '../utility'

const Womens = () => {
let data=useFetch(`https://fakestoreapi.com/products/category/women's clothing`)
console.log("wom",data)

  return (
    <div>
      
    </div>
  )
}

export default Womens
