import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <>
       <Navbar />
      <Hero
        cName="contact"
        photo="aboutPhoto"
        heroImg="../src/assets/8.jpg"
        title="Service" />
        <Trip />
    <Footer />
    </>
  )
}

export default Service