const { createStore ,combineReducers} = require("redux")


// step2 : creating the actions

// action Types
let Buy_Cake="buycake"
let Buy_Drink="buyDrink"

function BuyCake(){
    return {
        type:Buy_Cake
    }
}
function Buydrink(){
    return {
        type:Buy_Drink
    }
}
// initial values in the store
let initialCakes={
    cakes:100,
    
}

let initialDinks={
    drinks:100
}

// step3:creating the Reducer
const cakeReducer=(state=initialCakes,action)=>{
    switch (action.type) {
        case Buy_Cake:
            return {...state,cakes:state.cakes-1}
        default:
            return state
    }
}

const drinkReducer=(state=initialDinks,action)=>{
    switch (action.type) {
        case Buy_Drink:
            return {...state,drinks:state.drinks-1}
        default:
            return state
    }
}

let rootReducer=combineReducers({cakeReducer,drinkReducer})

// step1:creating the store (we can only pass single reducers into a store)
const store=createStore(rootReducer) // pass the reducers or middle-ware into store

// to track the changes in the store  (middleware-redux-logger)
store.subscribe(()=>{console.log(store.getState())})

// dispatching the actions : used to emmit the actions where these actions are carried out by reducers to update the value in store
store.dispatch(BuyCake()) // pass the action into dispatch method
store.dispatch(BuyCake()) // pass the action into dispatch method
store.dispatch(Buydrink()) // pass the action into dispatch method