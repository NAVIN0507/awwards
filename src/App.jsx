import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Navbar/>
           <Hero/>
          <About/>
        </main>
    )
}
export default App
