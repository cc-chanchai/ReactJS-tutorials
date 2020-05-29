import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPic from './000002020006.jpg'

function App() {
  const mystyle = {
    color:'red',
    fontSize:'30px',
    textAlign:'center'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{color:'white', backgroundColor:'blue', fontSize:30}}>
          Inline Style.
        </div>
        <p style={{
            color:'red',
            fontSize:'14',
            textAlign:'center'
          }}>
          This is the another inline style.
        </p>
        <p style={mystyle}>This is mystyle.</p>
        <p className="myStyle">This is the link from app.css</p>
        <div className="container">
          <img className="img-thumbnail" src={ myPic } alt="native" />
        </div>
      </header>
    </div>
  );
}

export default App;
