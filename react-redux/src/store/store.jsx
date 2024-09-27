import { createStore } from "redux";
import { rootReducers } from "../RootReducer";




// creating the Store
const store=createStore(rootReducers)
export default store