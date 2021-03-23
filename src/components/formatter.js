

    export const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }) 

    export const findQuantity = (stockTicker, trades) => {
        let stocksTraded = trades.filter(trade => trade.stock_ticker === stockTicker)
        let buys = stocksTraded.filter(trade => trade.trade_type ===  'open') 
        let sales = stocksTraded.filter(trade => trade.trade_type === 'close')
        console.log(buys)
            let buysQuantity = buys.reduce(function(a , b){ 
                return a + b.quantity
            }       , 0)  

            let salesQuantity = sales.reduce(function(a , b){ 
                return a + b.quantity
            }, 0)
        
        return buysQuantity - salesQuantity    
    }

    export const getAveragePrice = (stockTicker, trades) => {
        let stocksTraded = trades.filter(trade => trade.stock_ticker === stockTicker)
        let buys = stocksTraded.filter(trade => trade.trade_type ===  'open') 
        console.log(buys)
        let tradeCost = buys.reduce(function(a , b){ 
            return a + (b.quantity * b.average_price)
        }       , 0) 
        let buysQuantity = buys.reduce(function(a , b){ 
            return a + b.quantity
        }       , 0) 
     
        return formatter.format(tradeCost/buysQuantity)
 
    }



    // const getBuys = (trades, type) =>{
    //     trades.filter(trade => trade.trade_type === 'open')
    // }

    // export const fetchStockPrice = (ticker) => {       
    //     let data = fetchStockData(ticker)
    //     // console.log(data)
    //     return 
    // }


    //  const fetchStockData = (ticker) => {
    //      let data;
    //     fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=c14s26n48v6st2757ktg`)
    //     .then(response => response.json())
    //     .then (data => {return data.c})        
    // }



