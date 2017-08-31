import React from 'react';
import '../styles/index.scss';

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
			}
		}

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

	componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
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
      <div>
        <div className="top-header">
				</div>
				<div className="home-content" ref="homecontent">
					<div className="about-img">
						<img src={require('../img/about-min.png')} />
					</div>
					<div className={"about-content " + this.state.animationArray.homecontent}>
						<h1>NOZOMI NAKANO</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							 Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
							  Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
						</p>
					</div>
				</div>
				<div className="works-content">
					<h1>Works &amp;  Gallery</h1>
					<div className="works-selection">
						<h2 onClick={()=>this.changeWorksCategory('works')} className={this.state.worksSelected.works}>WORKS</h2>
						<span className="separator">|</span>
						<h2 onClick={()=>this.changeWorksCategory('gallery')} className={this.state.worksSelected.gallery}>GALLERY</h2>
					</div>
					<div className={"works-pictures " + this.state.worksSelected.works }>
						<div>
							<img src={require('../img/works.png')} />
						</div>
						<div>
							<img src={require('../img/about-min.png')} />
						</div>
						<div>
							<img src={require('../img/works.png')} />
						</div>
						<div>
							<img src={require('../img/about-min.png')} />
						</div>
						<div>
							<img src={require('../img/works.png')} />
						</div>
						<div>
							<img src={require('../img/about-min.png')} />
						</div>
						<div>
							<img src={require('../img/works.png')} />
						</div>
					</div>
					<div className={"works-pictures " + this.state.worksSelected.gallery }>
						<div>
							<img src={require('../img/gallery1.png')} />
						</div>
						<div>
							<img src={require('../img/gallery2.png')} />
						</div>
						<div>
							<img src={require('../img/gallery1.png')} />
						</div>
						<div>
							<img src={require('../img/gallery2.png')} />
						</div>
						<div>
							<img src={require('../img/gallery1.png')} />
						</div>
						<div>
							<img src={require('../img/gallery2.png')} />
						</div>
						<div>
							<img src={require('../img/gallery1.png')} />
						</div>
					</div>
					<div className="set-center">
						<a className="more-btn">More Works &amp; Gallery</a>
					</div>
				</div>
				<div className="blog-section">
					<div ref="blogcontent" className={"blog-content " + this.state.animationArray.blogcontent}>
						<h1>BLOG</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							 Aenean mauris nisi, maximus a placerat at, scelerisque sed orci.
							  Pellentesque mi nunc, auctor ut sollicitudin sed, iaculis tristique dolor.
						</p>
						<a className="more-btn">Read my blog</a>
					</div>
					<div className="blog-img">
						<img src={require('../img/blog.jpg')} />
					</div>
				</div>
				<div className="contact-section">
					<div className="contact-img">
						<img src={require('../img/gallery2.png')} />
					</div>
					<div className="contact-content">
						<h1>NOZOMI NAKANO</h1>
						<p>Job Name</p>
						<p>nozomi@gmail.com</p>
						<p>080-0000-1111</p>
						<p>Linkdin address</p>
					</div>
				</div>
      </div>
    )
  }
}
