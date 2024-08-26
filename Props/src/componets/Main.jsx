import React from 'react'
import Card from './Card'
import Data from './data'



const Main = () => {
    let da=Data.slice(0,3)
  return (
    <div className='row'>
      {da.map((ele)=><Card profile={ele}/>)}
    </div>
  )
}

export default Main
