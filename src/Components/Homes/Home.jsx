import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SampleNext =(props)=>{
  const {onClick} = props
  return(
    <div className='ctrl-btn' onClick={onClick}>
      <button className='next'>
        <ArrowForwardIosIcon className='next-icon' style={{fontSize:"20px",color:"white"}}></ArrowForwardIosIcon>
      </button>
    </div>
  )
}
const SamplePrev =(props)=>{
  const {onClick} = props
  return(
    <div className='ctrl-btn' onClick={onClick}>
      <button className='prev'>
        <ArrowBackIosNewIcon className='prev-icon' style={{fontSize:"20px",color:"white"}}></ArrowBackIosNewIcon>
      </button>
    </div>
  )
}

const Home = ({items}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNext/>,
    prevArrow:<SamplePrev/>

  };
  return (
    <div className="homeContainer">
    <Slider {...settings}>
      {items.map((data)=>{
        return(
          <HomeCard key={data.id} {...data}/>
        )
      })}
      </Slider>
    </div>
  )
}

export default Home