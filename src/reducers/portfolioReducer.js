
const portfolioReducer = (state = {portfolios:[]}, action) => {
    // debugger;
    switch(action.type){
        case "GET_PORTFOLIOS":
            return {portfolios: action.payload}
        case 'ADD_PORTFOLIO': 
          return  {portfolios:state.portfolios.concat(action.payload)}
        default:
            return state
    }
}

export default portfolioReducer 