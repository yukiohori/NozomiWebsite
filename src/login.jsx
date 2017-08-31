import React from 'react';
import '../styles/index.scss';
import firebase from 'firebase';

export default class login extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		// console.log(this.props);
	}

	componentDidMount(){
		console.log('Login Page Loaded!');
	}

	render(){
		return(
			<div>
				<div>
					<h1 className="set-center">LOGIN</h1>
				</div>
			</div>
		)
	}
}
