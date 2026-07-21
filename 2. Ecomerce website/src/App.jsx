import React from 'react'
import Navbar from './components/navbar/Navbar' 
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <main className="min-h-screen bg-black p-6">

      <div className="max-w-7xl mx-auto">

        <Navbar />

        <Hero />
        
      </div>

    </main>
  )
}

export default App
