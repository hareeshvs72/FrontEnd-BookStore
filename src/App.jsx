import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
 import Button from 'react-bootstrap/Button';


function App() {
  

  return (
    <>
     <FontAwesomeIcon icon={faInstagram} />  book store
           <Button variant="primary">Primary</Button>
    
    </>
  )
}

export default App
