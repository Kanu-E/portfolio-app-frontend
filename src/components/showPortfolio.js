import React, {Component} from 'react'
import TradesContainer from '../containers/tradesContainer'
import PortfolioEdit from '../components/portfolioEdit'
import {deletePortfolio} from '../actions/deletePortfolio'
import StocksContainer from '../containers/stocksContainer'
import {getPortfolio} from '../actions/getPortfolio'
import SearchBar   from '../components/searchBar'

import {connect} from 'react-redux'
import '../App.css'


class Portfolio extends  Component{



    // getPortfolio(this.props.match.params.portfolioName)
    
render() {
    
    console.log(this.props.match.params)  
    let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)
    const handleDelete =(portfolioId)=>{
        this.props.deletePortfolio(portfolioId)
        this.props.history.push('/Portfolios')  
    }
    portfolio&&this.props.getPortfolio(portfolio)

    return(
        <div>      
             <SearchBar history={this.props.history}/>
            {portfolio&&  <h2>Portfolio {portfolio.name} </h2> }
            {portfolio && <StocksContainer portfolio={portfolio}/> }
            {portfolio && <PortfolioEdit portfolio={portfolio} history={this.props.history}/>}
            <button onClick={() => handleDelete(portfolio.id)}>Delete Portfolio</button>
            <div className="trades">
                {portfolio && <TradesContainer portfolio={portfolio}/>}
            </div>
        </div>
    )
}
}


export default connect(null, {deletePortfolio, getPortfolio})(Portfolio) 