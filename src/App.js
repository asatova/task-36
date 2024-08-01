import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [plateNumber, setPlateNumber] = useState('');
  const [violations, setViolations] = useState([]);


  useEffect(() => {
    const storedViolations = localStorage.getItem('violations');
    if (storedViolations) {
      setViolations(JSON.parse(storedViolations));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('violations', JSON.stringify(violations));
  }, [violations]);

  const handleInputChange = (event) => {
    setPlateNumber(event.target.value);
  };

  const handleAddViolation = () => {
    if (plateNumber.trim()) {
      setViolations([...violations, plateNumber]);
      setPlateNumber('');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Radar o'ljasi</h1>
          <div>
            <input
                type="text"
                value={plateNumber}
                onChange={handleInputChange}
                placeholder="Mashina raqamini kiriting"
            />
            <button onClick={handleAddViolation}>Qo'shish</button>
          </div>
          <table>
            <thead>
            <tr>
              <th>#</th>
              <th>Mashina raqami</th>
            </tr>
            </thead>
            <tbody>
            {violations.map((plate, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{plate}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </header>
      </div>
  );
}

export default App;
