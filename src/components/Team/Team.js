import React, { Component} from 'react';
import './Team.css';
import Paper from 'material-ui/Paper';
import TeamStructure from './TeamStructure.json';


var teamJson = TeamStructure;

function TeamBlock(props) {
	var elements = [];
	elements.push(<li className="leadName">Lead: {props.members[0]}</li>)
	for(var i = 1; i < props.members.length; i++ ){
		elements.push(<li className="memberName">{props.members[i]}</li>)
	}
	return (
		<div className="teamBlock">
			<Paper className="blockHeading">
				<span>{props.name}</span><span className="rightAlign">{props.members.length}</span>
			</Paper>
			<div className="blockText">
				<ul className="noBullets">
					{elements}
				</ul>
			</div>
		</div>
	);
}

function LeadBlock(props) {
	var elements = [];
	elements.push(<li className="leadName">Lead: {props.members[0]}</li>)
	for(var i = 1; i < props.members.length; i++ ){
		elements.push(<li className="memberName">{props.members[i]}</li>)
	}
	return (
		<div className="leadBlock">
			<Paper className="blockHeading">
				<span>{props.name}</span><span className="rightAlign">{props.membersLength}</span>
			</Paper>
			<div>
				<img className="leadImage" src={require("./assets/" + props.src)}/>
			</div>
		</div>
	);
}

class Team extends Component {

	renderLeadBlock() {
		let leads = [];
		for(let i =0; i < teamJson.leads.length; i++){
			leads.push(<LeadBlock 
				name={teamJson.leads[i].position} 
				membersLength = {teamJson.leads[i].numMembers} 
				src={teamJson.leads[i].src} 
				leadName={teamJson.leads[i].leadName} 
				members={['Alpha','Beta','Gamma','Gamma','Gamma','Gamma']}
			/>);
		}
		return (
			<div className="leadRow">
				<div className='leadColumn'>
					{leads}
				</div>
			</div>
		);
	}

	renderTeamBlock() {
		let teams = [];
		let spare = teamJson.teams.length % 6;

		// Handles teams up until a multiple of 6
		for(let i = 0; i < teamJson.teams.length - spare; i+=6){
			let column = [];
			for(let j = i; j < i+6; j+=3){
				let block = [];
				for(let k = 0; k < 3; k++){
					block.push(<TeamBlock 
						name={teamJson.teams[j+k].name} 
						members={teamJson.teams[j+k].members}
					/>);
				}
				column.push(
					<div className='teamColumn'>
						{block}
					</div>
				);
			}
			teams.push(
				<div className="teamRow">
					{column}
				</div>	
			);
		}

		// Handles the remaining teams to divide equally
		if(spare){
			let column = [];
			let block = [];
			for(let k = 0; k < (spare - (spare/2 >> 0)); k++){
				block.push(<TeamBlock 
					name={teamJson.teams[teamJson.teams.length-spare+k].name} 
					members={teamJson.teams[teamJson.teams.length-spare+k].members}
				/>);
			}
			column.push(
				<div className='teamColumn'>
					{block}
				</div>
			);
			block = [];
			for(let k = (spare - (spare/2 >> 0)); k < spare; k++){
				block.push(<TeamBlock 
					name={teamJson.teams[teamJson.teams.length-spare+k].name} 
					members={teamJson.teams[teamJson.teams.length-spare+k].members}
				/>);
			}
			column.push(
				<div className='teamColumn'>
					{block}
				</div>
			);
			teams.push(
				<div className="teamRow">
					{column}
				</div>	
			);
		}

		return teams;
	}

	render() {
		return (
			<div className='team'>
				<div className='teamHeader'>
					<div className='team-bg'></div>
					<div className='teamText'>
						<h2>The Team</h2>
					</div>
				</div>
				<div className='teamBody'>
					<Paper className='teamPaper' zDepth={1}>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          			</Paper>
					<br/><br/><br/><br/>
					<div className="verticalRuler"></div>					
					<div className="captainRow">
						Faculty Advisor<br/><br/>
					</div>
					{this.renderLeadBlock()}
					{this.renderTeamBlock()}
				</div>
			</div>
		);
	}
}

export default Team;

