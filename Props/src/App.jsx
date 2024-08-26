
// Attributes : extra/additional information to a tag or Elements

// PROPS :Properties

  //  The Data /information that are passed down (parent to child) through HtMl attributes 
        // EG: className,id ,href,target ,src ,alt ,name,age 
  // The information/data can be strings numbers ,boolean ,objects ,arrays component itself 
  //  BeNefits : Reuseability of Components, Performance  
  // Properties or Props are Readonly /immutable

  // Rules 
  //  The Props must passed from Parent To child Only (onewaydata binding )


 import Child from "./Child"
import Childele from "./Childele"
import Card from "./componets/Card"
import PropsCon from "./Props1"
import Main from "./componets/Main"

import "/node_modules/bootstrap/dist/css/bootstrap.css"
  // Parent Componet 
  const App = () => {
    return (
      <div>
          <Main/>
        {/* <PropsCon/> */}
      {/* <Child name="ramu"/>  
      <Child />  
      <Child/>  
      <Child/>  
      <Child/>  
      <Child name="rani"/>  
      <Childele  language="js" price={2000}/>
      <Childele src={[]}/> */}
      
    {/* <Header name="header"/>
    <Header name="footer"/>
    <Main name="main"/> */}
    {/* <Card/> */}
  
      </div>
    )
  }




  // function Header({name}){
  //   return <h1>{name}</h1>
  // }
  // function Main(props){
  //   const{name}=props
  //   return <h1>{name}</h1>
  // }
  


  export default App
  

  // PRoptypes 
  // default props 

