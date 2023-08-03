import React, { useState } from 'react';
import Adventshare from '../APIs/Adventshare';


const SignUp = () => {

  const [display, setDisplay] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const response = await Adventshare.post("/users", {
            email: email,
            display_name: display,
            password: password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          },);
          console.log(response)
      } 
      catch (err) {
          console.log(err)
      }
    }


  return(
    <form onSubmit={handleSubmit}>
        <label>
        <p>Display Name:</p>
        <input value={display} type="text" onChange={e => setDisplay(e.target.value)} />
      </label>
      <label>
        <p>Email:</p>
        <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password:</p>
        <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUp