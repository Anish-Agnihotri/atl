import React from 'react';
import Modal from 'react-responsive-modal';
import './index.css'

// Step imports
import Introduction from './formSteps/introduction';

class DashboardProtocol extends React.Component {
	constructor() {
		super();

		this.state = {
			modalOpen: false
		}

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	/* Modal setup */
	openModal() {
		console.log("checking this works");
		this.setState({ modalOpen: true })
	}

	closeModal() {
		console.log("modal is closed");
		this.setState({ modalOpen: false })
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
					<Introduction />
				</Modal>
			</div>
		);
	}
}

export default DashboardProtocol;
