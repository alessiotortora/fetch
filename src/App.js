import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [headers, SetHeaders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(" https://restcountries.com/v3.1/all");
    setData(response.data);

    const keys = response.data.map((key) => Object.keys(key));
    setKeys(keys);
  };

  const handleFetch = () => {
    fetchData();
  };

  data.map((country) => {
    console.log(country);
    {
     Object.keys(country).forEach((name) => console.log(name))
    }
    
  });

  return (
    <div className="App">
      <button onClick={handleFetch}>Refresh</button>
      <table>
        <thead>
          <tr>
            {keys.map((header, index) => (
              <th>{header[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
