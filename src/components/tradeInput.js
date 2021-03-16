import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTrade} from '../actions/addTrade'

class TradeInput  extends  Component{
    state = {
        quantity:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state, this.props.portfolio.id, this.props.trade.stock_ticker)
        this.props.addTrade(this.state, this.props.portfolio.id, this.props.trade)
        this.setState({
            quantity:""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>                   
                    <label>
                        Quantity                
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state.quantity} name="quantity"/>
                    <input type="submit"/> 
                </form>
            </div>
        )
    }

}

export default connect(null, {addTrade}) (TradeInput)