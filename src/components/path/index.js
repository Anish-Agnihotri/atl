import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Path extends React.Component {
	render(props) {
		return(
			<div className="path">
				<div className="pageItem">
					<h2>{ this.props.name }</h2>
					{
						this.props.parentLink !== undefined
							? (
								<Link to={ this.props.parentLink }>{ this.props.parentLinkName }</Link>
							)
							: (
								null
							)
					}
					<p>{ this.props.text }</p>
				</div>
			</div>
		);
	}
}

export default Path;
