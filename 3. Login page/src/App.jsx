import React from 'react'
import background from './assets/background.png'
import Login from './components/page/Login'

const App = () => {
  return (
    <main className="min-h-screen p-6 bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${background})` }}>

      <div className="max-w-8xl mx-auto">

        <Login />

      </div>

    </main>
  )
}

export default App
