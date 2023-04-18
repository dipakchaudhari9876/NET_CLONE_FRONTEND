import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShopIcon from '@mui/icons-material/Shop';
import './footer.css'

const Footer = () => {
  return (
    <div className="Footer">
        <section className="left_footer">
            <ul className="left_footer_list">
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Watch List</li>
            </ul>
            <p className='left_footer_para'>
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
            </p>
        </section>
        <section className="center_footer">
            <h1>Follow Us</h1>
            <div className="center_footer_follow">
                <div className="center_footer_outer">
                    <InstagramIcon className='footer_icon'></InstagramIcon>
                </div>
                <div className="center_footer_outer">
                    <FacebookIcon className='footer_icon'></FacebookIcon>
                </div>
                <div className="center_footer_outer">
                    <RedditIcon className='footer_icon'></RedditIcon>
                </div>
                <div className="center_footer_outer">
                    <TwitterIcon className='footer_icon'></TwitterIcon>
                </div>
            </div>
        </section>
        <section className="right_footer">
            <h1>Streamit App</h1>
            <div className="right_footer_base">
                <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"/>
                <span>App Store</span>
                <img src="https://img.icons8.com/fluency/48/000000/google-play.png"/>
                <span>Play Store</span>

            </div>
        </section>
    </div>
  )
}

export default Footer