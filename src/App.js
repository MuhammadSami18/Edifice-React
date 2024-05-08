import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Statistics from './components/Statistics'
import {ProjectHero, OurProjects} from './components/OurProjects'
import OurSevices from './components/OurSevices'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Map from './components/Map'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Statistics/>
      <OurProjects/>
      <ProjectHero/>
      <OurSevices/>
      <Pricing/>
      <Testimonial/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default App
