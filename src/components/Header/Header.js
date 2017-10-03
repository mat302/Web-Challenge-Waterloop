import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id='head'>
        <div className='header-bg'></div>
        <h1>Waterloop</h1>
        <Button style={{color: '#fff'}}>
        	About
        </Button>
        <Button style={{color: '#fff'}}>
        	Team
        </Button>
      </div>
    );
  }
}

export default Header;
