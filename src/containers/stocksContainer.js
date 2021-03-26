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

const mapStateToProps = state =>{
    return{
        stocks: [{ticker: "AMZN", id: 1, price:890}, {ticker:"AAPL", id:2, price:890}, {ticker:"TSLA", id:3, price:890}]
    }
}



export default connect (mapStateToProps, null)(StocksContainer)