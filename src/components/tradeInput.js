import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTrade} from '../actions/addTrade'

class TradeInput  extends  Component{
    state = {
        quantity:"", 
        trade:"buy",
        on: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    handleTrade=()=>{
        this.setState({
            on: true
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state, this.props.portfolio.id, this.props.stock)
        this.props.addTrade(this.state, this.props.portfolio.id)
        this.props.history.push(`/portfolios/${this.props.portfolio.name}/stocks/${this.props.stock}`)
    }

    render() {
        return (
            <div>
                {this.state.on &&(            
                    <form onSubmit={this.handleSubmit}>                   
                        <label>
                            Quantity                
                        </label>
                        <input type="text" onChange={this.handleChange} value={this.state.quantity} name="quantity"/>
                        <br></br>
                        <label for="cars">buy or sell:</label>
                        <select name="trade" onChange={this.handleChange}>
                        <option value="buy">buy</option>
                        <option value="sell">sell</option>
                        </select>
                        <br></br>
                        <input type="submit" value={this.state.trade}/> 
                    </form>)
                }
                 {!this.state.on &&( 
                <div>
                    <button onClick={this.handleTrade}> Trade </button> 
                </div>)
            }
            </div>
        )
    }
}

export default connect(null, {addTrade}) (TradeInput)