import React from 'react';
import Path from '../components/path';
import DashboardProtocol from '../components/peerprotocol/dashboardprotocol';

function Dashboard() {
	return (
		<div className="App">
			<Path name="Dashboard" text="Track your onchain peers, or create new ones."/>
			<DashboardProtocol />
		</div>
	);
}

export default Dashboard;
