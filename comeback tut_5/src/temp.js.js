import React, { useState } from 'react'


const Form = () => {

  const [name,setname] = useState(" ")

  const handlename = (e) =>{


    console.log(e.target.value);
    setname(e.target.value)
    
  }

  return (
    <div>
   
    <label>

    Name : 

    <input type='text' onChange={handlename}>
    </input>

    </label>

    {name}
    </div>
  )
}

export default Form;