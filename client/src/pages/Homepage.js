import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <p>Homepage </p>
      <div className="menu">
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  )
}

export default Homepage
