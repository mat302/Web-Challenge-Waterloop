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
                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 729.79 74.96" className='logo'>
                <title>Waterloop Logo</title>
                <path class="cls-1" d="M188.56,287,162.28,344.9,155.08,287l-13.76.1L115,344.9,108,287H70.47a5.28,5.28,0,0,0,0,10.56h26.7a5.31,5.31,0,0,1,0,10.61H77.43a5.28,5.28,0,1,0,0,10.56h23.5a5.27,5.27,0,0,1-.64,10.5H63.51a5.28,5.28,0,0,0,0,10.56h39.66a4.82,4.82,0,0,1,.1,9.65H77.83v0c-.14,0-.27,0-.4,0a5.28,5.28,0,1,0,0,10.56c.14,0,.27,0,.4,0v0h41.58l25.75-55.38,7,55.38h14.5l36.28-73Z" transform="translate(-31.11 -286.09)"/>
                <polygon class="cls-1" points="194.88 0.94 150.87 73.93 165.26 73.93 174.23 58.49 181.22 46.5 199.36 15.44 207.07 46.5 188.49 46.5 181.5 58.49 209.99 58.49 213.86 73.93 228.87 73.93 209.27 0.94 194.88 0.94"/>
                <polygon class="cls-1" points="296.44 0.94 236.89 0.94 234.61 13.34 257.33 13.34 245.03 73.93 259.01 73.93 271.31 13.34 294.14 13.34 296.44 0.94"/>
                <polygon class="cls-1" points="291.75 73.93 346.49 73.93 348.78 61.73 308.12 61.73 311.76 43.37 347.32 43.37 349.72 31.17 314.17 31.17 317.81 13.14 357.44 13.14 359.72 0.94 306.35 0.94 291.75 73.93"/>
                <path class="cls-1" d="M455.54,292.29Q449,287,436.83,287H406.38l-14.6,73h14L410,338.53l2.39-12.3,5.43-27h16.58q6.77,0,10.37,2.66t3.59,7.87q0,7.92-5.1,12.2t-14.39,4.27h-4.35l4.66,12.2,4.17,10.92L437.45,360h15.85l-11.06-24a29.63,29.63,0,0,0,14.6-11,30.44,30.44,0,0,0,5.22-17.83Q462.05,297.56,455.54,292.29Z" transform="translate(-31.11 -286.09)"/>
                <polygon class="cls-1" points="464.63 0.94 450.65 0.94 436.07 73.93 481.42 73.93 483.82 61.32 452.44 61.32 464.63 0.94"/>
                <path class="cls-1" d="M586.39,290.52a37.19,37.19,0,0,0-18.19-4.43,44.07,44.07,0,0,0-21.42,5.36,41.38,41.38,0,0,0-15.65,14.7,38.21,38.21,0,0,0-5.79,20.5,34.09,34.09,0,0,0,4.54,17.5,33,33,0,0,0,12.61,12.37,36.55,36.55,0,0,0,18.19,4.53A43.26,43.26,0,0,0,582,355.59a42.58,42.58,0,0,0,15.7-14.81,37.93,37.93,0,0,0,5.84-20.49A34.2,34.2,0,0,0,599,302.77,32,32,0,0,0,586.39,290.52Zm-1.1,44.37a28.1,28.1,0,0,1-10,9.91A25.8,25.8,0,0,1,562,348.44a21.9,21.9,0,0,1-11.37-3,22.13,22.13,0,0,1-8.09-8.23,23.09,23.09,0,0,1-3-11.58,25.41,25.41,0,0,1,3.81-13.5,28.31,28.31,0,0,1,10.17-9.86,26.82,26.82,0,0,1,13.55-3.64,21.38,21.38,0,0,1,11.15,3,21.11,21.11,0,0,1,7.87,8.19,23.53,23.53,0,0,1,2.87,11.56A25.86,25.86,0,0,1,585.29,334.89Z" transform="translate(-31.11 -286.09)"/>
                <path class="cls-1" d="M669.71,290.52a37.19,37.19,0,0,0-18.19-4.43,44.07,44.07,0,0,0-21.42,5.36,41.38,41.38,0,0,0-15.65,14.7,38.21,38.21,0,0,0-5.79,20.5,34.08,34.08,0,0,0,4.54,17.5,33,33,0,0,0,12.61,12.37A36.55,36.55,0,0,0,644,361.05a43.26,43.26,0,0,0,21.32-5.46A42.58,42.58,0,0,0,681,340.78a37.93,37.93,0,0,0,5.84-20.49,34.2,34.2,0,0,0-4.54-17.52A32,32,0,0,0,669.71,290.52Zm-1.1,44.37a28.1,28.1,0,0,1-10,9.91,25.8,25.8,0,0,1-13.29,3.64,21.91,21.91,0,0,1-11.37-3,22.14,22.14,0,0,1-8.09-8.23,23.09,23.09,0,0,1-3-11.58,25.41,25.41,0,0,1,3.81-13.5,28.31,28.31,0,0,1,10.17-9.86,26.82,26.82,0,0,1,13.55-3.64,21.48,21.48,0,0,1,11.17,3,21.18,21.18,0,0,1,7.86,8.19,23.53,23.53,0,0,1,2.87,11.56A25.86,25.86,0,0,1,668.61,334.89Z" transform="translate(-31.11 -286.09)"/>
                <path class="cls-1" d="M754.53,292.24Q748.18,287,736.29,287H706.47l-14.6,73h14l4.26-21.49,2.4-12.3,5.43-27h15.44q6.67,0,10.27,2.66t3.59,7.87q0,7.92-5.1,12.2t-14.39,4.27h-9.19l-2.39,12.3h9.91a41.11,41.11,0,0,0,18.5-3.9,28.48,28.48,0,0,0,12.11-11,31.66,31.66,0,0,0,4.22-16.47Q760.89,297.46,754.53,292.24Z" transform="translate(-31.11 -286.09)"/>
                <circle class="cls-1" cx="31.25" cy="27.38" r="5.28"/>
                <path class="cls-1" d="M53,349.46H47.68v.06a5.25,5.25,0,0,0,0,10.44v0h.26c.1,0,.2,0,.3,0s.2,0,.3,0h4.12c.1,0,.2,0,.3,0a5.28,5.28,0,1,0,0-10.56Z" transform="translate(-31.11 -286.09)"/>
                <path class="cls-1" d="M52.22,292.31A5.28,5.28,0,0,0,46.94,287H36.38a5.28,5.28,0,1,0,0,10.56H46.94A5.28,5.28,0,0,0,52.22,292.31Z" transform="translate(-31.11 -286.09)"/>
                </svg>
              </Link>
            </li>
            <li className='navSection primary'>
              <li><Link to='/' activeClassName="selected">Home</Link></li>
              <li><Link to='/' activeClassName="selected">Flock</Link></li>
              <li><Link to='/team' activeClassName="selected">Team</Link></li>
              <li><Link to='/sponsors' activeClassName="selected">Sponsors</Link></li>
              <li><Link to='/media' activeClassName="selected">Media</Link></li>
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
