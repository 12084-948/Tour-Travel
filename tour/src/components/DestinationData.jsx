import React from 'react'




const DestinationData = (props) => {
    return (
        <>
            <div className={props.cName}>
                <div className="desText">
                    <h2>{props.heading}</h2>
                    <p>{props.text}
                    </p>
                </div>
                <div className="image">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />

                </div>
            </div>
        </>
    )
}

export default DestinationData