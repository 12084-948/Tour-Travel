import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
// import '../components/hero.css'

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero
        cName="about"
        photo="aboutPhoto"
        heroImg="../src/assets/night.jpg"
        title="About"
      />
      </div>
      <AboutUs />
      <Footer />
    </>
  )
}

export default About