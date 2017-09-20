import React from 'react';
import '../styles/index.scss';
import {Link} from 'react-router-dom';

export default class navBar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			menuState:'',
			menuSymbol:'&#9776;'
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	componentWillMount(){
		if(window.location.href.split('/')[window.location.href.split('/').length-1]==='login'){
			this.state.menuState = 'hide';
		}
	}

	showMenu(e){
		e.preventDefault();
		if(this.state.menuState===''){
			this.state.menuState = 'open';
			this.state.menuSymbol = '&#10006;';
			document.body.classList.add('disable');
		}else{
			this.state.menuState = '';
			this.state.menuSymbol = '&#9776;';
			document.body.classList.remove('disable');
		}
		this.setState({
			menuState: this.state.menuState,
			menuSymbol: this.state.menuSymbol
		});
	}

	closeMenu(){
		// console.log(window.location.href);
		this.state.menuState = '';
		this.state.menuSymbol = '&#9776;';
		document.body.classList.remove('disable');
		this.setState({
			menuState: this.state.menuState,
			menuSymbol: this.state.menuSymbol
		});
	}

  render() {
    return (
      <div className={"nav-style " + this.state.menuState}>
				<a className="icon-menu" onClick={ this.showMenu } id="nav-toggle" href="#" dangerouslySetInnerHTML={{__html: this.state.menuSymbol}}></a>
				<div className="menu-content">
					<div className="link-menu">
						<Link to="/">
							<div onClick={this.closeMenu} className="link-img">
								<div className="img-menu-bg">
									<h1>HOME</h1>
								</div>
							</div>
						</Link>
						<Link to="/instagram">
							<div onClick={this.closeMenu} className="link-img">
								<div className="img-menu-bg">
									<h1>WORKS</h1>
								</div>
							</div>
						</Link>
						<Link to="/">
							<div onClick={this.closeMenu} className="link-img">
								<div className="img-menu-bg">
									<h1>GALLERY</h1>
								</div>
							</div>
						</Link>
						<Link to="/">
							<div onClick={this.closeMenu} className="link-img">
								<div className="img-menu-bg">
									<h1>BLOG</h1>
								</div>
							</div>
						</Link>
					</div>
					<div className="social-menu">
						<a target="_blank" href="https://www.instagram.com"><p>INSTAGRAM</p></a>
						<p>TWITTER</p>
						<p>FACEBOOK</p>
					</div>
				</div>
      </div>
    )
  }
}
