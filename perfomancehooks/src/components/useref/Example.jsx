import {useEffect, useRef, useState} from 'react'


// methods to access the Html elements
// getElementByID
// getElementByClassName
// getElementByTagName
// querySelector
// querySelectorAll()


const Example = () => {
    const [increment1,setIncreement1]=useState(1)
    const increment=useRef(1)
    // it returns a object with current property 

    useEffect(()=>{
    console.log("rendering the component")
    })

    let acc=useRef()

    const accessElement=()=>{
        console.log("accessing the elemets")
       console.log(acc.current.innerText)
    }

  return (
    <div>
        <h1 ref={acc}>hello</h1>
      <button onClick={()=>setIncreement1(prev=>prev+1)}>click</button>
      <button onClick={()=>console.log(increment.current++)}>click</button>
      <button onClick={()=>accessElement()}>access</button>
    </div>
  )
}

export default Example
