import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Trades  extends  Component{
 
    
    handleClick =(event)=>{
        console.log(event.target.firstChild)
    }

    render() {
        
        const portfolio=this.props.portfolio

        return (
            <div>
                Trades
            {this.props.trades.map (trade=>
            <div key={trade.id} onClick={this.handleClick}>    
                {trade.stock_ticker}  {trade.trade_type} {trade.quantity} {trade.average_price} 
                <br></br> 
                {trade.created_at} <Link to={`./${portfolio.name}/trades/${trade.id}`}> View </Link> 
                <br></br> 
                </div>)}          
            </div>
        )
    }
}

export default Trades