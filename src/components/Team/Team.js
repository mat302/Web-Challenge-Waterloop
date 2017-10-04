import React, { Component} from 'react';
import './Team.css';
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
						<h2>The Team
						</h2>
					</div>
				</div>
				<div className='sponsorBody'>
					<div className='sponsors'>
						<div className ='goldSponsors'>
								<Paper className ='gold Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
									Waterloop is comprised of like minded students that share the same vision of changing the future of transportation. Years of study vary from first year to Masters students, ranging in disciplines. The team has grown from a small group of students to a 70+ member organization working towards making this idea a reality.
<br /><br />-<br />Due to the nature of Waterloo's co-op program, this roster completely recycles every four months. Please don't hesitate to contact us about inaccuracies or for membership verification.
								</Paper>
						</div>
						<h3>
							Sergey Yarusevych
						</h3>
						<h4>
							Faculty Advisor
						</h4>
					</div><br />
				</div>
			</div>
		);
	}
}

export default Sponsors;
