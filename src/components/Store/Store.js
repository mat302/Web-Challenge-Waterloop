import React, { Component} from 'react';
import './Store.css';
import Paper from 'material-ui/Paper';

class Store extends Component {
	render() {
		return (
			<div className='all'>
				<div className='storeHeader'>
					<div className='store-bg'></div>
					<div className='storeThanks'>
						<h2>Merch Store<br/>
						</h2>
					</div>
				</div>
				<div className='storeBody'>
					<div className='stores'>
					</div>
				</div>
			</div>
		);
	}
}

export default Store;
