import React, { Component } from 'react';
import PortfolioContainer from './containers/portfolioContainer'
import NavBar from './components/navBar';
import Home from './components/home';
import {Route} from 'react-router-dom'
import './App.css';


class App extends Component {

  render() {

    return (
      <div>
      <h1 className="App-header">Portfolio Manager</h1>
      <div className="App">
        <NavBar/>
        <Route exact path='/' render={(routerprops) =><Home />}/>
        <PortfolioContainer/>       
      </div>
      </div>
    )
  }
}

export default  App




