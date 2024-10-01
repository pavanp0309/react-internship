import React from 'react'

const Productcard = ({item}) => {
    console.log(item)
  return (
    <div>
        <img src={item.image} alt="" />
      <p>{item.title}</p>
    </div>
  )
}

export default Productcard
