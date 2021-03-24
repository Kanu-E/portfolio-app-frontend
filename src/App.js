import React, { Component } from 'react';
import {connect} from 'react-redux';
import PortfolioContainer from './containers/portfolioContainer'
import NavBar from './components/navBar';


class App extends Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/portfolios')
  //   .then(response => response.json())
  //   .then (data => console.log(data))
  // }
  render() {

    return (
      <div>
        <NavBar/>
        <PortfolioContainer/>
        
      </div>
    )
  }
}

export default connect()(App)




