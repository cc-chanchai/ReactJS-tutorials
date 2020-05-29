import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Post2 from './Post2'
import Comment from './Comment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="ui container comments">
          <Post studentName="ess" score="81"/>
          <Post studentName="boys" score="74"/>
        </div>
        <div>
          <Post2 id="2">
            <Comment userId="1" data="5 star" />
            <Comment userId="8" data="4 star" />
          </Post2>
          <Post2 id="4">
            <Comment userId="1" data="5 star" />
            <Comment userId="8" data="4 star" />
          </Post2>
        </div>
      </header>
    </div>
  );
}

export default App;
