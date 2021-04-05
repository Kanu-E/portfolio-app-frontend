import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Stocks from '../components/stocks'
import Stock   from '../components/stocks'



class StocksContainer extends  Component{

    

    render() {
        // console.log(this.props.stocks)
        return (
            <div>
                <Switch>
                    {/* <Stock stocks={this.props.stocks}/> */}
                    <Route path='/stocks/:id'  render={(routerprops) =><Stock {...routerprops} stocks={this.props.stocks}/>}/>
                    <Stocks stocks={this.props.stocks} portfolio={this.props.portfolio}/>  
                </Switch>
            </div>
        )
    }
}





export default StocksContainer