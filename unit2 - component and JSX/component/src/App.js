import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Comment from './Comment'
import Child1 from './Child1'
import Child2 from './Child2'

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
          {num1} + {num2} = { num1 + num2}
        </p>
        <p>
          random number > 0.5 : {randomNumber > 0.5 ? "Yes" : "No"}
        </p>
        <Post/>
        <Comment/>
        <div>
          <Child1/>
          <Child2/>
        </div>
      </header>
    </div>
  );
}

export default App;
