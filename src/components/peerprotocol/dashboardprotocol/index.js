import React from 'react';
import Modal from 'react-responsive-modal';
import './index.css'

// Step imports
import Introduction from './formSteps/introduction';
import CreateSwap from './formSteps/createSwap';
import CreatePeer from './formSteps/createPeer';
import SetPeerRule from './formSteps/setPeerRule';

class DashboardProtocol extends React.Component {
	constructor() {
		super();

		this.state = {
			modalOpen: false,
			modalTab: 0,
		}

		// Handle modal
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		
		// Handle modal tabs
		this.tabForward = this.tabForward.bind(this);
		this.tabBackward = this.tabBackward.bind(this);
		this.renderTab = this.renderTab.bind(this);
	}

	/* Modal setup */
	openModal() {
		this.setState({ modalOpen: true })
	}

	closeModal() {
		this.setState({ modalOpen: false, modalTab: 0 })
	}

	tabForward() {
		this.setState({ modalTab: this.state.modalTab + 1});
	}
	tabBackward() {
		this.setState({ modalTab: this.state.modalTab - 1 });
	}
	
	// TODO: Refactor to Switch?
	renderTab() {
		if (this.state.modalTab === 0) {
			return <Introduction tabForward={this.tabForward}/>;
		}
		else if (this.state.modalTab === 1) {
			return <CreateSwap tabBackward={this.tabBackward} tabForward={this.tabForward}/>;
		}
		else if (this.state.modalTab === 2) {
			return <CreatePeer tabBackward={this.tabBackward} tabForward={this.tabForward}/>;
		}
		else if (this.state.modalTab === 3) {
			return <SetPeerRule tabBackward={this.tabBackward} tabForward={this.tabForward}/>;
		}
	}

	render(props) {
		return(
			<div>
				<div className="pageItem">
					<div className="dashboardProtocol">
						<button onClick={this.openModal} className="peer create">
							<h2>+ Create Peer</h2>
						</button>
					</div>
				</div>
				<Modal
					className="protocolModal"
					open={this.state.modalOpen}
					onClose={this.closeModal}
					classNames={{
						overlay: "dashboardOverlay",
						modal: "dashboardModal"
					}}
					center
				>
					{ this.renderTab() }
				</Modal>
			</div>
		);
	}
}

export default DashboardProtocol;
