import React from 'react'
import { Link } from 'react-router-dom'
import Ucard from './Ucard'
// import { upcome } from '../../dummyData'
import './upcome.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SampleNext = (props) => {
    const { onClick } = props
    return (
        <div className='ctrl-btn' onClick={onClick}>
            <button className='next'>
                <ArrowForwardIosIcon className='next-icon' style={{ fontSize: "20px", color: "white" }}></ArrowForwardIosIcon>
            </button>
        </div>
    )
}
const SamplePrev = (props) => {
    const { onClick } = props
    return (
        <div className='ctrl-btn' onClick={onClick}>
            <button className='prev'>
                <ArrowBackIosNewIcon className='prev-icon' style={{ fontSize: "20px", color: "white" }}></ArrowBackIosNewIcon>
            </button>
        </div>
    )
}

const Upcoming = ({ title, items }) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNext />,
        prevArrow: <SamplePrev />

    };
    return (
        <>
            <div className="Upcoming">
                <div className='Upcoming_container'>
                    <div className="Upcoming_head">
                        <h1>{title}</h1>
                        <Link style={{ color: "red" ,fontSize:"18px"}}>View All</Link>
                    </div>
                    <div className="Upcome_content">
                        <Slider {...settings}>
                            {items.map((item) => {
                                return (
                                    <Ucard key={item.id} {...item} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcoming