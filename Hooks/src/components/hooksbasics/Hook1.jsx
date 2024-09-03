

// State :  it is special react object which is used to store the data and manage the data of a components 
        //    it is mutable (can the change the value over a time)
        // state is specific to a component ,a component re-renders on every state changes 
    
        // Usecases : 
            // eccomerce application  , Timers, games,api responses ,social media platforms 
            // counters ,toggles (sidebar navigations ,darkmode& lightmode )  etc

 
// LifeCycle methods:  mounting Unmounting and updating 

// Hooks  : 
// Before react 16 we was not having   a state varibale to manage or store the data in functional components  so we need to use class components
// HOOKS :
//  it is special js function which lets us to  use  state and lifeccycle methods and laest othera feature of react in functional components 

// Different types of hooks 
//   Basic Hooks 
// 🏹usesate 
// 🏹useEffect 
// 🏹useContext 

// Advanced Hooks  (performance based hooks)
// 🏹useReducer 
// 🏹useCallback 
// 🏹useMemo
// 🏹useRef  etc


// Rules  :
//   Hooks must/(can only ) be called on top level of functional component and inside the custom hooks only 
// hooks cant be called inside conditional statement and looping statements and inside the return statement
// hooks cant be used inside the class components 


// hooks always starts with a keyword use 

// UseState: 

// useState returns array of two values 
//    1.initial-value :
//  2.updater-function : 

// syntax : const [data,setData]=useState(initialvalue)


import { useState } from 'react'

const Hook1 = () => {
    const [increment ,setIncrement]=useState(0)
    console.log(increment)
    console.log(setIncrement)
    function data(){
        setIncrement(increment+1)
        setIncrement(increment+1)
     setIncrement(prev=>prev+1)
     setIncrement(prev=>prev+1)

    }
    function data1(){
        setIncrement(increment-1)
     }
 

  return (
    <div>
         <button onClick={()=>data1()}>decrement</button>
        <p>{increment}</p>
      <button onClick={()=>data()}>increment</button>
    </div>
  )
}

export default Hook1


