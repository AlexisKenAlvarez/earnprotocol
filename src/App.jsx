import React from 'react'
import Nav from './components/Nav'
import About from './views/About'
import Ecosystem from './views/Ecosystem'
import Hero from './views/Hero'
import Tokenomics from './views/Tokenomics'
import Roadmap from './views/Roadmap'
import Footer from './views/Footer'


const App = () => {
  return (
    <div className='text-white font-poppins bg-blk overflow-hidden'>
      <Nav />
      <Hero />
      <About />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App