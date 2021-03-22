// const finnhub = require('finnhub')
// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = 'c14s26n48v6st2757ktg'
// const finnhubClient = new finnhub.DefaultApi() 

// api_key ='50OIASTAEPILLX5S'

export const fetchStockData = (ticker) => {
    return(dispatch)=>{ 
        fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=c14s26n48v6st2757ktg`)
        .then(response => response.json())
        .then ( data => dispatch({
            type: 'GET_STOCKS_DATA', 
            payload: data
         }))        
    }
}