import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id='header'>
          <div className='header-bg'></div>
          <Button style={{color: '#fff', marginTop:'200px'}}>
          	About
          </Button>
          <Button style={{color: '#fff'}}>
          	Team
          </Button>
        </div>
      </header>
    );
  }
}

export default Header;
