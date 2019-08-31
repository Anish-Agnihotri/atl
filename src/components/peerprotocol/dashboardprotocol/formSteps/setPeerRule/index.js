import React from 'react';

// TODO: Create component for three rules and animate.
class SetPeerRule extends React.Component {
	render() {
		return(
			<div>
				<div>
					<h1>3. Set Peer Rule</h1>
					<p>Finally, let's set a trading rule for your contract.</p>
				</div>
				<div>
					<button onClick={this.props.tabBackward}>Back</button>
					<button onClick={this.props.tabForward}>Execute</button>
				</div>
			</div>
		);
	}
}

export default SetPeerRule;
