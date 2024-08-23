import React from "react";

// let heading=React.createElement("h1",{},"hello") // older 

// let heading1=<h1>hello😎😊</h1>  //JSX
// // babel compailer helps to convert new version of code to backward compactibility (that browser can understood)

// export default function App(){
//   return heading1
// }

// let divele=<><div></div><p></p></> // wrraping in fragemnets
// let divele1= <div><div></div><p>hello</p></div> // wrraping in fragemnets
// let div1=(
//   <div>
//   <p>hello react developer</p>
// </div>
// )

//  <React.Fragment> <></>: doesnt create a new entry in the Dom
// let div2=(
//  <React.Fragment> 
//   <p>hello react developer</p>
//   <p>hello react developer</p>
//   <p>hello react developer</p>
//   <p>hello react developer</p>
//   </React.Fragment>

// )

// 2.all elements must be closed 
//  let h1=<img src="" alt="" > //JSX element 'img' has no corresponding closing tag. 
//  let h1=<img src="" alt="" /> //correct way 


// 3.

// let name="reactDevs"
export let person={
  name:"ravi",
  age:14
}

// 4.

let style={
  color:"red",
  backgroundColor:"yellow"
  
}

import Button from "./components/Button";

// export default function App(data) {
//   // console.log(data)
//   // let {data:{name,age}}=data
 
//   return <div style={{color:style.color,background:style.backgroundColor}}>
 
//    {/* <div >
//     <p className="h1" >hello {name}</p>
//     <label htmlFor=""></label>
//    </div> */}
// {/* <Button>
//   <p>hello</p>
// </Button> */}

// <Button d="click"></Button>
   
//    </div>
// }



const App = () => {
  return (
    <div>
      <Button d="home" />
      <Button d="about" />
      <Button d="contact" />
      <Button d="home" />
      <Button d="home" />
    </div>
  )
}

export default App
