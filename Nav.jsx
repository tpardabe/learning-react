import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
   render() {
		return (
			<div class="topnav">
				<NavLink exact to="/">Main page</NavLink>
				<NavLink to="/projects">Projects</NavLink>
			</div>
		);
	}
}

export default Nav;