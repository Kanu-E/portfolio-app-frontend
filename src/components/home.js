import React  from 'react'
import { NavLink } from 'react-router-dom';

const Home  = () =>{



    return (       
        <div >        
            <h1>Welcome To The Portfolio Manager App</h1>
            <h2>Click  <NavLink to="/portfolios" exact>here</NavLink> to view your portfolios</h2>
        </div>
    )
}


export default Home