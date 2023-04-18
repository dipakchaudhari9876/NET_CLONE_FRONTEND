import React, { useState } from 'react'
import Home from '../Homes/Home'
import { trending } from '../../dummyData'
import './trending.css'

const Trending = () => {
    const [items,setItems] = useState(trending)
  return (
    <div className="Trending">
    <h1 className="trending_head">Trending</h1>
        <Home items ={items}/>
    </div>
  )
}

export default Trending