export const addTrade = (quantity, portfolioId, trade) =>{
    // debugger
    return (dispatch)=>{
        fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}/trades`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({quantity: quantity.quantity,
                 stock_ticker: trade.stock_ticker,
                name: trade.name,
                average_price:  500,
                trade_type: "open"
            })
        })
        .then(response => response.json())
        .then(portfolio => {if (portfolio.error){
            alert(portfolio.error)
        }    else {
            dispatch({type: 'ADD_TRADE', payload: portfolio})}

        })             
    }
}