import React, { Component} from 'react';
import './Sponsors.css';
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
						<h2>Thank you,<br/>
								from the Waterloop team.
						</h2>
					</div>
				</div>
				<div className='sponsorBody'>
					<div className='sponsors'>
						<div className ='goldSponsors'>
							<p> Gold Sponsors </p>
								<Paper className ='gold Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
									<a href='https://www.spotify.com/ca-en/'>
										<img src={Spotify} alt='Spotify' />
									</a>
								</Paper>
								<Paper className = 'gold Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
									<a href='http://www.spacex.com/'>
										<img src={SpaceX} alt='SpaceX' />
									</a>
								</Paper>
						</div>

						<div className='silverSponsors'>
							<p> Silver Sponsors </p>
							<Paper className = 'silver Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
							<Paper className='silver Paper' circle={true}  zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
						</div>

						<div className='bronzeSponsors'>
							<p> Bronze Sponsors </p>
							<Paper className='bronze Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
							<Paper className='bronze Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
						</div>

						<div className='sponsorMessage'>
							<h3>Why sponsor us? </h3>
							<p>We are a dedicated team of students working towards one common goal: <br/>
								 to improve the future of transportation in Canada.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Sponsors;
