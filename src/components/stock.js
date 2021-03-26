import React, { Component}from 'react'
import {alpha, iex} from '../config/apis'
import Plot from 'react-plotly.js'
import {formatter, getAveragePrice, findQuantity} from './formatter'
import TradeInput from './tradeInput'
import Trades from './trades'



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

        
        let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)
        let stock = this.props.match.params.ticker
        let averagePrice;
        let quantityOwned;
        let cashBalance
        let currentPrice = formatter.format(this.state.stockPrice)
        let noPosition = `You dont have any positions i ${stock}`
        let trades;
        if (portfolio && stock){
            averagePrice=getAveragePrice(stock, portfolio.trades);
            quantityOwned=findQuantity(stock, portfolio.trades)
            cashBalance = formatter.format(portfolio.cash_balance)
            trades = portfolio.trades.filter(trade => trade.stock_ticker === stock)

        }
        console.log(trades)
        let CompanyName = this.state.overview.Name
        return(
            <div>

                <h2> {stock} </h2>
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
                <TradeInput/>
                <div>
                <div>
                <p>Buying Power for {stock} {cashBalance}</p>
                 Your Position
                    </div>
                    <table>
                        <thead className="table mt-5">
                            <tr>
                                <th> Quantity owned </th>
                                <th>  Average Price </th>
                                <th> Current Price </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{quantityOwned }</td> 
                                <td>{averagePrice }</td> 
                                <td>{currentPrice}</td>  
                            </tr>
                        </tbody>
                    </table>
                    <h3>History</h3>
                    {trades && trades.slice(trades.length-3, trades.length).map (trade=>               
                    <Trades trade={trade} portfolio={portfolio} quantityOwned={quantityOwned} stock={stock}/>)}
                </div>
            </div>
        )
    }


}


export default Stock