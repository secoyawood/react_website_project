import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 10%;
  padding: 5%;
  font-size: 2rem;
  color: red;
  background-color: black;
`;

function App() {

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <div className="App">
      <h1>Counter</h1>
      <Button id="test" onClick={() => setCount(count + 1)} >{count}</Button>
    </div>
  );
}

export default App;
