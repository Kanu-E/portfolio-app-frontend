export const getPortfolio = (data) =>{
    return (dispatch)=>{
        dispatch({type: 'GET_PORTFOLIO', payload: data})        
    }
}