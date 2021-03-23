import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  portfolios: portfoliosReducer
//   stocks: stocksReducer,
//   stockData: stockDataReducer
});

export default rootReducer;

function portfoliosReducer(state =[], action) {
    let portfolios;
    switch(action.type){
        case "GET_PORTFOLIOS":
            return state = action.payload
        case 'ADD_PORTFOLIO': 
            return  state.concat(action.payload)
        case 'EDIT_PORTFOLIO': 
            portfolios = state.filter(portfolio => portfolio.id !== action.payload.id)   
            return  portfolios.concat(action.payload)
        case 'ADD_TRADE': 
            return  state.concat(action.payload)
        case 'DELETE_PORTFOLIO': 
            return state.filter(portfolio => portfolio.id !== action.payload)
        default:
            return state
    }
}


// function stocksReducer(state =[], action) {
//     switch(action.type){
//         case "GET_STOCK":
//             return state = action.payload
//         case 'ADD_STOCK': 
//             return  state.concat(action.payload)
//         case 'EDIT_STOCK': 
//             return  state.concat(action.payload)
//         default:
//             return state
//     }
// }

// function stockDataReducer(state =[], action) {
//     // debugger
//     switch(action.type){       
//         case "GET_STOCKS_DATA":
//             // debugger
//             return state.concat(action.payload)
//         default:
//             return state
//     }
// }



