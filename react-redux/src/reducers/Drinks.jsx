import { Buy_Drink } from "../actions/Buycake"
// import { initialDrinks } from "../store/store"

let initialDrinks={
    drinks:100
}

// creating the Reducers
export const DrinkReducer=(state=initialDrinks,action)=>{
    switch (action.type) {
        case Buy_Drink:
            return {...state,drinks:state.drinks-1}
        default:
            return state
    }
}