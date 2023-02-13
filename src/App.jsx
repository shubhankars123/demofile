import React from 'react';
import { useState } from 'react';
import "./App.css"

function App() {
  const [fullName, setFullName] = useState({
    fName : "",
    lName : "",
  })



    const inputEvent = (event) =>{
        setFullName(event.target.value)
    };

   
    const onSubmits = (event) =>{
      event.preventDefault()
      alert("Form submitted")
      
    }

  return (
    <form onSubmit={onSubmits}>
    <div>
        <h1> Hello {fullName.fName} {fullName.lName}</h1>
        <input type='text' defaultValue="" 
        name='fName'
        placeholder='Enter Your Name'
         onChange={inputEvent} 
         value={fullName.fName} />

         <input type='text' defaultValue=""
         name='lName'
         placeholder='Enter Your LastName'
         onChange={inputEvent} 
         value={fullName.lName} />
        <button onClick={onSubmits}> Click Me </button>
        <br ></br>
    </div>
    </form>
  )
}

export default App