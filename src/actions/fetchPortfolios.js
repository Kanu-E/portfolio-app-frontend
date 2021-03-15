export const fetchPortfolios = () => {
    return(dispatch)=>{
        fetch('http://localhost:3000/api/v1/portfolios')
        .then(response => response.json())
        .then(portfolios => dispatch({
           type: 'GET_PORTFOLIOS', 
           payload: portfolios
        }))
    }
}

