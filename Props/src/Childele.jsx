import React from 'react'

const Childele = ({language,price,src}) => {
    console.log(src)
    
   
  return (
    <div>
      <h1>Hello{language}{price} </h1>
      <img src={src} alt="" />
    </div>
  )
}

export default Childele
