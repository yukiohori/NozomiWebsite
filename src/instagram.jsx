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
			// console.log(response.data.items);
			let InstagramArray = [];
			let countImage = 0;
			let objectImage = {};
			response.data.items.map((data)=>{
				countImage+=1;
				if(countImage==1){
					objectImage.image1 = data.thumbnail.url;
				}else{
					objectImage.image2 = data.thumbnail.url;
				}
				if(countImage == 2){
					countImage = 0;
					InstagramArray.push(objectImage);
					objectImage = {};
				}
			});

			this.setState({
				instagramImages: InstagramArray
			});

			console.log(InstagramArray);
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
							return <div key={index} className="inst-image">
								<img src={image.image1} />
								<img src={image.image2} />
							</div>
						})
					}
				</div>
			</div>
		)
	}
}
