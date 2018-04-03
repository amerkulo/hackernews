import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    auhor: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',

  }
]


class App extends Component {

   render() {
    let name = {
      fist: "Alex",
      last: "Merkulov"
    };


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started {name.fist}------{name.last}, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
