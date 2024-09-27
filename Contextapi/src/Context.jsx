// Context_hook /context_api
// : it is used to pass the  data ie objects strings state functions boolean values etc to different components
// without manually passing the data from one component to another(parent to child) 
// this solves the Problem PropDrilling

// steps to create the Context api 

// CreateContext :  it is the Place where all the data is stored these returns
    // 1.contextProvider
    // 1.contextconsumer
// contextProvider : helps in passing /providing the values to different components 
// contextconsumer : it consumes the values provided by the Provider


// step1: Create the store (creating the context)
import { createContext } from "react";

export const Dmart=createContext() //store


// step2 creating the Provider
function ContextProvider({children}){
    console.log(children)
    return <Dmart.Provider value={"hello"}>
             {children} //app
           </Dmart.Provider>
}

export default ContextProvider