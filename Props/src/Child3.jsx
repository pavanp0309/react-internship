import React from 'react'

const Child3 = ({personDetails}) => {
   console.log(personDetails)
   const {name,age,degree}=personDetails
  return (
    <div>
      <h1>{name}</h1>
      <h1>{personDetails.age}</h1>
      <h1>{personDetails.degree}</h1>
    </div>
  )
}

export default Child3
