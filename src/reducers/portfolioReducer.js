
const portfolioReducer = (state = {portfolios:[]}, action) => {
    // debugger;
    switch(action.type){
        case "GET_PORTFOLIOS":
            return {portfolios: action.payload}
        case 'ADD_PORTFOLIO': 
          return  {portfolios:state.portfolios.concat(action.payload)}
        case 'ADD_TRADE': 
            let portfolios = state.portfolios.filter(portfolio => portfolio.id !== action.payload.id)
          return  {portfolios:portfolios.concat(action.payload)}
        default:
            return state
    }
}

export default portfolioReducer 