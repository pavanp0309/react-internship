import { combineReducers } from "redux";
import { DrinkReducer } from "./reducers/Drinks";
import { CakeReducer } from "./reducers/cake";


export let rootReducers=combineReducers({
    drink:DrinkReducer,
    cakes:CakeReducer
})