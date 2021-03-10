import React from 'react'
import {Route, Link} from 'react-router-dom'
import Portfolio from './showPortfolio'

const Portfolios = (props) => {
    // console.log(props.portfolios)
    return (
        <div>
           {props.portfolios.map (portfolio=>
           <li key={portfolio.id}>
               <Link to={`./portfolios/${portfolio.id}`}> {portfolio.name} </Link>
            </li>)}
        </div>
    )
}

export default Portfolios