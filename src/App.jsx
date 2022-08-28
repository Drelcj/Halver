import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Tour from './components/tour/tour'
import Music from './components/music/music'
import Services from './components/services/services'
import Fans from './components/fans/fans'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Tour />
        <Music />
        <Services />
        <Fans />
        <Contact />
        <Footer />

    </>
  )
}

export default App