import React, { Component} from 'react'
import {connect} from 'react-redux'


class SearchBar extends  Component{
    state = {
        ticker:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    handleSubmit= (event) => {
        event.preventDefault();
        this.props.history.push(`/Portfolios/${this.props.portfolio.name}/stocks/${this.state.ticker}`)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="companies" value={this.state.ticker} name="ticker" onChange={this.handleChange}></input>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        portfolio: state.portfolio,
    }
}


export default connect(mapStateToProps)(SearchBar);