import React, {Component} from 'react'
// import Stocks   from '../components/Stocks'
// import Stock   from '../components/showStock'
// import StockInput   from '../components/StockInput'
import {connect} from 'react-redux'
import {fetchStocks} from '../actions/fetchStocks'
import {Route, Switch} from 'react-router-dom'



class StocksContainer extends  Component{
    componentDidMount=()=> {
        const finnhub = require('finnhub')

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = 'c14s26n48v6st2757ktg'
    
        const finnhubClient = new finnhub.DefaultApi()
    
        finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
            console.log(data.c)
        });
    }
    render() {
        console.log(this.props.stocks)
        return (
            <div>
                
                <Switch>
                    {/* <Route path='/Stocks/new' component={StockInput}/> */}
                    {/* <Route path='/Stocks/:id'  render={(routerprops) =><Stock  {...routerprops} Stocks={this.props.Stocks}/>}/>
                    <Route exact path='/Stocks'  render={(routerprops) =><Stocks {...routerprops} Stocks={this.props.Stocks}/>}/> */}
                </Switch>

                {/* <StockInput/> */}
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        stocks: state.stocks
    }
}



export default connect (mapStateToProps, {fetchStocks})(StocksContainer)