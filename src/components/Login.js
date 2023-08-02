import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Adventshare from '../APIs/Adventshare';

// async function loginUser(credentials) {
//   return fetch('http://127.0.0.1:8000/login', {
//     method: 'POST',
//     headers: {'content-type': 'application/x-www-form-urlencoded'},
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');


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
          // setToken(response.data)
          console.log(response)
          console.log(response.data)
      } 
      catch (err) {
          console.log(err)
      }
    }


  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login


  // const reqBody = {
  //   username: 'test@test.com',
  //   password: 'test'
  // };
  
  // fetch('http://127.0.0.1:8000/login', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }, 
  //     method: 'post',
  //     body: JSON.stringify(reqBody),
  //   }).then(response => response.json())
  //   .then(data => console.log(data))
