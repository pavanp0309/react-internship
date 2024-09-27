import React from 'react'
import useFetch from '../utility'

const Menswear = () => {
let mens=useFetch(`https://fakestoreapi.com/products/category/men's clothing`)
console.log("mens",mens)
  return (
    <div>
      
    </div>
  )
}

export default Menswear
