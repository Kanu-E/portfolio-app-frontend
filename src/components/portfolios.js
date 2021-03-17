import React  from 'react'
import {Link} from 'react-router-dom'
import {formatter} from './formatter'
import 'bootstrap/dist/css/bootstrap.min.css'



const Portfolios  =(props) =>{


       

    return (
        
        <div className="container">
           
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                        <th>Cash Balance</th>
                        <th>Net Portfolio Value </th>
                    </tr>
                </thead>
                {props.portfolios.map (portfolio=>  
                <tbody key={portfolio.id} >
                    <tr >     
                        <td> <Link to={`./portfolios/${portfolio.id}`}> {portfolio.name} </Link> </td>
                        <td> {formatter.format(portfolio.cash_balance)} </td>  
                        <td></td>     
                    </tr>  
                </tbody>
                )}
            </table>
            <p> <Link to={`./portfolios/new`}> Create a New Portfolio </Link> </p>
        </div>
    )
}


export default Portfolios