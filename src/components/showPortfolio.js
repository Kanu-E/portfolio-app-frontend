import React from 'react'
import TradesContainer from '../containers/tradesContainer'


const Portfolio = (props) =>{
    let portfolio = props.portfolios[props.match.params.id-1]
    return(
        <div>
            {portfolio? <h2>Portfolio {portfolio.name} </h2>: console.log("....requesting")}
            {portfolio? <TradesContainer portfolio={portfolio}/> : console.log("....requesting")}
        </div>
    )
}

export default Portfolio