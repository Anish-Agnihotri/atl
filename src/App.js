import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Global header setup
import Header from './components/header';

// Page setup
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';

// Web3 Engine setup
import Web3 from 'web3';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      account: ''
    }
  }

  async loadWeb3() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080');
    const network = await web3.eth.net.getNetworkType();
    console.log(network);
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
  }

  async componentDidMount() {
    await this.loadWeb3()
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <p>{this.state.account}</p>

          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/explore" component={Explore} />
        </Router>
      </div>
    );
  }
}

export default App;
