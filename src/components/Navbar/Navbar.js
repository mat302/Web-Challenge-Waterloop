import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div id='main-nav'>
        <a href='/home'>Home</a>
        <a href='/flock'>Flock</a>
        <a href='/team'>Team</a>
        <a href='/sponsors'>Sponsors</a>
        <a href='/media'>Media</a>
      </div>
    );
  }
}

export default Navbar;
