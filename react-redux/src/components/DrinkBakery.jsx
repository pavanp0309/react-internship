import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BuyDrink } from '../actions/Buycake';

const DrinkBakery = () => {
    let drink=useSelector(state=>state.drink.drinks)
    console.log(drink)
    let dispatch=useDispatch()
   
  return (
    <div>
      <h1>{drink}</h1>
      <button onClick={()=>dispatch(BuyDrink())}>BuyDrink</button>
    </div>
  )
}

export default DrinkBakery
