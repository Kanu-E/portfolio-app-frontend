export const addTrade = (trade, portfolioId, ticker) =>{
    // debugger
    return (dispatch)=>{
        fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}/trades`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({quantity: trade.quantity,
                 stock_ticker: ticker,
                // name: trade.name,
                average_price:  500,
                trade_type: trade.trade
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