import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="hero"></div>
        <div className="hero-content">
          <h1>Welcome to Comixvolt</h1>
          <p>Your ultimate destination for comics and graphic novels.</p>
          <a href="/comics" className="btn">Explore Comics</a>
        </div>
      </div>
  )
}

export default App
