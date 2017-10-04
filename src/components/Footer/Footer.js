import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Twitter from './Assets/icon_twitter.svg';
import Instagram from './Assets/icon_instagram.svg';
import Facebook from './Assets/icon_facebook.svg';
import Linkedin from './Assets/icon_linkedin.svg';


import './Footer.css';
//back to top Button
//social media icons
//Sponsors
class Footer extends Component {
  render() {
    return (
      <footer>
        <div id='footer-nav'>
        <a href='https://twitter.com/waterloo_hyper'>
          <img src={Twitter} alt='Twitter' />
        </a>
        <a href='https://www.instagram.com/waterloo_hyper/'>
          <img src={Instagram} alt='Instagram' />
        </a>
        <a href='https://www.facebook.com/waterloohyperloop/'>
          <img src={Facebook} alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/company-beta/16200816/'>
          <img src={Linkedin} alt='Linkedin' />
        </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
