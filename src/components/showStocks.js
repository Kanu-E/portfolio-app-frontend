import React from 'react'


const Stock = (props) =>{
    console.log(props.stocks)
   
    let stock = props.stocks.find(stock => stock.id == props.match.params.id)


    return(
        <div>
             <h2>stock {stock.ticker} </h2>
        </div>
    )
}

export default Stock