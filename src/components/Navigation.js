import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalState from '../hooks/useLocalStorage'
import PrivateRoute from './PrivateRoute'


const Navigation = () => {


    const [jwt, setJwt] = useLocalState('', 'jwt')
    let navigate = useNavigate()

    const handleLogout = () => {
        setJwt('')
        navigate('/')
    }

    const handleLoginRoute = () => {
        navigate('/login')
    }

    const handleSignupRoute = () => {
        navigate('/signup')
    }


    return (
        <div>
            <nav> 
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li> Sign Up </li>
                    <li> <Link to="/stories"> All Stories </Link> </li>
                    <li> <Link to="/stories/create"> Create A Story </Link> </li>
                    { !jwt && ( <button onClick={() => handleSignupRoute()}> Sign up </button> )}
                    { !jwt && ( <button onClick={() => handleLoginRoute()}> Log in </button> )}
                    { jwt && ( <button onClick={() => handleLogout()}> Log out </button> )}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation