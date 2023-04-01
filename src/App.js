import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(" https://restcountries.com/v3.1/all");
    setData(response.data);
  };

  const handleFetch = () => {
    fetchData();
  };

  console.log(data[0]);

  return (
    <div className="App">
      <button onClick={handleFetch}>Refresh</button>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Flag</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
            <tr key={index}>
              <td>{country.name.common}</td>
              <td>{country.flag}</td>
              <td>{country.population || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
