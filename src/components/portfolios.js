import {Link} from 'react-router-dom'
import {formatter} from './formatter'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
import React from 'react'

const Portfolios = (props) => {

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
                            <td> <Link to={`./portfolios/${portfolio.name}`}> {portfolio.name} </Link> </td>
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
const mapStateToProps = state =>{
    return{
        portfolios: state.portfolios
    }
}



export default connect (mapStateToProps)(Portfolios)