import React from 'react'
import {Link} from 'react-router-dom'
// import Trade from './showTrade'

const Trades = (props) => {

    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    // })   
       
    return (
        <div>
            Trades
           {props.trades.map (trade=>
           <div key={trade.id}>
               <Link to={`./trades/${trade.name}`}> {trade.stock_ticker}  {trade.trade_type} {trade.date} </Link> 
            </div>)}
        </div>
    )
}

export default Trades