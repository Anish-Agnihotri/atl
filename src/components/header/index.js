import React from 'react';
import logo from './logo.png';
import './index.css';

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<div className="subheader">
					<span>Behind the scenes? Read the <a href='https://google.com' rel='noopener' target='_blank'>documentation</a>.</span>
				</div>
				<div className="mainheader">
					<div>
						<a href=''><img src={logo} alt='AirSwap logo' /></a>
					</div>
					<div>
						<ul>
							<li><a href='https://google.com'>Home</a></li>
							<li><a href='https://google.com'>Dashboard</a></li>
							<li><a href='https://google.com'>Explore</a></li>
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
