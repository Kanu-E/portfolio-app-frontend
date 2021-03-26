import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTrade} from '../actions/addTrade'

class TradeInput  extends  Component{
    state = {
        quantity:"", 
        trade:"Buy",
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
        // console.log(this.state, this.props.portfolio.id, this.props.trade.stock_ticker)
        // this.props.addTrade(this.state, this.props.portfolio.id, this.props.trade)
        this.setState({
        quantity:""
        })
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
                        <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                        <div id="myDropdown" class="dropdown-content">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                        </div>
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