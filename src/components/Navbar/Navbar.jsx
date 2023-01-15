import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h1>AlphaCode.</h1>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Contact</NavLink>
				</li>
				<li>
					<NavLink to='/gallery'>Gallery</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
