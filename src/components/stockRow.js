import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchStockData} from '../actions/fetchStocks'
import {findQuantity} from './formatter'

class StockRow extends Component {

   state = {
        data:{}
    }

    // componentDidMount(){
    //     this.props.fetchStockData(this.props.stock.ticker)
    // }
    
    render() {

        let quantity = findQuantity(this.props.stock.ticker, this.props.portfolio.trades)

        // const price = this.props.stockData.find(stock => stock.ticker)
        // price? console.log(price):console.log('stock')
        // this.props.fetchStockData(this.props.stock.ticker)
        return (
            <tr>
                <td><Link to={`/stocks/${this.props.stock.id}`}>{this.props.stock.ticker}</Link></td>
                <td>{this.props.stock.price}</td> 
                <td>{quantity}</td>  
            </tr>
        )
    }
}

const mapStateToProps = (state) =>{
      return  {stockData: state.stockData}
}

export default connect(mapStateToProps, {fetchStockData})(StockRow)