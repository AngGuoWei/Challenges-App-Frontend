//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Features from "./components/Features"

function App() {
  //const [count, setCount] = useState(0)

  return (
    //Using a react fragment to enclose multiple elements
    <>
    {
      /* We will create a few components
      - Navbar 
      - Hero
      - Challenge List
      - Features
      - Footer
      */
    }
    <Navbar />
    <Features />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h2>Monthly code challenges</h2>
    <Footer />
    </>
  )
}

export default App
