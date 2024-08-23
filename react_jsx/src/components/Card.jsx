// rfc : react functional component
// rafce : react arrow functional component
// rcc : react class component 
{/* multiline comments*/}
 //   single line comments

import React from 'react'
import "../components/card.css" // importing the css
import styles from "../components/card.module.css"

const Card = () => {
    // developing object for inline styles
    let cardstyle={
        background:"white",
        width:'100%',
        border:"2px solid red"
    }
  return (
    // inline styles
    <div style={{background:"red",width:'300px',height:"250px",border:"2px solid blue"}}>
        <div style={cardstyle}> 
          <h2 className='card-title'>Chicken Dinner</h2>
          <p className={styles.carddescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum architecto dicta, explicabo asperiores nihil hic nisi, eaque repudiandae est rem dolor cum ipsa. Natus vitae laborum minima sunt atque!</p>
        </div>
      
    </div>
  )
}

export default Card
