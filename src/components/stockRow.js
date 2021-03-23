import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchStockData} from '../actions/fetchStocks'
import {findQuantity, formatter} from './formatter'
import {iex} from '../config/iex'

class StockRow extends Component {

    state = { stockPrice: 0 };

    getStockData() {  
        fetch(`${iex.baseURL}/api/v1/quote?symbol=${this.props.stock.ticker}&token=c14s26n48v6st2757ktg`)
            .then(response => response.json())
            .then(stockPrice =>  this.setState({ stockPrice: stockPrice}))
     }

      componentDidMount() {
        const thisBoundedIncrementer = this.getStockData.bind(this);
        setInterval(thisBoundedIncrementer, 10000);
        // fetchStockPrice("AMZN")
      }
    
    render() {

        let price;

        this.state.stockPrice? (price = this.state.stockPrice.c): console.log(null)
        let quantity = findQuantity(this.props.stock.ticker, this.props.portfolio.trades)
        let priceInPence = price * 100
        
        let totalPriceInPence =quantity*priceInPence
        
        // console.log(this.props.stockData)
        // this.props.fetchStockData(this.props.stock.ticker)
        return (
            <tr>
                <td><Link to={`/portfolios/${this.props.portfolio.name}/stocks/${this.props.stock.ticker}`}>{this.props.stock.ticker}</Link></td>
                <td>{this.props.stock.price}</td> 
                <td>{quantity}</td> 
                <td>{isNaN(totalPriceInPence)? '...requesting': formatter.format(totalPriceInPence/100)}</td> 
            </tr>
            
        )
    }
}

const mapStateToProps = (state) =>{
      return  {stockData: state.stockData}
}

export default connect(mapStateToProps, {fetchStockData})(StockRow)