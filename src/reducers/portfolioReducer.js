
const portfolioReducer = (state = {portfolios:[]}, action) => {
    // debugger;
    switch(action.type){
        case "GET_PORTFOLIOS":
            return {portfolios: action.payload}
        default:
            return state
    }
}

export default portfolioReducer 