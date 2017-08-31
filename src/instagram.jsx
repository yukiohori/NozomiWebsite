import React from 'react';
import '../styles/index.scss';
import firebase from 'firebase';
import axios from 'axios';
import Lightbox from 'react-images';
import {Button, Icon, Modal, MediaBox, Card, CardTitle} from 'react-materialize';

export default class login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			instagramImages: [],
			instagramImagesBox: [],
			lightboxIsOpen: false,
			currentImage: 0,
		}

		this.openLightbox = this.openLightbox.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
	}

	componentWillMount(){
		axios.get('http://localhost:9002/api/nozomi-instagram')
		.then((response) => {
			console.log(response.data.items);
			let InstagramArray = [];
			let InstagramArrayImage = [];
			let countImage = 0;
			let objectImage = {};
			response.data.items.map((data,indexImg)=>{
				InstagramArrayImage.push({src:data.images.standard_resolution.url.replace("s640x640","s1080x1080")});
				countImage+=1;
				if(countImage==1){
					objectImage.image1 = data.images.standard_resolution.url.replace("s640x640","s1080x1080");
					objectImage.text1 = data.caption.text;
					objectImage.index1 = indexImg;
				}else{
					objectImage.image2 = data.images.standard_resolution.url.replace("s640x640","s1080x1080");
					objectImage.text2 = data.caption.text;
					objectImage.index2 = indexImg;
				}
				if(countImage == 2){
					countImage = 0;
					InstagramArray.push(objectImage);
					objectImage = {};
				}
			});

			this.setState({
				instagramImages: InstagramArray,
				instagramImagesBox: InstagramArrayImage
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

	handleClickImage () {
		if (this.state.currentImage === this.state.instagramImagesBox.length - 1) return;
		this.gotoNext();
	}

	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}

	render(){
		return(
			<div className="instagram-style">
				<div className="flex-title">
					<h1>INSTAGRAM</h1>
				</div>
				<div className="flex-body-section">
					{/* <Modal
						header='Modal Header'
						trigger={<Button>MODAL</Button>}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					</Modal> */}
					 {
						this.state.instagramImages.map((image, index) => {
							return <div key={index} className="inst-image">
								 <img src={image.image1} onClick = {(e)=>{this.openLightbox(image.index1,e)}} />
								{/* <MediaBox src={image.image1} caption="A demo media box1" width="400"/> */}
								 <img src={image.image2 } onClick = {(e)=>{this.openLightbox(image.index2,e)}} />
								{/* <MediaBox src={image.image2} caption="A demo media box2" width="400"/> */}
							</div>
						})
					}
				</div>
				<div className="flex-bot-menu">
					<Button waves='teal'>PORTFOLIO</Button>
					<Button waves='teal'>INSTAGRAM</Button>
					<Button waves='teal'>FACEBOOK</Button>
				</div>
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.state.instagramImagesBox}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					onClose={this.closeLightbox}
					onClickThumbnail={this.gotoImage}
					showThumbnails={true}
				/>
			</div>
		)
	}
}
