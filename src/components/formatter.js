    export const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }) 

    export const portfolioPositions = (trades) => {
        let tickers = []
        let positions = []
        trades.forEach(trade => tickers.push(trade.stock_ticker))
        let newTickers = ([...new Set(tickers)])
        newTickers.forEach(ticker => 
            positions.push({
                ticker: ticker, 
                price:  getAveragePrice(ticker, trades),
                quantity: findQuantity(ticker, trades)
            }))
        return positions
    }

    export const findQuantity = (stockTicker, trades) => {
        let stocksTraded = trades.filter(trade => trade.stock_ticker === stockTicker)
        let buys = stocksTraded.filter(trade => trade.trade_type ===  'open') 
        let sales = stocksTraded.filter(trade => trade.trade_type === 'close')

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
        let tradeCost = buys.reduce(function(a , b){ 
            return a + (b.quantity * b.average_price)
        }       , 0) 
        let buysQuantity = buys.reduce(function(a , b){ 
            return a + b.quantity
        }       , 0) 
        return formatter.format(tradeCost/buysQuantity)
    }

    export const getDateAndTime = (inputDate)=>{
        let unixDate = Date.parse(inputDate)
        let fullDate = new Date(unixDate)
        let date = fullDate.toLocaleDateString("en-US")
        let time = fullDate.toLocaleTimeString("en-US")
        return{date: date, time: time}
    }







