import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPortfolios} from './actions/fetchPortfolios'
import './App.css';

class App extends Component {

  componentDidMount(){
    console.log("componentDidMount")
  }
  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect()(App)




