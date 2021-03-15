import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Portfolios = (props) => {

    return (
        <div className="container">
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Portfolio Name</th>
                    </tr>
                </thead>
                {props.portfolios.map (portfolio=>  
                <tbody key={portfolio.id} >
                    <tr >     
                        <td > <Link to={`./portfolios/${portfolio.id}`}> {portfolio.name} </Link> </td>                 
                    </tr>  
                </tbody>
                )}
            </table>
        </div>
    )
}

export default Portfolios