import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {fetchPortfolios} from './actions/fetchPortfolios'
import PortfolioContainer from './containers/portfolioContainer'
import StocksContainer from './containers/stocksContainer'
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
        App
        <PortfolioContainer/>
        {/* <StocksContainer/> */}
      </div>
    )
  }
}

export default connect()(App)




