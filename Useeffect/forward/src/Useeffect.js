import React, { useEffect } from 'react';

const UseEffect = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []); 

  return (
    <div>
      <button>welcome</button>
      <br/>
      <hr/>
      <button>To</button>
      <hr/>
      <br/>
      <button>consistency</button>
    </div>
  );
};

export default UseEffect;
