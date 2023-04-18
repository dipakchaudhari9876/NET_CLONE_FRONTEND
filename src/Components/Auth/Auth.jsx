import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './auth.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

const Auth = () => {

    const [login,setLogin] = useState(true)

    return (<>
        <Header/>
        <div className="Auth">
            {login && <Login change={setLogin}/>}
            {!login && <Register change={setLogin}/> }
        </div>
        <Footer/>
    </>
    )
}

export default Auth