import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div id='main-nav'>
        <span>Home</span>
        <span>Flock</span>
        <span>Team</span>
        <span>Sponsors</span>
        <span>Media</span>
      </div>
    );
  }
}

export default Navbar;
