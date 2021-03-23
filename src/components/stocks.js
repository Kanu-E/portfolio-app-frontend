import React  from 'react'
// import {Link} from 'react-router-dom'
import StockRow  from './stockRow'
import {portfolioPositions} from './formatter'

import 'bootstrap/dist/css/bootstrap.min.css'

const Stocks  = (props) =>{

    
    // const 

    let stocks = portfolioPositions(props.portfolio.trades)
    console.log(stocks)

    return (       
        <div className="container">        
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Price</th>
                        <th>Shares Owned</th>
                        <th>Total Value </th>
                    </tr>
                </thead>          
                <tbody  >
                    {stocks.map (stock=> 
                    
                        stock.quantity > 0?<StockRow key={stock.ticker} stock={stock} portfolio={props.portfolio}/>: null
                    )}
                </tbody>               
            </table>        
        </div>
    )
}


export default Stocks