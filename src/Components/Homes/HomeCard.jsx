import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './homes.css'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({ id, name, cover, rating, time, desc, starring, genres, tags, video }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="cover " />
        </div>
        <div className="content">
          <div className="details">
            <h1 className='details_header'>{name}</h1>
            <div className="details_rating">
              <div className="home_rate_icon">
                <StarIcon className='starIcon' style={{ color: "red" }}></StarIcon>
                <StarIcon className='starIcon' style={{ color: "red" }}></StarIcon>
                <StarIcon className='starIcon' style={{ color: "red" }}></StarIcon>
                <StarIcon className='starIcon' style={{ color: "red" }}></StarIcon>
                <StarHalfIcon style={{ color: "red" }} className='starIcon'></StarHalfIcon>
              </div>
              <label>{rating}&nbsp;(imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>

            <p className='detail_desc'>{desc}</p>
            <div className="cast">
              <h4>
                <span>Starring :</span>&nbsp;
                {starring}
              </h4>
              <h4>
                <span>Genres :</span>&nbsp;
                {genres}
              </h4>
              <h4>
                <span>Tags : </span>&nbsp;
                {tags}
              </h4>
            </div>
            <button className='btn' onClick={() => {
              navigate(`/single/${id}`)
            }}>
              <PlayArrowIcon></PlayArrowIcon>
              PLAY NOW
            </button>
          </div>

          <div className="playButton">
            <button className='playButton_btn' onClick={() => {
              navigate(`/single/${id}`)
            }}>
              <div className="playButton-img">
                <img src={"/images/play-button.png"} alt="btn" />
                {/* <img src={"/images/play.png"} alt="btn-paly" className='change' /> */}
              </div>
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard