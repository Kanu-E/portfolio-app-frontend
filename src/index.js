import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import portfolioReducer from './reducers/portfolioReducer'
import { BrowserRouter as Router, Redirect} from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(portfolioReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}> 
  <Router>
    <App/>
  </Router>
  </Provider>,
document.getElementById('root')
);

