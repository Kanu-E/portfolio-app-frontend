import React, {Component} from 'react'
import Portfolios   from '../components/portfolios'
import Portfolio   from '../components/showPortfolio'
import PortfolioInput   from '../components/portfolioInput'
import {connect} from 'react-redux'
import {fetchPortfolios} from '../actions/fetchPortfolios'
import {Route, Switch} from 'react-router-dom'
import Stock   from '../components/stock'


class PortfolioContainer extends  Component{

    componentDidMount=()=> {
        this.props.fetchPortfolios()
    }
    render() {
        // console.log(this.props.portfolios)
        return (
            <div>         
                <Switch>
                    <Route exact path='/portfolios/new' component={PortfolioInput}/>
                    <Route exact path='/portfolios/:portfolioName'  render={(routerprops) =><Portfolio  {...routerprops} portfolios={this.props.portfolios}/>}/>
                    <Route  path='/portfolios/:portfolioName/stocks/:ticker'  render={(routerprops) =><Stock {...routerprops} stocks={this.props.stocks} portfolios={this.props.portfolios}
                    />}/>
                    <Route exact path='/portfolios'  render={(routerprops) =><Portfolios {...routerprops} portfolios={this.props.portfolios}/>}/>
                {/* <PortfolioInput/> */}
                </Switch>                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        portfolios: state.portfolios,
        stocks: [{ticker: "AMZN", id: 1, price:890}, {ticker:"AAPL", id:2, price:890}, {ticker:"TSLA", id:3, price:890}]
    }
}



export default connect (mapStateToProps, {fetchPortfolios})(PortfolioContainer)