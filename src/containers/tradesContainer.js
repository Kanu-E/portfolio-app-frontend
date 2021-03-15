import React, {Component} from 'react'
import TradeInput from '../components/tradeInput'
import Trades from '../components/trades'

class TradesContainer  extends  Component{

    render() {
            const trades=this.props.portfolio.trades
        return (
            <div>               
                    {/* <Route path='/portfolios/:id/trades/new' component={TradeInput}/>
                    <Route path='/portfolios/:id/trades'  render={(routerprops) =><Trades  {...routerprops} trades={trades}/>}/>            */}
                <TradeInput/>
                <Trades trades={trades}/>
            </div>
        )
    }

}

export default TradesContainer