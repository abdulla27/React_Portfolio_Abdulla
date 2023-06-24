import React from 'react'
import Header from './componenet/header/Header'
import Nav from './componenet/nav/Nav'
import About from "./componenet/About/About"
import Experience from './componenet/experience/Experience'
import Services from './componenet/services/Services'
import Portfolio from './componenet/portfolio/Portfolio'
import Testimonials from "./componenet/testimonials/Testimonials"
import Contact from './componenet/contact/Contact'
import Footer from "./componenet/footer/Footer"

const App=()=> {
  return (
    <>
        <Header/>
        <Nav/>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

        

        
    </>
  )
}

export default App