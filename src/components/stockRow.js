import React, { Component} from 'react'
import {Link} from 'react-router-dom'


class StockRow extends Component {

    render() {
        return (
            <tr>
                <td><Link to = {`stocks/${this.props.stock.id}`}>{this.props.stock.ticker}</Link></td>
                <td>{this.props.stock.ticker}</td>
                <td>{this.props.stock.ticker}</td>
            </tr>
        )
    }
}

export default  StockRow