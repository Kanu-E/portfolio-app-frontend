import React, {Component} from 'react'
import Trades from '../components/trades'

class TradesContainer  extends  Component{

    render() {
            const trades=this.props.portfolio.trades
            const portfolio=this.props.portfolio
        return (
            <div>               
                    {/* <Route path='/portfolios/:id/trades/new' component={TradeInput}/>
                    <Route path='/portfolios/:id/trades'  render={(routerprops) =><Trades  {...routerprops} trades={trades}/>}/>            */}
                <Trades trades={trades} portfolio={portfolio}/>
            </div>
        )
    }

}

export default TradesContainer