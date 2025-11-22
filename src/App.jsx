import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import About from './Componenets/About/About'
import Services from './Componenets/Services/Services'
import Mywork from './Componenets/Mywork/Mywork'
import Contact from './Componenets/Contact/Contact'
import Footer from './Componenets/Footer/Footer'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Mywork/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
