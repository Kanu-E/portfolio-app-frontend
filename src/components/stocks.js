import React  from 'react'
import {Link} from 'react-router-dom'
import StockRow  from './stockRow'
import 'bootstrap/dist/css/bootstrap.min.css'

const Stocks  = (props) =>{

    return (       
        <div className="container">        
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Price</th>
                        <th>Net Stock Value </th>
                    </tr>
                </thead>          
                <tbody  >
                {props.stocks.map (stock=> 
                    <StockRow key={stock.id} stock={stock}/>
                )}
                </tbody>               
            </table>        
        </div>
    )
}


export default Stocks