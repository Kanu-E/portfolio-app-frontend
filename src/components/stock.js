import React, { Component}from 'react'
import {alpha, iex} from '../config/iex'
import Plot from 'react-plotly.js'
import {formatter, getAveragePrice, findQuantity} from './formatter'




class Stock extends Component {
  
        state = {
            yValues:[],
            xValues:[], 
            overview:'',
            stockPrice:''
        }



    componentDidMount() {
       this.fetchStockData()
   
    }

    fetchStockData(){
        let valuesForX = [];
        let valuesForY = []

        // fetch(`${alpha.baseURL}/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.match.params.ticker}&interval=60min&apikey=${alpha.API_KEY}`)
        //     .then(response  => response.json())
        //     .then(data =>{
        //         for (let key in data["Time Series (60min)"]){
        //             valuesForX.push(key);
        //             valuesForY.push(data["Time Series (60min)"][key]['1. open']);
        //         }
        //             this.setState(
        //                 {xValues: valuesForX,
        //                 yValues: valuesForY        
        //                 } 
        //          )
        //     },
        // )


        // fetch(`${alpha.baseURL}/query?function=OVERVIEW&symbol=${this.props.match.params.ticker}&interval=60min&apikey=${alpha.API_KEY}`)
        //     .then(response  => response.json())
        //     .then(data =>{
        //         this.setState({overview: data})
        //     },
        // )

        // fetch(`${iex.baseURL}/api/v1/quote?symbol=${this.props.match.params.ticker}&token=c14s26n48v6st2757ktg`)
        // .then(response => response.json())
        // .then(stockData =>  this.setState({ stockPrice: stockData.c}))

    }

    render() {

        let stock = this.props.stocks.find(stock => stock.ticker === this.props.match.params.ticker)
        let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)
        let averagePrice;
        let quantityOwned;
        let cashBalance
        let currentPrice = formatter.format(this.state.stockPrice)
        if (portfolio && stock){
            averagePrice=getAveragePrice(stock.ticker, portfolio.trades);
            quantityOwned=findQuantity(stock.ticker, portfolio.trades)
            cashBalance = formatter.format(portfolio.cash_balance)
        }


        let CompanyName = this.state.overview.Name
        return(
            <div>
                
                <h2> {stock.ticker} </h2>
                <h3>{CompanyName}</h3>
                <Plot
                    data={[
                    {
                        x: this.state.xValues,
                        y: this.state.yValues,
                        type: "scatter",
                        mode: "lines",
                        line: {color: 'green'}
                    },
                    ]}
                    layout={{width: 680, height:400, title: this.props.match.params.ticker}}
                />
                <p>Buying Power for {stock.ticker} {cashBalance}</p>
                <div>
                    <div>
                        Your Position
                    </div>
                    <div>
                        <div>
                            Quantity owned: {quantityOwned}
                        </div>
                        <div>
                           Average Price: {averagePrice}
                        </div>
                        <div>
                           Current Price: {currentPrice}
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}


export default Stock