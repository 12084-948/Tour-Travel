import React from 'react'
import './hero.css'

const Hero = (props) => {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} className={props.photo} alt="" />
            </div>

            <div className="heroText">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </>
    )
}

export default Hero