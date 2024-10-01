import { createStore } from "redux";
import { rootReducer } from "../RootReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // middle-ware for async operations
import { composeWithDevTools } from '@redux-devtools/extension';


// step1 creating the store 
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))) // reducers

export default store