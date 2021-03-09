import React, {Component} from 'react'
import Portfolios   from '../components/portfolios'
import PortfolioInput   from '../components/portfolioInput'
import {connect} from 'react-redux'
import {fetchPortfolios} from '../actions/fetchPortfolios'

class PortfolioContainer extends  Component{

    componentDidMount=()=> {
        this.props.fetchPortfolios()
    }
    render() {
        return (
            <div>
                Portfolios
                <PortfolioInput/>
                <Portfolios/>
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