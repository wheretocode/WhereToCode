import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({message: ""})

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get('https://wheretocode-master.herokuapp.com/');
      setData(result.data);
    }
    loadData();
  })


  return (
    
    <div className="App">
      Hello World
      {data.message}
    </div>
  );
}

export default App;
