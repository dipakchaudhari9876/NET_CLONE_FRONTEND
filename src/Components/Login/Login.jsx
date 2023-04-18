import React, { useState } from 'react'
import './login.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
const url = process.env.REACT_APP_API

const Login = ({ change }) => {
    const [visible, setVisible] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (!email.length || !password.length) {
            return setError("*All the fields are mandatory")
        }
        setError("")
        try {
            const data = { email, password }
            const login = await Axios.post(`${url}/api/user/login`, data)
            if (login) {
                alert(login.data.message)
                navigate('/')
                localStorage.setItem("jwtoken",JSON.stringify(login.data.token))
                setEmail("")
                setPassword("")
            }
        } catch (err) {
            // console.log(err)
            return setError(err.response.data.error)
        }
        
    }
    return (
        <div className="Login">
            <h1>Sign In</h1>
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
                {error && <p style={{ color: "red" }} >{error}</p>}

                <button className='form_btn' type="submit">Sign In</button>
            </form>
            <div className="bottom_detail">
                <div className="bottom_detail_left">
                    <input type="checkbox" />
                    <span>Remember Me</span>
                </div>
                <div className="bottom_detail_right">
                    Need Help?
                </div>
            </div>
            <div className="bottom_register">
                New to STREAMIT?<span onClick={() => {
                    change(false)
                }
                }>Sign Up Now</span>
            </div>
        </div>
    )
}

export default Login