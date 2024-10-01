import { Fetch_Product_Req,Fetch_Product_Success,Fetch_Product_Fail } from "../actions/Productaction"


// creating the initial state 
export let initialstate = {
    products: [],
    isLoading: false,
    error: ""
}


// create the Reducers 
export const PReducer = (state = initialstate, action) => {
    switch (action.type) {
        case Fetch_Product_Req:
            return { isLoading: true }

        case Fetch_Product_Success:
            
            return { ...state, isloading: false, products: action.payload, error: "" }

        case Fetch_Product_Fail:
            return { ...state, isloading: false, products: [], error: action.error }


        default:
            return state
    }
}