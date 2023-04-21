import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './auth.css'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import { getToken } from '../../Check'

const Auth = () => {

    const [login,setLogin] = useState(true)

    return (<>
        <Header/>
        <div className="Auth">
            {!getToken() && login && <Login change={setLogin}/>}
            {!getToken() && !login && <Register change={setLogin}/> }
            {getToken() && <Profile/>}
            
        </div>
        <Footer/>
    </>
    )
}

export default Auth