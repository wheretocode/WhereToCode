import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get('https://wheretocode-staging-1.herokuapp.com/');
      setData(result.data);
    }
    loadData();
  })


  return (
    
    <div className="App">
      Hello World
      <p>{data.message}</p>
    </div>
  );
}

export default App;
