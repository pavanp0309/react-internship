

// useEffect : it is used manage the sideEffects of a functional components 
// sideEffect: ie something outside of react  
    //  1.fetching the Data 
    //  2.updating the Dom 
    //  3.handling events (resizing the browser etc)
    //  4.handling the subscriptions and notifications 
    //  5.handling the timers (setTimeout ,setIntervals etc)


// all the sideEffects is handle by class components before react 16.3 (2018)

// LifeCycle Methods :
//    MOUNTING PPHASE : creating the Html in the Dom [jsx--->html--->dom]
//    UPDATING PHASE : updating the existing html  by camparing with virtual dom [when state or prop change]
//    UNMOUNTING PAHSE[CLEANUP PAHSE] :removing the html or events from the Dom

// In class components we call like this 
// COMPONENTDIDMOUNT
// COMPONENTDIDUPADTE
// COMPONENTDIDUNMOUNT 


// Terminologies :
// rendering : converting the components  into jsx elements [creating the Dom tree]
// re-rendering : updating the neccessary parts by comapring with virtual dom [updating the Dom tree]

// syntax :useEffect(()=>{},[dependency])

// MOUNTING PPHASE : useEffect will run once on mounting and runs again on every re-render
// useEffect(()=>{

// })

// Updating phase  
//  useEffect without Dependency 
// useEffect(()=>{},[]) [emptyarray is without dependency] it will only once when the component is mounted initially
// useeffect with Dependency
// useEffect(()=>{},[a value]) : it will run  on every dependency changes


// Unmounting phase 
// useEffect(()=>{
//     // code while runing the Mounting phase

//     return {
//         //    unmounting phase
//     }
// })


// Final syntax 
// useEffect(()=>{ 
//     //    Mounting phase

//     return{ // cleanupphase :unmounting phase

//     }
// },[])//updating phase with and without dependencies



import { useEffect, useState } from "react";


const AdvancedHook = () => {
    let [count ,setCount]=useState(0)
    let [count1 ,setCount1]=useState(0)
    let [width,setWidth]=useState(window.innerWidth)

  

    // function handleClick(){
    //     setCount(count+1)
        
    // }
    // function handleClick1(){
    //     setCount1(count1+1)
        
    // }
    // useEffect(()=>{
    //     // Mounting phase of a component 
    //     console.log("component is mounted to dom")
    // })

    // mounting phase
    // useEffect(()=>{
    //     console.log("starting phase-mounting😊😉")
    // })


    // // updating phase without dependency
    // useEffect(()=>{
    //     console.log("second phase-updating📱📲")
    // },[])//without dependency



    // //  updating phase with dependency
    // useEffect(()=>{
    //     console.log("third phase-updating -dependency🐆🐅📱📲")
    // },[count])//with dependency


    // unmounting phase
    let handleWidth=()=>{
        setWidth(window.innerWidth)
        console.log("window attached")
       }
    
        useEffect(()=>{
           window.addEventListener("resize",handleWidth)
           return window.removeEventListener("resize",handleWidth) // cleanup phase
        })

  return (
    <div>
        <h1>{width}</h1>
        {/* <h1>count:{count}</h1>
        <h1>count1:{count1}</h1>
    <button onClick={handleClick}>click-1</button>
    <button onClick={handleClick1}>click-2</button> */}
    </div>
  )
}

export default AdvancedHook
