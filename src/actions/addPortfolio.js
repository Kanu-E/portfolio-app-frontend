export const addPortfolio = (data) =>{
    return (dispatch)=>{
        fetch('http://localhost:3000/api/v1/portfolios',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(portfolio => dispatch({type: 'ADD_PORTFOLIO', payload: portfolio}))        
        
   
    }
}
