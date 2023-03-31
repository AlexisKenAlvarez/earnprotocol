import React from 'react'
import Nav from './components/Nav'
import About from './views/About'
import Ecosystem from './views/Ecosystem'
import Hero from './views/Hero'
import Tokenomics from './views/Tokenomics'


const App = () => {
  return (
    <div className='text-white font-poppins bg-blk overflow-hidden'>
      <Nav />
      <Hero />
      <About />
      <Ecosystem />
      <Tokenomics />
    </div>
  )
}

export default App