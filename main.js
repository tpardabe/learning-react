import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import ReactRouterDOM from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About.jsx';
import Projects from './Projects.jsx';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Nav/>
	    	<Switch>
	    		<Route exact path="/" component={About} />
		    	<Route path="/projects" component={Projects}/>
		 	</Switch>
	 	</div>
    </BrowserRouter>,
         document.getElementById('app'));