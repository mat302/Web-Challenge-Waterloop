import React, { Component} from 'react';
import './Sponsors.css';
import Paper from 'material-ui/Paper';
import Spotify from './assets/sponsor_spotify.png';
import SpaceX from './assets/sponsor_spacex.png';
import SponsorshipPackage from './assets/sponsorship_package.pdf';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';


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
							<h3> Gold Sponsors </h3>
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
								<Paper className ='gold Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
									<a href='https://www.spotify.com/ca-en/'>
										<img src={Spotify} alt='Spotify' />
									</a>
								</Paper>
						</div>

						<div className='silverSponsors'>
							<h3> Silver Sponsors </h3>
							<Paper className ='silver Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='https://www.spotify.com/ca-en/'>
									<img src={Spotify} alt='Spotify' />
								</a>
							</Paper>
							<Paper className='silver Paper' circle={true}  zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
							<Paper className ='silver Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='https://www.spotify.com/ca-en/'>
									<img src={Spotify} alt='Spotify' />
								</a>
							</Paper>
						</div>

						<div className='bronzeSponsors'>
							<h3> Bronze Sponsors </h3>
							<Paper className ='bronze Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='https://www.spotify.com/ca-en/'>
									<img src={Spotify} alt='Spotify' />
								</a>
							</Paper>
							<Paper className='bronze Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='http://www.spacex.com/'>
									<img src={SpaceX} alt='SpaceX' />
								</a>
							</Paper>
							<Paper className ='bronze Paper' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								<a href='https://www.spotify.com/ca-en/'>
									<img src={Spotify} alt='Spotify' />
								</a>
							</Paper>
						</div>

						<div className='sponsorMessage'>
							<Paper className='PaperStyle sponsorMessagePaper' zDepth={1}>
								<h3>Why sponsor us? </h3>
								<p>We are a dedicated team of students working towards one common goal:
									 to improve the future of transportation in Canada. Made up of 100 students
									 from nearly all faculties, we are a diverse group of young innovaters hoping to make
									 Hyperloop a reality. By being a sponsor, you are helping us achieve our dream of
									 better transportation for all.
									 <br></br>
									 <br></br>
									 Send us an email at <a href='mailto:sponsorship@teamwaterloop.ca'>sponsorship@teamwaterloop.ca</a> to learn how you can get involved!
									 <br></br>
									 <br></br>
									 Alternatively, check out our sponsorship <a href={SponsorshipPackage}>package</a>.
									 <br></br>
								</p>
							</Paper>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Sponsors;
