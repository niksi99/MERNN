import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [salary, setSalary] = useState("")

    const navigate = useNavigate();

    const handleRagistration = (event) =>{
      event.preventDefault();

      const data = {
        firstname, lastname, username, email,
        password, phoneNumber, salary
      };

      axios.post("http://localhost:9894/auth/register", data)
        .then((res) => {
          console.log(res)
          navigate("/login")
        })
        .catch((error) => {console.log(error)})
    }
  return (
    <div>
      <div className="register-form">
        <form onSubmit={handleRagistration}>
          <div>
            <label htmlFor='inputFirstname'>Firstname: </label>
            <input type="text" placeholder='First name' 
            value={firstname} id="inputFirstname"
            onChange={(event) => setFirstName(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='inputLastname'>Lastname: </label>
            <input type="text" placeholder='Last name' 
            value={lastname} id="inputLastname"
            onChange={(event) => setLastName(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='inputUsername'>Username: </label>
            <input type="text" placeholder='Username' 
            value={username} id="inputUsername"
            onChange={(event) => setUsername(event.target.value)}/>
          </div>
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
            <label htmlFor='inputPhoneNumber'>Phone Number: </label>
            <input type="text" placeholder='Phone Number' 
            value={phoneNumber} id="inputPhoneNumber"
            onChange={(event) => setPhoneNumber(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='inputSalary'>Salary: </label>
            <input type="number" placeholder='Salary' 
            value={salary} id="inputSalary"
            onChange={(event) => setSalary(event.target.value)}/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
