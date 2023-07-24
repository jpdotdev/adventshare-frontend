import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav> 
                <ul>
                    <li> Home </li>
                    <li> Profile </li>
                    <li> Sign Up </li>
                    <li> <Link to="/stories"> All Stories </Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation