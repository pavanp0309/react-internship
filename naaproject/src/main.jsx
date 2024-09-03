import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// importing the Bootstrap styles
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
   </BrowserRouter>
 
)
