import React, { useState } from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { getToken } from '../../Check';

const Header = () => {
    const [mobile,setMobile] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="container">
                <nav className="cont-main">
                    <div className="logo">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <ul className={mobile? "navMenu-list": "cont-links"} onClick={()=> setMobile(false)}>
                        <li><Link style={{color:"white"}} to={'/'}>Home</Link></li>
                        <li><Link style={{color:"white"}} to={'/'}>Series</Link></li>
                        <li><Link style={{color:"white"}} to={'/'}>Movies</Link></li>
                        <li><Link style={{color:"white"}} to={'/'}>Pages</Link></li>
                        {/* <li><Link style={{color:"white"}} to={'/'}>Pricing</Link></li> */}
                        {/* <li><Link style={{color:"white"}} to={'/'}>Contact</Link></li> */}
                    </ul>
                    <button className='toggle' onClick={()=>setMobile(!mobile)}>
                        {mobile? <CloseRoundedIcon className='menu'></CloseRoundedIcon> : <MenuIcon className='menu'></MenuIcon>}
                    </button>
                </nav>
                <div className="account">
                    <div className="icon"><SearchIcon className='search'></SearchIcon></div>
                    <div className="icon"><NotificationsActiveIcon className='notification'></NotificationsActiveIcon></div>
                    <div className="icon" onClick={()=>{
                        navigate('/auth')
                    }}><PersonIcon className='search'></PersonIcon></div>
                    {getToken() && <button className='account-btn'>Subscribe Now</button>}
                </div>
            </div>
        </div>
    )
}

export default Header