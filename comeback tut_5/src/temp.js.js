import React, { useState } from 'react'


const Form = () => {

  const [name,setname] = useState(" ");
  const [email,setemail] = useState(" ");
  const [Password,setPassword] = useState(" ");

  const handlename = (e) =>{
    console.log(e.target.value);
    setname(e.target.value)
    
  }


    const handleemail = (e) =>{
    console.log(e.target.value);
    setemail(e.target.value) 
  }


      const handlePassword = (e) =>{
    console.log(e.target.value);
    setPassword(e.target.value) 
  }

  const handlesubmit = (e) =>{
    e.preventDefault();
  }
  return (

    <Form>

   
    <label>
    Name : 
    <input type='text' value={name} onChange={handlename}>
    </input>
    </label>


    <label>
    Email : 
    <input type='text' value={email} onChange={handleemail}>
    </input>
    </label>

    <label>
    Password: 
    <input type='text' value={Password} onChange={handlePassword}>
    </input>
    </label>

    <button></button>

    {name}
    {email}
    {Password}
 

</Form>
  )
}

export default Form;