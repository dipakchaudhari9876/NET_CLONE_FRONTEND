import React, { useState } from 'react'
import './register.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Axios from 'axios'
const url = process.env.REACT_APP_API

const Register = ({ change }) => {
    const [visible, setVisible] = useState(true)
    const [Cvisible, setCVisible] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setCpassword] = useState("")
    const [error, setError] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (!email.length || !password.length || !Cpassword.length) {
            return setError("*All the fields are mandatory")
        } else if (password !== Cpassword) {
            return setError("*Passwords does not match")
        }
        setError("")
        try {
            const data = { email, password, Cpassword }
            const register = await Axios.post(`${url}/api/user/register`, data)
            if (register) {
                alert(register.data.message)
                change(true)
                setEmail("")
                setPassword("")
                setCpassword("")
            }
        } catch (err) {
            // console.log(err)
            return setError(err.response.data.error)
        }


    }
    return (
        <div className="Login">
            <h1>Sign Up</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="email" className='form_input' placeholder='Email Address'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
                <div className="form_password">
                    <input type={visible ? "password" : "text"} className='form_input' placeholder='Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />
                    {visible && <VisibilityIcon onClick={() => {
                        setVisible(!visible)
                    }} className='pass_icon'></VisibilityIcon>}
                    {!visible && <VisibilityOffIcon onClick={() => {
                        setVisible(!visible)
                    }} className='pass_icon'></VisibilityOffIcon>}
                </div>
                <div className="form_password">
                    <input type={Cvisible ? "password" : "text"} className='form_input' placeholder='Confirm Password'
                        onChange={(e) => {
                            setCpassword(e.target.value)
                        }}
                        value={Cpassword}
                    />
                    {Cvisible && <VisibilityIcon onClick={() => {
                        setCVisible(!Cvisible)
                    }} className='pass_icon'></VisibilityIcon>}
                    {!Cvisible && <VisibilityOffIcon onClick={() => {
                        setCVisible(!Cvisible)
                    }} className='pass_icon'></VisibilityOffIcon>}
                </div>
                {error && <p style={{ color: "red" }} >{error}</p>}
                <button className='form_btn' type="submit">Sign Up</button>
            </form>
            <div className="bottom_login">
                <span onClick={() => {
                    change(true)
                }}>Already have an Account</span>
            </div>
        </div>
    )
}
export default Register