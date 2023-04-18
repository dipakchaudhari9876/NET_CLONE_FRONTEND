import React, { useState } from 'react'
import Homes from '../Components/Homes/Homes'
import Upcoming from '../Components/Upcoming/Upcoming'
import { upcome, latest, recommended } from '../dummyData'
import Trending from '../Components/Trending/Trending'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'


const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [Latest, setLatest] = useState(latest)
  const [recommend, setRecommend] = useState(recommended)
  return (
    <div className="HomePages">
      <Header />
      <Homes />
      <Upcoming items={items} title="Upcoming Movies" />
      <Upcoming items={Latest} title="Latest Movies" />
      <Trending />
      <Upcoming items={recommend} title="Recommended Movies" />
      <Footer />

    </div>
  )
}

export default HomePages