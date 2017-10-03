import React, { Component } from 'react';
import Main from './components/Main.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
