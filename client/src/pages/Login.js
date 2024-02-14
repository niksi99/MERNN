import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();



  const handleLoggingIn = (event) =>{
    event.preventDefault();

    const data = {
      email, password
    };

    axios.post("http://localhost:9894/auth/login", data)
      .then((res) => {
        console.log(res)
        navigate("/welcome")
      })
      .catch((error) => {console.log(error)})
  }

  return (
    <div>
      <form onSubmit={handleLoggingIn}>
        <div className='login-form'>
          <div>
            <label htmlFor='inputEmail'>Email: </label>
            <input type="text" placeholder='Email' 
            value={email} id="inputEmail"
            onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='inputPassword'>Password: </label>
            <input type="text" placeholder='Password' 
            value={password} id="inputPassword"
            onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div>
            <button>Log in</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
