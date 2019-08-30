import React from 'react';
import Path from '../components/path';
import Presetup from '../components/presetup';

function Dashboard() {
	return (
		<div className="App">
			<Path name="Dashboard" text="Track your onchain peers, or create new ones."/>
			<Presetup />
		</div>
	);
}

export default Dashboard;
