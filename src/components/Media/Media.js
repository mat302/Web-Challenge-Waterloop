import React, { Component} from 'react';
import './Media.css';
import Paper from 'material-ui/Paper';

class Media extends Component {
	render() {
		return (
			<div className='all'>
				<div className='mediaHeader'>
					<div className='media-bg'></div>
					<div className='mediaThanks'>
						<h2>Media<br/>
						</h2>
					</div>
				</div>
				<div className='mediaBody'>
					<div className='medias'>
					</div>
				</div>
			</div>
		);
	}
}

export default Media;
