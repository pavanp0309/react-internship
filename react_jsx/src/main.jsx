import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

import { person } from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
 
    // <App data={person} />
    <>
    <Card/>

    </>

)
