const finnhub = require('finnhub')
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = 'c14s26n48v6st2757ktg'
const finnhubClient = new finnhub.DefaultApi() 


export const fetchStocks = () => {
    return(dispatch)=>{ 
        finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {})
        .then(response => response.json())
        .then(stocks => dispatch({
           type: 'GET_STOCKS', 
           payload: stocks
        }))
    }
}