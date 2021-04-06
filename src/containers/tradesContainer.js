import React, {Component} from 'react'
import Trades from '../components/trades'

class TradesContainer  extends  Component{

    render() {
            const trades=this.props.portfolio.trades
            const portfolio=this.props.portfolio
        return (
            <div> 
                {trades.slice(trades.length-3).reverse().map (trade=>            
                    <Trades key={trade.id}   trade={trade} portfolio={portfolio}/>)}
            </div>
        )
    }

}

export default TradesContainer