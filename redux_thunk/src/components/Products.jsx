import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { fetchProducts } from '../actions/Productaction'
import { useDispatch } from 'react-redux'
import Productcard from './Productcard'

const Products = () => {
const loading=useSelector(state=>state.data.isloading)
const products=useSelector(state=>state.data.products)
let productdata=products || []
const error=useSelector(state=>state.data.error)
let dispatch=useDispatch()

console.log(loading)
console.log(products)
console.log(error)

useEffect(()=>{
   dispatch(fetchProducts())
},[dispatch])

  return (
    <div>
      {loading?(<h1>loading...</h1>):(
        <>
        {productdata.map((item)=><Productcard item={item}/>)}
        </>
      )}
    </div>
  )
}

export default Products
