
// importing the create store module from redux
const {createStore}=require("redux")


// creating the actions 
function makepayment(){
    return{
        type:"payamount"
       }
}


let initialstate={
    amount:1000
}

const reducers=(state=initialstate,action)=>{
       switch (action.type) {
        case "payamount":
            return {...state,amount:state.amount-100}
        default:
            return state
       }
}



// creating the store 
let store=createStore(reducers)

 store.subscribe(()=>console.log(store.getState()))

console.log(store.dispatch(makepayment()))
console.log(store.dispatch(makepayment()))
console.log(store.dispatch(makepayment()))
console.log(store.dispatch(makepayment()))

