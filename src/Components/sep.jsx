import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData } from '../dummyData'


const Sep = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        const temp = homeData.find((item) => item.id === parseInt(id))
        setItem(temp)
    }, [id])
    return (
        <>
        <h1>hello</h1>
            {item && <div className="sep">
                <video src={item.video} controls></video>
            </div>}
        </>
    )
}

export default Sep