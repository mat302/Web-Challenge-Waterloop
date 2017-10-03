import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
//back to top Button
//social media icons
//Sponsors
class Footer extends Component {
  render() {
    return (
      <footer>
        <div id='footer-nav'>
          <Link to='/'></Link>
          <Link to='/'>Flock</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
