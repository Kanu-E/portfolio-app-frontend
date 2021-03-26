import React, { Component } from 'react';
import {connect} from 'react-redux';
import PortfolioContainer from './containers/portfolioContainer'
import NavBar from './components/navBar';
import './App.css';


class App extends Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/portfolios')
  //   .then(response => response.json())
  //   .then (data => console.log(data))
  // }
  render() {

    return (
      <div>
      <h1 className="App-header">Portfolio Manager</h1>
      <div className="App">
        <NavBar/>
        <PortfolioContainer/>       
      </div>
      </div>
    )
  }
}

export default connect()(App)




