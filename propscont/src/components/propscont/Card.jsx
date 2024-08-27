import React, { Children } from 'react'
import PropTypes from 'prop-types'; // ES6

const Card = (props) => {
    console.log("props",props)
  return (
    <div>
        <h3>{props.Children}</h3>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>
    <h3>{props.isUser?"true":"false"}</h3>
    <h3>{(props.certificates).join(',')}</h3>
    </div>
  )
}


Card.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    isUser:PropTypes.bool,
    certificates:PropTypes.array,
    Children:PropTypes.node
}




export default Card
