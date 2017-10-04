import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div id='header'>
          <div className='header-bg'></div>
          <div className='headerText'>
            <h2>The future of transportation is approaching,<br/> and it&#39;s made in Canada.</h2>
          </div>
        </div>
        <div id='homeText'>
        <Paper className='PaperStyle' zDepth={1}>
          
        </Paper>
        </div>
      </div>
    );
  }
}

export default Home
