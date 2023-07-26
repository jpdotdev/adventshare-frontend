import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav> 
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li> Profile </li>
                    <li> Sign Up </li>
                    <li> <Link to="/stories"> All Stories </Link> </li>
                </ul>
            </nav>
        </div>
    )
}
