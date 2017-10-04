import React, { Component} from 'react';
import './Team.css';
import Paper from 'material-ui/Paper';

class Team extends Component {
	render() {
		return (
			<div className='all'>
				<div className='teamHeader'>
					<div className='team-bg'></div>
					<div className='teamThanks'>
						<h2>The Team
						</h2>
					</div>
				</div>
				<div className='teamBody'>
					<div className='teams'>
						<div className ='goldteams'>
								<Paper className ='gold Paperteam' circle={true} zDepth={1} style={{overflow:'hidden'}}>
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
						<div className='lhs'>
							<Paper className ='teamNumber' circle={true} zDepth={1} style={{overflow:'hidden'}}>
								Technical team
							</Paper>
							<img src='assets/clive.jpg'></img>
							ggg ggggggg ggggggggf fffffffff ffffffffg gggggggg
						</div>
						<div className='rhs'>
							hhhhhh j jh jh jh hj hj j j j
						</div>
					</div><br />
				</div>
			</div>
		);
	}
}

export default Team
