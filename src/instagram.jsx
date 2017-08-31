import React from 'react';
import '../styles/index.scss';
import firebase from 'firebase';
import axios from 'axios';
import {Button, Icon, Modal, MediaBox, Card, CardTitle} from 'react-materialize';

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
			let InstagramArray = [];
			let countImage = 0;
			let objectImage = {};
			response.data.items.map((data)=>{
				countImage+=1;
				if(countImage==1){
					objectImage.image1 = data.images.standard_resolution.url;
					objectImage.text = data.caption.text;
				}else{
					objectImage.image2 = data.images.standard_resolution.url;
					objectImage.text = data.caption.text;
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
				<div className="flex-body-section">
					{/* <Modal
						header='Modal Header'
						trigger={<Button>MODAL</Button>}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					</Modal> */}
					 {
						this.state.instagramImages.map((image, index) => {
							return <div key={index} className="inst-image">
								<Card header={<CardTitle reveal image={image.image1} waves='light'/>}
								reveal={<p>{image.text}</p>}>
								</Card>

								<Card header={<CardTitle reveal image={image.image2} waves='light'/>}
								reveal={<p>{image.text}</p>}>
								</Card>
								{/* <img src={image.image1} /> */}
								{/* <MediaBox src={image.image1} caption="A demo media box1" width="400"/> */}
								{/* <img src={image.image2} /> */}
								{/* <MediaBox src={image.image2} caption="A demo media box2" width="400"/> */}
							</div>
						})
					}
				</div>
			</div>
		)
	}
}
