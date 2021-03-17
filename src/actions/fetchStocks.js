// const finnhub = require('finnhub')
// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = 'c14s26n48v6st2757ktg'
// const finnhubClient = new finnhub.DefaultApi() 

// api_key = '50OIASTAEPILLX5S'

export const fetchStocks = (ticker) => {
    return(dispatch)=>{ 
        const finnhub = require('finnhub')
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = 'c14s26n48v6st2757ktg'
        const finnhubClient = new finnhub.DefaultApi() 
        finnhubClient.stockCandles(ticker, "D", 1590988249, 1591852249, {},(error, data, response)=>
         dispatch({
           type: 'GET_STOCKS', 
           payload: data
        }))
    }
}