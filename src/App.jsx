import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testmonials from './components/Testmonials/Testmonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "Our Program" Title="What We Offer"/>
        <Programs />
        <About />
        <Title subTitle = "Gallary" Title = "Campus Photos"/>
        <Campus />
        <Title subTitle = "Testmonials" Title = "What Student Says"/>
        <Testmonials />
        <Title subTitle = "Contact us" Title = "Get in Touch"/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
