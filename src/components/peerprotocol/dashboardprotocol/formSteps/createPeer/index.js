import React from 'react';

// TODO: Create component for three rules and animate.
class CreatePeer extends React.Component {
	render() {
		return(
			<div>
				<div>
					<h1>2. Generate Peer</h1>
					<p>Next, let's generate your onchain Peer contract.</p>
				</div>
				<div>
					<button onClick={this.props.tabBackward}>Back</button>
					<button onClick={this.props.tabForward}>Next Step</button>
				</div>
			</div>
		);
	}
}

export default CreatePeer;
