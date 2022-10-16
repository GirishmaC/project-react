
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>

            <div className='nav'>
                <ul>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/">Home</Link></li></h4>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/bollywood" >Bollywood</Link></li></h4>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/technology">Technology</Link></li></h4>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/hollywood">Hollywood</Link></li></h4>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/fitness">Fitness</Link></li></h4>
                    <h4><li><Link style={{ color: "black", textDecoration: "none",fontSize: "16px" }} to="/food">Food</Link></li></h4>
                    
                </ul>
                
            </div>
            <hr />

        </div>
    )
}

export default Nav;