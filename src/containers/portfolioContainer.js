import React, {Component} from 'react'
import Portfolios   from '../components/portfolios'
import Portfolio   from '../components/showPortfolio'
import PortfolioInput   from '../components/portfolioInput'
import {connect} from 'react-redux'
import {fetchPortfolios} from '../actions/fetchPortfolios'
import {Route} from 'react-router-dom'


class PortfolioContainer extends  Component{

    componentDidMount=()=> {
        this.props.fetchPortfolios()
    }
    render() {
        return (
            <div>
                Portfolios
                <Route path='/portfolios/new' component={PortfolioInput}/>
                <Route exact path='/portfolios'  render={(routerprops) =><Portfolios {...routerprops} portfolios={this.props.portfolios}/>}/>
                <Route path='/portfolios/:id'  render={(routerprops) =><Portfolio  {...routerprops} portfolios={this.props.portfolios}/>}/>

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