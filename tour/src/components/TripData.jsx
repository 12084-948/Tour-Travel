import React from 'react'
import './trip.css'


const TripData = (props) => {
  return (
    <div>
        <div className="tCard">
            <div className="tImage">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default TripData