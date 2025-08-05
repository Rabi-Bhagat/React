import React, { useState } from 'react'

const MultipleReturn = () =>{

    const [Users,setUsers] = useState ([]);
    const [Loading,setIsLoading] = useState (true);
    const [Error,setError] = useState(null);

  return (
    <div>
      <h1> Users List</h1>
      
    </div>
  )
}

export default MultipleReturn;
