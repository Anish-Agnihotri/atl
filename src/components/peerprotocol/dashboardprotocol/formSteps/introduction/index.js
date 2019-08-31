import React from 'react';

// TODO: Create component for three rules and animate.
class Introduction extends React.Component {
	render(props) {
		return(
			<div>
				<div>
					<h1>Create a Peer</h1>
					<p>Create an onchain trading rule in three quick, easy steps.</p>
				</div>
				<div>
					<button onClick={this.props.tabForward} className="started">Get Started</button>
				</div>
			</div>
		);
	}
}

export default Introduction;
