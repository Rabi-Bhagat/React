import { useState } from 'react'
import datas from './Data.json'


const Data = () =>{
 
    const [nData,SetnData] = useState (datas);
    console.log(datas);

    
    return (
        <div>
      
      <h1>Data usestate</h1>

      <Data/>

    </div>
  )
}


export default Data
