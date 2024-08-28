import React from 'react'


// Rendering :  it is the Process of converting the Components into Jsx Elements To Build the Ui Layer 
// Builiding in the Dom

// Re-Rendering : It is the Process used updated Only neccessary part in the Ui with help virtual dom
  // when the Props Changes in  a components 
  // when the State of component Chnages  


  // Def -virtual dom (2000) (it creates the copy of real dom and make req updates without referehing the page)

  // Conditional Rendering : Displaying the Ui Based Conditions
    //  If-else 
    //  switch
    // ternary Operator 
    // && (short-circuit operator)( if the firstcondition is true it give the Result ) 
import Dashboard from './components/dashboard/Dashboard'
const App = () => {
  let user="Admin"
 return (
  <>
  <Dashboard user={user}/>
  </>
 )
}

export default App
