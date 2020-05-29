import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'

function App() {
  const name = 'cc-chanchai'
  const num1 = 10
  const num2 = 15
  const randomNumber = Math.random()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          cc-chanchai
        </h3>
        <p>
          My name's : { name }
        </p>
        <p>
          {num1} + {num2} ได้ผลลัพธ์ คือ { num1 + num2}
        </p>
        <p>
          random number > 0.5 : {randomNumber > 0.5 ? "Yes" : "No"}
        </p>
        <Post/>
      </header>
    </div>
  );
}

export default App;
