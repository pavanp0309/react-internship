import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

export default Child
