import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {formatter, getDateAndTime} from './formatter'



class Trades  extends  Component{
 
    
    handleClick =(event)=>{
        console.log(event.target.firstChild)
    }

    render() {
        console.log(this.props.stock)
        let portfolio = this.props.portfolio
        let trade = this.props.trade
        let type;
        trade.trade_type === 'open' ? type = 'buy': type = 'sell'

        const date = getDateAndTime(trade.created_at)

        return (
            <div className = "trades">
                    {trade.stock_ticker} {type} {formatter.format(trade.quantity * trade.average_price)} {date.date} 
                    {this.props.stock?  <Link to={`./trades/${trade.id}`} > View </Link>:<Link to={`./${portfolio.name}/trades/${trade.id}`} > View </Link>
                    }             
            </div>
        )
    }
}

export default Trades