import React from 'react'
import Hea from './components/services/Header'
import Card from './components/services/Card'
import style from  "./app.module.css"

const App = () => {
  return (
    <div>
       <Hea/>
     <div className={style.main_content}>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </div>
    </div>
  )
}

export default App
