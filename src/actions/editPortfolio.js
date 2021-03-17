export const editPortfolio = (data) =>{
    return (dispatch)=>{
        // debugger
        fetch(`http://localhost:3000/api/v1/portfolios/${data.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(portfolio => dispatch({type: 'EDIT_PORTFOLIO', payload: portfolio}))        
    }
}