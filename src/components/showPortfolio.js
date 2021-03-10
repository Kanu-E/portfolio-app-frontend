import React from 'react'

const Portfolio = (props) =>{

    console.log(props.match.params.id)
    let portfolio = props.portfolios[props.match.params.id-1]
    return(
        <div>
            {portfolio? portfolio.name : console.log("....requesting")}
        </div>
    )
}

export default Portfolio