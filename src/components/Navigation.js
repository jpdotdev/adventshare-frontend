import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalState from '../hooks/useLocalStorage'

const Navigation = () => {

    const [jwt, setJwt] = useLocalState('', 'jwt')
    let navigate = useNavigate()

    const handleLogout = () => {
        setJwt('')
        navigate('/stories')
    }

    return (
        <div>
            <nav> 
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li> Profile </li>
                    <li> Sign Up </li>
                    <li> <Link to="/stories"> All Stories </Link> </li>
                    <li> <Link to="/stories/create"> Create A Story </Link> </li>
                    <li> <Link to="/login"> Login </Link> </li>
                    <li> <Link to="/signup"> Sign Up </Link> </li>
                    <button onClick={() => handleLogout()}>Log out </button>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation