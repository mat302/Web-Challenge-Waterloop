import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div id='main-nav'>
        <div className='container'>
          <ul className='navRoot'>
            <li className='navSection logo'>
              <Link to = '/'>

              </Link>
            </li>
            <li className='navSection primary'>
              <li><Link to='/' activeClassName="selected">Home</Link></li>
              <li><Link to='/' activeClassName="selected">Flock</Link></li>
              <li><Link to='/' activeClassName="selected">Team</Link></li>
              <li><Link to='/' activeClassName="selected">Sponsors</Link></li>
              <li><Link to='/' activeClassName="selected">Media</Link></li>
            </li>
            <li className='navSection contact'>
              <li><Link to='/' activeClassName="selected">Contact</Link></li>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
