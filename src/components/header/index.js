import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { HamburgerButton } from 'react-hamburger-button';
import './index.css';

class Header extends React.Component {

	showMenu(event) {
		event.preventDefault();
		
		this.setState({
			showMenu: !this.state.showMenu,
			open: !this.state.open
		});
	}

	linkCloseMenu(event) {
		event.preventDefault();

		this.setState({
			showMenu: false,
			open: false
		});
	}

	updateDimensions() {
		if (window.innerWidth > 800) {
			this.setState({
				showMenu: false,
				open: false,
				showMenuIcon: false
			});
		}
		else {
			this.setState({
				showMenuIcon: true
			});
		}
	}
	
	constructor() {
		super();
		
		this.state = {
			showMenu: false,
			showMenuIcon: true
		};
		
		this.showMenu = this.showMenu.bind(this);
		this.linkCloseMenu = this.linkCloseMenu.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	render() {
		return(
			<div className="header">
				<div className="subheader">
					<span>Questions? Read the <a href='https://github.com/anish-agnihotri/atl' rel='noopener noreferrer' target='_blank'>documentation</a>.</span>
				</div>
				<div className="mainheader">
					<div>
						<img src={logo} alt='AirSwap logo' />
					</div>
					<div>
						<ul>
							<li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
							<li><NavLink to="/dashboard" activeClassName="activeLink">Dashboard</NavLink></li>
							<li><NavLink to="/explore" activeClassName="activeLink">Explore</NavLink></li>
							<li><a className="loginMetaMask" href='https://airswap.io'>Visit AirSwap</a></li>
						</ul>
						{
							this.state.showMenuIcon
								? (
									<HamburgerButton
										open={this.state.open}
										onClick={this.showMenu}
										strokeWidth={3}
										color="#000"
										height={17}
										width={25}
									/>
								)
								: (
									null
								)
						}
					</div>
					{
						this.state.showMenu
							? (
								<div>
									<ul>
										<li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
										<li><NavLink to="/dashboard" activeClassName="activeLink">Dashboard</NavLink></li>
										<li><NavLink to="/explore" activeClassName="activeLink">Explore</NavLink></li>
										<li><a className="loginMetaMask" href='https://airswap.io'>Visit AirSwap</a></li>
									</ul>
								</div>
							)
							: (
								null
							)
					}
				</div>
			</div>
		);
	}
}

export default Header;
