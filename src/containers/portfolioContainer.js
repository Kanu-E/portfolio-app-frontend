import React, {Component} from 'react'
import Portfolios   from '../components/portfolios'
import Portfolio   from '../components/showPortfolio'
import PortfolioInput   from '../components/portfolioInput'
import {connect} from 'react-redux'
import {fetchPortfolios} from '../actions/fetchPortfolios'
import {Route, Switch} from 'react-router-dom'


class PortfolioContainer extends  Component{

    componentDidMount=()=> {
        this.props.fetchPortfolios()
    }
    render() {
        console.log(this.props.portfolios)
        return (
            <div>
                <Switch>
                    <Route path='/portfolios/new' component={PortfolioInput}/>
                    <Route path='/portfolios/:id'  render={(routerprops) =><Portfolio  {...routerprops} portfolios={this.props.portfolios}/>}/>
                    <Route exact path='/portfolios'  render={(routerprops) =><Portfolios {...routerprops} portfolios={this.props.portfolios}/>}/>
                </Switch>

                {/* <PortfolioInput/> */}
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        portfolios: state.portfolios
    }
}



export default connect (mapStateToProps, {fetchPortfolios})(PortfolioContainer)