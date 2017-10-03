import React, { Component } from 'react';
import Header from './Header/Header.js';
import About from './About/About.js';

class Main extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <About />
      </div>
    );
  }
}

export default Main
