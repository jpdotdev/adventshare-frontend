import React, { useState } from 'react';
import Adventshare from '../APIs/Adventshare';
import useLocalState from '../hooks/useLocalStorage';


const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useLocalState('', 'jwt')
  const [user_id, setUser_id] = useLocalState('', 'user_id')
  

    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const response = await Adventshare.post("/login", {
            username: email,
            password: password
          }, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          },);

          setJwt(response.data.access_token)
          setUser_id(response.data.user_id)
          window.location.href = '/stories'
      } 
      catch (err) {
          console.log(err)
      }
     
    }
    

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email:</p>
        <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password:</p>
        <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login

