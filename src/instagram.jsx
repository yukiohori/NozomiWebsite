import React from 'react';
import '../styles/index.scss';
import firebase from 'firebase';
import axios from 'axios';

export default class login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			instagramImages: []
		}
	}

	componentWillMount(){
		axios.get('http://localhost:9002/api/nozomi-instagram')
		.then((response) => {
			console.log(response.data.items);
			this.setState({
				instagramImages: response.data.items
			});
		})
		.catch(function (error) {
			console.log(error);
  });
	}

	componentDidMount(){
		console.log('Login Page Loaded!');
	}

	render(){
		return(
			<div className="instagram-style">
				<h1 className="set-center">WORKS</h1>
				<div className="flex-body-section">
					 {
						this.state.instagramImages.map((image, index) => {
							if(index % 2 == 0)
							return <img src={image.thumbnail.url} />
						})
					}
				</div>
			</div>
		)
	}
}
