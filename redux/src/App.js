import React, { useState } from 'react'

const App = () => {

    const[count,setcount] = useState (0);

    function incr () {

    setcount (count + 1)
  }

  function decr () {

    setcount (count - 1)
  }

  return (
    <div>
      

    <h1>{count}</h1>
    <button onClick={incr}>+</button>
    <br/>
    <button onClick={decr}>-</button>

    </div>
  )
}

export default App
