import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalState from '../hooks/useLocalStorage'


const Navigation = () => {

    const [jwt, setJwt] = useLocalState('', 'jwt')
    const [user_id, setUser_id] = useLocalState('', 'user_id')
    let navigate = useNavigate()


    const handleLogout = () => {
        setJwt('')
        setUser_id('')
        navigate('/')
    }

    const handleLoginRoute = () => {
        navigate('/login')
    }

    const handleSignupRoute = () => {
        navigate('/signup')
    }

    const handleMyProfile = (id) => {
         navigate(`/users/${id}`)   
    }



    return (
        <div>
            <nav> 
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li> <Link to="/stories"> All Stories </Link> </li>
                    <li> <Link to="/stories/create"> Create A Story </Link> </li>
                    { jwt && ( <li onClick={() => handleMyProfile(user_id)}> My Profile </li> )}
                    { !jwt && ( <button onClick={() => handleSignupRoute()}> Sign up </button> )}
                    { !jwt && ( <button onClick={() => handleLoginRoute()}> Log in </button> )}
                    { jwt && ( <button onClick={() => handleLogout()}> Log out </button> )}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation