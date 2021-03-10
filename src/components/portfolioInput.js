import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addPortfolio} from '../actions/addPortfolio'

class PortfolioInput extends Component{
    state = {name:"", cash_balance:""}
    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPortfolio(this.state)
    }
      
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Set Portfolio Name</label>
                    <input onChange={this.handleChange} type="text" value={this.state.name} name="name" />
                    <br>
                    </br>
                    <label>Set Portfolio Opening Balance</label>
                    <input onChange={this.handleChange}  type="text" value={this.state.cash_balance} name="cash_balance"/>
                    <br>
                    </br>
                    <input type="submit"/> 
                </form>
            </div>
        )
    }

}

export default connect(null, {addPortfolio})(PortfolioInput)