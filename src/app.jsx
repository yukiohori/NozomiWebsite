import React from 'react';
import '../styles/index.scss';
import NavBar from './navbar.jsx';
import Home from './home.jsx';
import Login from './login.jsx';
import Instagram from './instagram.jsx';
import { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}


  render() {
    return (
      <div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/instagram" component={Instagram} />
					<Route path="/login" component={Login} />
					{/* <Route path='/login' render={(props) => (
						<Page {...props} />
					)}/> */}
				</Switch>
      </div>
    )
  }
}
