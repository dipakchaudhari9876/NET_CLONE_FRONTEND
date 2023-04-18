import React, { useEffect, useState } from 'react'
import './single.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { homeData } from '../../dummyData'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { trending, upcome } from '../../dummyData'
import Upcoming from '../Upcoming/Upcoming'
import { getToken } from '../../Check'

const SinglePage = () => {
  const navigate = useNavigate()
  const {id } = useParams()
  const [item, setItem] = useState(null)
  const [items, setItems] = useState(trending)
  // const [upcoming,setUpcome] = useState(upcome)

  useEffect(() => {
    const temp = getToken()
    if(temp === false){
      return navigate('/auth')
    }
    const pageData = homeData.find((item) => item.id === parseInt(id))
    setItem(pageData)
    item && console.log(item.video)
  }, [id])
  return (
    <>
      <Header />
      {item ?
        <div className="SinglePage">
          <div className="SinglePage_top">
            <span className="top_head">{item.name}</span>|
            <span className="top_time">{item.time}</span>|
            <span className="top_quality">HD</span>
          </div>
          <div className="single_container">
            <video src={item.video} controls autoPlay={false}></video>
            <div className="single_details">
              <h3>{item.date}</h3>
              <p>{item.desc}</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea itaque consectetur officia. Optio consequuntur laborum eum ab reprehenderit vel amet adipisci eaque ratione, voluptas quidem minima quos quam dignissimos numquam.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea itaque consectetur officia. Optio consequuntur laborum eum ab reprehenderit vel amet adipisci eaque ratione, voluptas quidem minima quos quam dignissimos numquam.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea itaque consectetur officia. Optio consequuntur laborum eum ab reprehenderit vel amet adipisci eaque ratione, voluptas quidem minima quos quam dignissimos numquam.
              </p>
              <div className="single_social">
                <h4>Share :</h4>
                <div className="center_footer_outer">
                  <InstagramIcon className='footer_icon' style={{ color: "red" }}></InstagramIcon>
                </div>
                <div className="center_footer_outer">
                  <FacebookIcon className='footer_icon' style={{ color: "blue" }}></FacebookIcon>
                </div>
                <div className="center_footer_outer">
                  <RedditIcon className='footer_icon' style={{ color: "yellow" }}></RedditIcon>
                </div>
                <div className="center_footer_outer">
                  <TwitterIcon className='footer_icon' style={{ color: "blue" }}></TwitterIcon>
                </div>
              </div>

            </div>
            {/* <button onClick={() => {
              navigate(`/sep/${id}`)
            }}>Go to vid</button> */}

          </div>
          {items && <Upcoming items={items} title="Recommended Movies" />}

        </div> : null}
      <Footer />
    </>

  )
}

export default SinglePage