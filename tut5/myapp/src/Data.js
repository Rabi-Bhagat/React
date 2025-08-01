import { useState } from 'react'
import datas from './Data.json'

const Data = () => {
  const [nData, setNData] = useState(datas);
  console.log(nData);

  return (
    <div>
      <h1>Data from useState</h1>
      <ul>
        {nData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
