import React, { useMemo, useState } from 'react'
import Card from './card'

// useMemo hook used for memorization of values

const Example1 = () => {
    
    let userList=[
        {
            id:1,name:"raju",age:14
        },
        {
            id:2,name:"ramu",age:15
        },
        {
            id:3,name:"rani",age:17
        },
    ]

    let [data,setData]=useState(userList)
    let [increment,setIncrement]=useState(1)

    let userinfo=useMemo(()=>{
        data.map((da)=><Card key={da.id} data={da}/>)
    },[data])
  return (
    <div>
        <h1>{increment}</h1>
        <button onClick={()=>setIncrement(increment+1)}>increment</button>
      {userinfo}
    </div>
  )
}

export default Example1
