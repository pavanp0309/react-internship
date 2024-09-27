import React from 'react'
import CompA from './components/CompA'



// props 
// problems with props 
// solving of methods 

// Props : properties,strings objects numbers  boolean etx

const App = () => {
  return (
    <div>
 <CompA/>
      {/* <Child data={"hello"}/> */}
    </div>
  )
}

function Child(props){
    console.log(props)
    return (
        <div>
          <Child1 a={props.data}/>
        </div>
      )
}

function Child1(props){
    console.log("c1",props)
    return (
        <div>
          <Child2 b={props.a}/>
        </div>
      )
}


function Child2(props){
    return (
        <div>
          <h1>{props.b} Everyone</h1>
        </div>
      )
}



export default App
