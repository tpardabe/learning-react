import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/NavLinkStyle.css';


class Nav extends React.Component {
   render() {
		return (
			<div>
				<NavLink exact to="/" activeClassName="NavLinkStyle" activeStyle={{color:"green", fontWeight:"bold"}} >Main page</NavLink>
				<NavLink to="/projects" activeClassName="NavLinkStyle" activeStyle={{color:"green", fontWeight:"bold"}}>Projects</NavLink>
			</div>
		);
	}
}

export default Nav;