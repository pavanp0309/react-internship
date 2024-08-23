import React from "react";

function Header(){
    // creating the object for styles
    let headings={
        fontWeight:"bold",
        color:"green"
    }
   return(
  <div style={{textAlign:"center"}}>
    <h3 style={headings}>Our services</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatem asperiores delectus adipisci dolore id vel labore quae eius ullam ex vero pariatur ipsam, totam, consequuntur excepturi enim modi. Doloribus.</p>
  <Content/>
  <Content/>
  <Content/>
  <Content/>
  </div>
   )
}


export function Content(){
  return(
    <>

    </>
  )
}


export default Header




