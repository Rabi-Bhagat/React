import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [ironman,setcounter] = useState (0)

  // let counter = 5
 
  const increasevalue = () =>{
    // console.log("value added");
    
    ironman = ironman + 1 ;
    
    setcounter (ironman);
    // console.log('clicked',ironman);
    
  }

const decereasevalue = () =>{

  setcounter (ironman  - 1)

}
  return (
    <>
    <h1>tut 5 (counter project) </h1>
    <h3>counter value :{ironman}</h3>

    <button
    onClick={increasevalue}
    >Increase value</button>
    <br />
    <button
    onClick={decereasevalue}
    >decerease value :{ironman}</button>
    <p>\Lorem i psum dolor sit amet. : {ironman}</p>
    </>
  )
}

export default App
