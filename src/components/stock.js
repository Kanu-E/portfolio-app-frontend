import React, { Component}from 'react'
import {alpha, iex} from '../config/apis'
import Plot from 'react-plotly.js'
import {formatter, getAveragePrice, findQuantity, getDateAndTime} from './formatter'
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
       this.fetchStockData(Math.floor(Date.now() / 1000))
    }
    fetchStockData(date){
        let valuesForX = [];
        let valuesForY = []

        fetch(`${iex.baseURL}/api/v1/stock/candle?symbol=${this.props.match.params.ticker.toUpperCase()}&resolution=1&from=${date-120000}&to=${date}&token=c14s26n48v6st2757ktg`)
            .then(response  => response.json())
            .then(data =>         
            {
                for (let i = 0; i < data.c.length; i++){
                    let y = new Date(data.t[i]*1000)
                    let x = getDateAndTime(y)
                    valuesForY.push(data.c[i])
                    valuesForX.push(x.time)
                }
                        this.setState(
                        {xValues: valuesForX,
                        yValues: valuesForY,
                        stockPrice: valuesForY[data.c.length-1]
                        } 
                 )
            },
        )

        fetch(`${alpha.baseURL}/query?function=OVERVIEW&symbol=${this.props.match.params.ticker}&interval=60min&apikey=${alpha.API_KEY}`)
            .then(response  => response.json())
            .then(data =>{
                this.setState({overview: data})
            },
        )

    }

    render() {

        
        let portfolio = this.props.portfolios.find(portfolio => portfolio.name === this.props.match.params.portfolioName)
        let stock = this.props.match.params.ticker.toUpperCase()
        let averagePrice;
        let quantityOwned;
        let cashBalance
        let currentPrice = formatter.format(this.state.stockPrice)
        let noPosition = `You dont have any positions in ${stock}`
        let trades;
        if (portfolio && stock){
            averagePrice=getAveragePrice(stock, portfolio.trades);
            quantityOwned=findQuantity(stock, portfolio.trades)
            cashBalance = formatter.format(portfolio.cash_balance)
            trades = portfolio.trades.filter(trade => trade.stock_ticker === stock)
        }
        // if (this.state.yValues[0]){currentPrice = formatter.format(this.state.yValues[81])}
        let CompanyName = this.state.overview.Name

        console.log(this.state.xValues[0])
        return(
            <div>
                <h2> {stock} </h2>
                <h3>{CompanyName}</h3>
                <Plot
                    data={[
                    {
                        x: this.state.xValues.slice(this.state.xValues.length-60),
                        y: this.state.yValues.slice(this.state.xValues.length-60),
                        type: "scatter",
                        mode: "lines",
                        line: {color: 'green'}
                    },
                    ]}
                    layout={{width: 680, height:400, title: this.props.match.params.ticker}}
                />
                <TradeInput  portfolio={portfolio}  stock={stock}/>
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
                    {trades && trades.slice(trades.length-3).map (trade=>               
                    <Trades key={trade.id}  currentPrice={currentPrice} trade={trade} portfolio={portfolio} quantityOwned={quantityOwned} stock={stock}/>)}
                </div>
            </div>
        )
    }


}


export default Stock