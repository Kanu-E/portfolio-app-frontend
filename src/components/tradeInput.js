import React, {Component} from 'react'
import {connect} from 'react-redux'


class TradeInput  extends  Component{
    state = {
        tradeType:"",
        quantity:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Open or Close
                    </label>
                    <select onChange={this.handleChange} type="text" value={this.state.name} name="tradeType" >
                        <option>open</option>
                        <option>close</option>
                    </select>
                    <label>
                        Quantity                
                    </label>
                    <input type="text" onChange={this.handleChange} type="text" value={this.state.name} name="quantity"></input>
                    <input type="submit"/> 
                </form>
            </div>
        )
    }

}

export default connect(null) (TradeInput)