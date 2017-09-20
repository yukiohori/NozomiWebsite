import React from 'react';
import '../styles/index.scss';
import {Carousel , Row, Col, Parallax, Toast, Button, Input, Footer} from 'react-materialize';

const transformFactor = 0.11;
const transformFactor2 = 0.2;
const shadowFactor = 2;
const scale = (n, min, max) => n * (max - min) + min;
const calculateAngle = (x, y, width, height) => Math.atan2(x - (width / 2), -(y - (height / 2))) * (180 / Math.PI);

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			worksSelected: {
				works: 'selected',
				gallery:''
			},
			worksShow:'works',
			animationArray:{
				homecontent:'',
				blogcontent:'',
			},
			topImage: 'matrix3d(1, 0, 0, 0,0, 1, 0, 0,0, 0, 1, 0,0, 0, 0, 1)',
			topLetter: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
			topPosition: '',
			boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
		}

		this.onMouseMove = this.onMouseMove.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.changeWorksCategory = this.changeWorksCategory.bind(this);
	}

	handleScroll() {
		// console.log(window.pageYOffset);
		// console.log(this.refs.homecontent.getBoundingClientRect().top);
		if(this.state.animationArray.homecontent===''){
			if(this.refs.homecontent.getBoundingClientRect().top<600){
				this.state.animationArray.homecontent='show';
				this.setState({
					animationArray: this.state.animationArray
				});
			}
		}
	}

	onMouseMove(e){

		const x = e.pageX;
		const y = e.pageY;

		const scaledX = scale(x / this.refs.imagehover.clientWidth, -1, 1);
		const scaledY = scale(y / this.refs.imagehover.clientHeight, -1, 1);

		const maxX = Math.atan2(15, this.refs.imagehover.clientHeight * .5 * 180 / Math.PI);
		const maxY = Math.atan2(15, this.refs.imagehover.clientWidth * .5 * 180 / Math.PI);
		const opacity = Math.max(Math.abs(scaledX / maxX), Math.abs(scaledY / maxY));

		const angle = calculateAngle(x, y, this.refs.imagehover.clientWidth, this.refs.imagehover.clientHeight);

		this.setState({
			topImage: 'matrix3d(1, 0, '+(-scaledX * transformFactor)+', 0,0, 1, '+(-scaledY * transformFactor)+', 0,0, 0, 1, 0,0, 0, 0, 1)',
			topLetter: 'matrix3d(1, 0, '+(-scaledX * transformFactor2)+', 0,0, 1, '+(-scaledY * transformFactor2)+', 0, 0, 0, 1, 0,0, 0, 0, 1)',
			topPosition: 'translateX(0px) translateY('+(-scaledY * 20)+'px) translateZ(150px)',
			boxShadow: (-scaledX * shadowFactor)+'px '+(-scaledY * shadowFactor)+'px '+(30)+'px rgba(0, 0, 0,'+(opacity * 2)
		});
	}

	componentDidMount() {
		this.refs.imagehover.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
		this.refs.imagehover.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("scroll", this.handleScroll);
  }

	changeWorksCategory(category){
		console.log(category);
		if(category==='works'){
			this.state.worksSelected.works='selected';
			this.state.worksSelected.gallery='';
		}else{
			this.state.worksSelected.works='';
			this.state.worksSelected.gallery='selected';
		}
		this.setState({
			worksSelected: this.state.worksSelected
		});
	}

  render() {
    return (
      <div className="backgournd-content">
				<div className="container-style">
					<Row>
						<div ref="imagehover" className="top-header">
							<div className="top-letter" style={{transform: this.state.topPosition}}>
								<h1 style={{transform: this.state.topLetter}}>NOZOMI NAKANO</h1>
							</div>
							<img style={{transform: this.state.topImage, boxShadow: this.state.boxShadow}} src={require('../img/demo.png')} alt="" />
						</div>
					</Row>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<hr />
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					<div ref="homecontent" className={"about-home " + this.state.animationArray.homecontent}>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<h1>NOZOMI NAKANO</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
									Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
							</p>
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					</div>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<hr />
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					<Row className="content-home">
						<Col s={12} m={12} l={6}>
							<Parallax imageSrc={require('../img/demo.png')} alt="" />
						</Col>
						<Col s={12} m={12} l={6} className="content-centered">
							<h1>NOZOMI NAKANO</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
									Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
							</p>
						</Col>
					</Row>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<hr />
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					<Row>
						<Col s={12} m={12} l={12}>
							<h1  className="content-home">WORKS</h1>
						</Col>
						<Col s={12} m={12} l={12}>
							<Carousel
								fixedItem={<button className='btn'>MORE</button>}
								options={{ fullWidth: true,duration: 300, indicators: true }}
								images={[
									require('../img/demo.png'),
									require('../img/demo.png'),
									require('../img/demo.png')
								]}
							/>
						</Col>
					</Row>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<hr />
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					<Row>
						<Col s={12} m={12} l={12}>
							<h1  className="content-home">GALLERY</h1>
						</Col>
						<Col s={12} m={12} l={12}>
							<Carousel
								fixedItem={<button className='btn'>MORE</button>}
								options={{ fullWidth: true,duration: 300, indicators: true }}
								images={[
									require('../img/demo.png'),
									require('../img/demo.png'),
									require('../img/demo.png')
								]}
							/>
						</Col>
					</Row>
					<Row>
						<Col s={12} m={2} l={3}></Col>
						<Col s={12} m={8} l={6}>
							<hr />
						</Col>
						<Col s={12} m={2} l={3}></Col>
					</Row>
					<Row>
						<h1 className="content-home">CONTACT</h1>
						<Input placeholder="Type your name" s={6} label="First Name" />
						<Input s={6} label="Last Name" />
						<Input type="email" label="Email" s={12} />
						<Input type="textarea" label="Mensage" s={12} />
					</Row>
					<Footer copyrights="COPYRIGHT © 2017 WEBDESIGN & DEVELOPMENT BY YUKI OHORI"
						moreLinks={
							<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
						}
						links={
							<ul>
								<li><a className="grey-text text-lighten-3" href="#!">HOME</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">WORK</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">GALLERY</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">BLOG</a></li>
							</ul>
						}
						className='example'
					>
							<h5 className="white-text">Footer Content</h5>
							<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
					</Footer>
				</div>
      </div>
    )
  }
}
