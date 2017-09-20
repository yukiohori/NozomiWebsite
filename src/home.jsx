import React from 'react';
import '../styles/index.scss';
import {Carousel , Row, Col} from 'react-materialize';

const maxX = 10;
const maxY = 10;

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			worksSelected: {
				works: 'selected',
				gallery:'',
				pageX: 0,
				pageY: 0
			},
			worksShow:'works',
			animationArray:{
				homecontent:'',
				blogcontent:'',
			}
		}

		this.onMouseMove = this.onMouseMove.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.changeWorksCategory = this.changeWorksCategory.bind(this);
	}

	handleScroll() {
		// console.log(window.pageYOffset);
		// console.log(this.refs.homecontent.getBoundingClientRect().top);
		if(this.state.animationArray.homecontent===''){
			if(this.refs.homecontent.getBoundingClientRect().top<300){
				this.state.animationArray.homecontent='show';
				this.setState({
					animationArray: this.state.animationArray
				});
			}
		}

		if(this.state.animationArray.blogcontent===''){
			if(this.refs.blogcontent.getBoundingClientRect().top<300){
				this.state.animationArray.blogcontent='show';
				this.setState({
					animationArray: this.state.animationArray
				});
			}
		}

	}

	onMouseMove(e){
		this.setState({
			pageX: e.pageX,
			pageY: e.pageY
		});
		// console.log(e);
	}

	componentDidMount() {
		window.addEventListener("mousemove", this.onMouseMove);
    // window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
		window.removeEventListener("mousemove", this.onMouseMove);
    // window.removeEventListener("scroll", this.handleScroll);
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
						<div className="top-header">
							<h1>NOZOMI NAKANO</h1>
							<img style={{display: 'block'}} src={require('../img/demo.png')} alt="" />
						</div>
					</Row>
					<Row>
						<h1>NOZOMI NAKANO</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
								Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
						</p>
					</Row>
					<Row>
						<h1>NOZOMI NAKANO</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
								Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
						</p>
					</Row>
				</div>
      </div>
    )
  }
}
