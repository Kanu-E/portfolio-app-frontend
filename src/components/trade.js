import React, { Component } from 'react';
import TradeInput from '../components/tradeInput'
import {Link} from 'react-router-dom'


class Trades  extends  Component{


    


    render() {
        
        let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)  
        let trade;
        let unixDate
        let fullDate;
        let date;
        let time

        if (portfolio ){
            trade = portfolio.trades.find(trade => parseInt(trade.id) === parseInt(this.props.match.params.tradeId))
            unixDate = Date.parse(trade.created_at)
            fullDate = new Date(unixDate)
            date = fullDate.toLocaleDateString("en-US")
            time = fullDate.toLocaleTimeString("en-US")
            console.log(date)
            }else{
                console.log("portfolio")
        }

    return (

        <div>
            <div>{trade.stock_ticker}</div>
            <div>{trade.name}</div>
            <div>{trade.quantity}</div>
            <div>{trade.trade_type}</div>
            <div>{date}</div>
            <div>{time}</div>
            
        </div>
    

    )
    }
}

export default Trades