import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom';

render( <BrowserRouter><App/></BrowserRouter>, document.querySelector("#app"));
