import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
