import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';


const Ucard = ({ id, cover, name, time }) => {
  const navigate = useNavigate()
  

  const onClickHandler = ()=>{
    navigate(`/single/${id}`)
    // console.log(cover)
  }

  return (
    <div className="Ucard">
      <div className="Ucard_img">
        <img src={cover} alt="name" />
      </div>
      <div className="Ucard_text_sec">
        <h3>{name}</h3>
        <span>{time}</span>
        <button className='btn' onClick={onClickHandler}>
          <PlayArrowIcon></PlayArrowIcon>
          PLAY NOW
        </button>
      </div>
    </div>
  )
}

export default Ucard