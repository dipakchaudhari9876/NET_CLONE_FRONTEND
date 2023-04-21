import React, { useEffect, useState } from 'react'
import './profile.css'
import ProImg from './../../Assests/images/profile.jpg'
import { getToken } from '../../Check'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const url = process.env.REACT_APP_API

const Profile = () => {
  const [data,setData] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    const token = getToken()
    const getData =async()=>{
      try{
        const data = await Axios.get(`${url}/api/user/details`,{
          params:{jwtoken:token}
        })
        const EmailData = (data.data.email).split("@")
        setData(EmailData[0])
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[])
  return (
    <div className="profile">
      <div className="profile_img">
        <img src={ProImg} alt="profile"/>
      </div>
      <h4>User id : <span>{data}</span></h4>
      <button className='btn_logout' onClick={()=>{
        localStorage.removeItem("jwtoken")
        navigate('/')
      }}>LOGOUT</button>
    </div>
  )
}

export default Profile