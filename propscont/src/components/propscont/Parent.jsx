import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Data from '../../Utilitiess/data'

// props :properties 
    //   can be passed through html attributes 
    // PropDrilling  parent -child - child -child  : useContext and redux

// parent
const ParentComp = () => {
  return (
    <div>
       {
        Data.map((ele)=><Card2 info={ele}/>)
       }
        
        {/* child in different jsx file */}
      {/* <Card name="ramu"   isUser={true} certificates={["java","python"]}>hello</Card> */}
       {/* child in same Jsx file */}
      {/* <ChildCompo name="ravi" age={24} isUser={true} certificates={["java","python"]}/>
      <ChildCompo1  age={24} isUser={true} certificates={["java","python"]}/>
      <ChildCompo2>hello</ChildCompo2>
      <ChildCompo3>hello</ChildCompo3> */}
    </div>
  )
}


// child component in same file
const  ChildCompo=(props)=>{
    console.log("props:",props)
    return(<>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>
    <h3>{props.isUser?"true":"false"}</h3>
    <h3>{(props.certificates).join(',')}</h3>
    </>)
}



// second way destructuring
const  ChildCompo1=(props)=>{
   
    const {name,age,isUser,certificates}=props
    console.log("props:",name,age,isUser,certificates)
    return(<>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{isUser?"true":"false"}</h3>
    <h3>{certificates}</h3>
    </>)
}


// children props

const  ChildCompo2=(props)=>{
    console.log(props)
   
    return (<>
    <h1>{props.children}</h1>
    </>)
}

const  ChildCompo3=({children})=>{
    console.log(children)
   
    return (<>
    <h1>{children}</h1>
    </>)
}


export default ParentComp
