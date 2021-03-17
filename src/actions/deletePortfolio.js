export const deletePortfolio = (portfolioId) =>{
    // debugger
    return (dispatch)=>{
        // console.log(trade, portfolioId, )
        fetch(`http://localhost:3000/api/v1/portfolios/${portfolioId}`,{
            method: 'DELETE',
        })
        .then(() =>  dispatch({type: 'DELETE_TRADE', payload: portfolioId}))        
    }
}