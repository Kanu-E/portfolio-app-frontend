import React from 'react'
import TradesContainer from '../containers/tradesContainer'
import PortfolioEdit from '../components/portfolioEdit'
import {deletePortfolio} from '../actions/deletePortfolio'
import StocksContainer from '../containers/stocksContainer'
import {connect} from 'react-redux'


const Portfolio = (props) =>{
   
    let portfolio = props.portfolios.find(portfolio => portfolio.id == props.match.params.id)


    const handleDelete =(portfolioId)=>{
        props.deletePortfolio(portfolioId)
        props.history.push('/Portfolios')  
    }

    return(
        <div>
            {portfolio? <h2>Portfolio {portfolio.name} </h2>: console.log("....requesting")}
            {portfolio? <StocksContainer portfolio={portfolio}/> : console.log("....requesting")}
            {portfolio? <TradesContainer portfolio={portfolio}/> : console.log("....requesting")}
            {portfolio? <PortfolioEdit portfolio={portfolio}/> : console.log("....requesting")}
            <button onClick={() => handleDelete(portfolio.id)}>Delete Portfolio</button>
        </div>
    )
}

export default connect(null, {deletePortfolio})(Portfolio) 