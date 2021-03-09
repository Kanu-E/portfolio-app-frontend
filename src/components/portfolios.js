import React from 'react'

const Portfolios = (props) => {
    // console.log(props.portfolios)
    return (
        <div>
           {props.portfolios.map (portfolio=><li key={portfolio.id}>{portfolio.name}</li>)}
        </div>
    )
}

export default Portfolios