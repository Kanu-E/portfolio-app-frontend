import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editPortfolio} from '../actions/editPortfolio'

class PortfolioEdit extends Component{
    state = {
        name:""
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let portfolio = {...this.state, id: this.props.portfolio.id}
        this.props.editPortfolio(portfolio)
        // this.props.history.push('/Portfolios')
    }
      
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Edit Portfolio Name</label>
                    <input onChange={this.handleChange} type="text" value={this.state.name} name="name" />
                    <br>
                    </br>
                    <input type="submit"/> 
                </form>
            </div>
        )
    }

}

export default connect(null, {editPortfolio})(PortfolioEdit)