import React from 'react'
import './destination.css'
import DestinationData from './DestinationData'
import Mountain4 from '../assets/leh1.jpeg'
import Mountain3 from '../assets/leh2.jpeg'
import Mountain1 from '../assets/lk1.jpeg'
import Mountain2 from '../assets/lk2.jpeg'



const Desitnation = () => {
    return (
        <>
            <div className="destination">

                <h1>Popular Destination</h1>
                <p className='des'>Tours gives you the oppurtunity to see a lot within a time frame.</p>

                <DestinationData
                cName="firstDes"
                    heading="Lakshadweep, India"
                    text="Lakshadweep, the group of 36 islands is known for its 
                    exotic and sun-kissed beaches and lush green landscape. The 
                    name Lakshadweep in Malayalam and Sanskrit means ‘a hundred 
                    thousand islands’.
                    India’s smallest Union Territory Lakshadweep is an 
                    archipelago consisting of 36 islands with an area of 32 sq km.
                     It is a uni-district Union Territory and is comprised of 12 
                     atolls, three reefs, five submerged banks and ten inhabited
                      islands. The islands comprise of 32 sq km. The capital is
                       Kavaratti and it is also the principal town of the UT."
                        
                    img1={Mountain1}
                    img2={Mountain2}
                />

                <DestinationData
                cName="firstDesReverse"
                    heading="Leh, India"
                    text="Leh, town, Ladakh union territory, northern India. 
                    The town is located in the valley of the upper Indus River
                     at an elevation of 11,550 feet (3,520 metres), surrounded 
                     by the towering peaks of the Ladakh Range (a southeastern
                         extension of the Karakoram Range).
                    Leh is in one of the most remote areas of the Indian-
                    administered portion of the Kashmir region and is one of the
                     highest permanently inhabited towns in the world. It was built
                      as a terminus for caravans from Asia. Today Leh is reached 
                      only by one main highway, the Treaty Road."
                    img1={Mountain3}
                    img2={Mountain4}
                />
            </div>
        </>
    )
}

export default Desitnation