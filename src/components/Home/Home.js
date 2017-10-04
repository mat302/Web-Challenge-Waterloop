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
          <Paper className='PaperStyle homePaper' zDepth={1}>
            <h2>What is Hyperloop?</h2>
            <p>The Hyperloop is a proposed supersonic train line stretching across
            the country in underground airless tubes. We believe that it&#39;s the
            future of transportation, and an example of how sound engineering can
            overcome any problem.</p>
          </Paper>
          <Paper className='PaperStyle homePaper' zDepth={1}>
            <h2>What is Waterloop?</h2>
            <p>We represent Canada in the SpaceX Hyperloop Competition, a university
            competition to build the fastest and safest half-scale Hyperloop
            prototype. In the future, we hope to build one of the first
            full-scale passenger Hyperloops in the world, right here in Canada.</p>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Home
