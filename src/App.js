import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Global header setup
import Header from './components/header';

// Page setup
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';

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
