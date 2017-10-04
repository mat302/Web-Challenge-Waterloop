import React, { Component} from 'react';
import './Store.css';
import Paper from 'material-ui/Paper';
import Spotify from './assets/sponsor_spotify.png';
import SpaceX from './assets/sponsor_spacex.png';

class Sponsors extends Component {
	render() {
		return (
			<div className='all'>
				<div className='sponsorHeader'>
					<div className='sponsor-bg'></div>
					<div className='sponsorThanks'>
						<h2>Media<br/>
						</h2>
					</div>
				</div>
				<div className='sponsorBody'>
					<div className='sponsors'>
					</div>
				</div>
			</div>
		);
	}
}

export default Sponsors;
