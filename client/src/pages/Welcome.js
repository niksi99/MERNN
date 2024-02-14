import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie'

const Welcome = () => {

  const [userProfile, setUserProfile] = useState({})
  const token = window.localStorage.getItem("token")
  useEffect(() => {
    axios.get(`http://localhost:9894/user/user-profile`)
         .then((res) => {
            console.log(res)
            //etUserProfile(res.data)
         })
         .catch((error) => {
            console.log(console.error())
         })
  }, [])

  return (
    <div>
      Welcome logged in user
    </div>
  )
}

export default Welcome