import React from 'react';
import '../styles/index.scss';

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
			<div className="loading-style">

			</div>
		)
	}
}
