import React from 'react'
import TradesContainer from '../containers/tradesContainer'
import {deletePortfolio} from '../actions/deletePortfolio'
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
            {portfolio? <TradesContainer portfolio={portfolio}/> : console.log("....requesting")}
            <button onClick={() => handleDelete(portfolio.id)}>Delete Portfolio</button>
        </div>
    )
}

export default connect(null, {deletePortfolio})(Portfolio) 