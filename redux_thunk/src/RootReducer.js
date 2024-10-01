import { combineReducers } from "redux";
import { PReducer } from "./reducers/ProductReducer";


// step2: is only implemneted when we have more than one reducer
export let rootReducer=combineReducers({
    data:PReducer
}) 