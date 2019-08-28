import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import './index.css';

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<div className="subheader">
					<span>Behind the scenes? Read the <a href='https://google.com' rel='noopener noreferrer' target='_blank'>documentation</a>.</span>
				</div>
				<div className="mainheader">
					<div>
						<img src={logo} alt='AirSwap logo' />
					</div>
					<div>
						<ul>
							<li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
							<li><NavLink to='/dashboard' activeClassName="activeLink">Dashboard</NavLink></li>
							<li><NavLink to='/explore' activeClassName="activeLink">Explore</NavLink></li>
							<li><a href='https://google.com'>Login via MetaMask</a></li>
						</ul>
					</div>
					<div>

					</div>
				</div>
			</div>
		);
	}
}

export default Header;
