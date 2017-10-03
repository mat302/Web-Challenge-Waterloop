import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div id='main-nav'>
        <ul className='primary-nav'>
          <img src='https://static1.squarespace.com/static/56aacae205caa7065b09c6ff/t/56aae213ab2810426c796e4e/1505934527182/?format=1500w'/>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Flock</Link></li>
          <li><Link to='/'>Team</Link></li>
          <li><Link to='/'>Sponsors</Link></li>
          <li><Link to='/'>Media</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
