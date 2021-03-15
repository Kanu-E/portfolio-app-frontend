export const addTrade = (trade, portfolioId) =>{
    return (dispatch)=>{
        fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}/trade`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(trade => dispatch({type: 'ADD_TRADE', payload: trade}))        
    }
}