import { Buy_Cake } from "../actions/Buycake";
// import { initialCakes } from "../store/store"


export const initialCakes={
    cakes:100
}

// creating the Reducers
export const CakeReducer=(state=initialCakes,action)=>{
    switch (action.type) {
        case Buy_Cake:
            return {...state,cakes:state.cakes-1}
        default:
            return state
    }
}