import React, { Component} from 'react';
import './Sponsors.css';
import Paper from 'material-ui/Paper';

//nest paper into cards



class Sponsors extends Component {
	render() {
		return (
			<div className='container'>

			<div className ='goldSponsors'>
				<p> Gold Sponsors </p>
					<Paper className ='gold Paper' circle={true} zDepth={4}>
						<a href='https://www.spotify.com/ca-en/'>
							<img src='/assets/sponsor_spotify.png' alt='Spotify' />
						</a>
					</Paper>

					<Paper className = 'gold Paper' circle={true} zDepth={4}>
						<a href='http://www.spacex.com/'>
							<img src='/assets/sponsor_spacex.png' alt='SpaceX' />
						</a>
					</Paper>

			</div>

			<div className='silverSponsors'>
				<p> Silver Sponsors </p>
				<Paper className = 'silver Paper' circle={true} zDepth={4}>
					<a href='http://www.facebook.com/'>
						<img src='/assets/icon_facebook.svg' alt='Facebook'/>
					</a>
				</Paper>

				<Paper className='silver Paper' circle={true}  zDepth={4}>
					<a href='http://www.twitter.com/'>
						<img src='/assets/icon_twitter.svg' alt='Twitter' />
					</a>
				</Paper>
			</div>

			<div className='bronzeSponsors'>
				<p> Bronze Sponsors </p>
				<Paper className='bronze Paper' circle={true} zDepth={4}>
					<a href='http://www.instagram.com/'>
						<img src='/assets/icon_instagram.svg' alt='Instagram' />
					</a>
				</Paper>

				<Paper className='bronze Paper' circle={true} zDepth={4}>
					<a href='http://www.linkedin.com/'>
						<img src='/assets/icon_linkedin.svg' alt='LinkedIn' />
					</a>
				</Paper>
			</div>


			</div>

		);
	}
}

export default Sponsors;
