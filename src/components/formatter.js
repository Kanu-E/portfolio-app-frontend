
    export const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }) 

    export const findQuantity = (stockTicker, trades) => {
        let stocksTraded = trades.filter(trade => trade.stock_ticker === stockTicker)
        let buys = stocksTraded.filter(trade => trade.trade_type === 'open')
        let sales = stocksTraded.filter(trade => trade.trade_type === 'close')
        let buysQuantity = buys.reduce(function(a , b){ 
            return a + b.quantity
    }, 0)  

        let salesQuantity = sales.reduce(function(a , b){ 
            return a + b.quantity
        }, 0)
        
        return buysQuantity - salesQuantity    
    }




