import React from 'react';
import Web3 from 'Web3';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Global header setup
import Header from './components/header';

// Page setup
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';

// Web3 setup

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/explore" component={Explore} />
      </Router>
    </div>
  );
}

export default App;
