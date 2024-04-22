import React from 'react'
import TripData from './TripData'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'


const Trip = () => {
    return (
        <>
            <div className="trip">
                <h1>Recent Trips</h1>
                <p className='textP'>You can discover unique destinations using Google Maps.</p>
                <div className="tripCard">
                    <TripData
                        image={Trip1}
                        heading="Trip In Indonesia"
                        text="Indonesia, Officially the Republic of Indonesia, is a country in Southeast Asia
                    and Oceania between the Indian and the Pacific Oceans. It consists of over 17,000 islands,
                    including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
                    />

                    <TripData
                        image={Trip2}
                        heading="Trip In Malaysia"
                        text="Indonesia, Officially the Republic of Indonesia, is a country in Southeast Asia
                    and Oceania between the Indian and the Pacific Oceans. It consists of over 17,000 islands,
                    including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
                    />

                    <TripData
                        image={Trip3}
                        heading="Trip In France"
                        text="Indonesia, Officially the Republic of Indonesia, is a country in Southeast Asia
                    and Oceania between the Indian and the Pacific Oceans. It consists of over 17,000 islands,
                    including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
                    />
                </div>
            </div>
        </>
    )
}

export default Trip