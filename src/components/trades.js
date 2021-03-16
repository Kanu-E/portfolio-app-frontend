import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import TradeInput from '../components/tradeInput'

// import Trade from './trade'

class Trades  extends  Component{

    // formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    // })  
    
    handleClick =(event)=>{
        console.log(event.target.firstChild)
    }

    render() {
        
  
    const portfolio=this.props.portfolio
    console.log(this.props.trades[0])

    return (

        <div>
            Trades
           {this.props.trades.map (trade=>
           <div key={trade.id}> 
           <div  onClick={this.handleClick} >
             {trade.stock_ticker}  {trade.trade_type} {trade.quantity} {trade.average_price} 
              <br></br> 
            {trade.created_at} 
            <br></br> 
            </div>
               <div>
               <TradeInput  portfolio={portfolio} trade={trade}/>
               </div>             
            </div>)}
            
        </div>
    

    )
    }
}

export default Trades