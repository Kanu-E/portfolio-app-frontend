import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Trades  extends  Component{


    


    render() {
        
        let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)  
        let trade;
        let unixDate
        let fullDate;
        let date;
        let time
        let stockTicker 
        let name 
        let quantity
        let type

        if (portfolio ){
            trade = portfolio.trades.find(trade => parseInt(trade.id) === parseInt(this.props.match.params.tradeId))
            stockTicker = trade.stock_ticker
            name = trade.name
            quantity = trade.quantity
            type = trade.trade_type
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
            <div>{stockTicker}</div>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{type}</div>
            <div>{date}</div>
            <div>{time}</div>
            <Link to={`/portfolios/${portfolio.name}`} exact >back</Link>
        </div>
    

    )
    }
}

export default Trades