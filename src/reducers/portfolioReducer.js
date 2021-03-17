
const portfolioReducer = (state = {portfolios:[]}, action) => {

    let portfolios = state.portfolios.filter(portfolio => portfolio.id !== action.payload.id)    ;
    
    switch(action.type){
        case "GET_PORTFOLIOS":
            return {portfolios: action.payload}
        case 'ADD_PORTFOLIO': 
            return  {portfolios:state.portfolios.concat(action.payload)}
        case 'EDIT_PORTFOLIO': 
            return  {portfolios: portfolios.concat(action.payload)}
        case 'ADD_TRADE': 
            return  {portfolios: portfolios.concat(action.payload)}
        case 'DELETE_TRADE': 
            return {portfolios: state.portfolios.filter(portfolio => portfolio.id !== action.payload)}
        case "GET_STOCKS":
            return {stocks: action.payload}
        default:
            return state
    }
}

export default portfolioReducer 