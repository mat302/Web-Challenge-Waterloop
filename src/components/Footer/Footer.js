import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id='footer-nav'>
          <Link to='/'>Home</Link>
          <Link to='/'>Flock</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
