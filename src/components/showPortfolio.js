import React from 'react'
import TradesContainer from '../containers/tradesContainer'
import PortfolioEdit from '../components/portfolioEdit'
import {deletePortfolio} from '../actions/deletePortfolio'
import StocksContainer from '../containers/stocksContainer'
import {connect} from 'react-redux'
import '../App.css'

const Portfolio = (props) =>{

    console.log(props.match.params)  
    let portfolio = props.portfolios.find(portfolio => portfolio.name === props.match.params.portfolioName)
    const handleDelete =(portfolioId)=>{
        props.deletePortfolio(portfolioId)
        props.history.push('/Portfolios')  
    }

    return(
        <div>
            {portfolio? <h2>Portfolio {portfolio.name} </h2>: console.log("....requesting")}
            {portfolio? <StocksContainer portfolio={portfolio}/> : console.log("....requesting")}
            {portfolio? <PortfolioEdit portfolio={portfolio}/> : console.log("....requesting")}
            <button onClick={() => handleDelete(portfolio.id)}>Delete Portfolio</button>
            <div className="trades">
                {portfolio? <TradesContainer portfolio={portfolio}/> : console.log("....requesting")}
            </div>
        </div>
    )
}

export default connect(null, {deletePortfolio})(Portfolio) 