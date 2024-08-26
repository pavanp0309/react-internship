import React from 'react'
import Child3 from './Child3'


// parent component
const PropsCon = () => {
    let arr=[1,3,4,5,6,7,8]
    let person={
        name:"ramu",
        age:24,
        degree:"btech"
    }
  return (
    <div>
        <Child3  personDetails={person}/>
      {/* {arr.map((ele,index)=><Child3 name={ele} key={index}/>)} */}
    </div>
  )
}

export default PropsCon
