import React from 'react'
import Hero from '../components/Hero'
import Desitnation from '../components/Desitnation'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        photo="heroImg"
        heroImg="../src/assets/1.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
     <Desitnation/>
     <Trip />
     <Footer />

    </>
  )
}

export default Home