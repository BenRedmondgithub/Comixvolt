import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavbarDark } from './components/navbar';
import { ComicCard } from './components/comicCard'

function App() {

  return (
    <div className="App">
      <NavbarDark />
      <div className="hero">
        <div className="text-center">
          <h1>Welcome to Comixvolt</h1>
          <p>Track your comics. Write your thoughts. Build your story.</p>
          <a href="/add-comic" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">Add a Comic</a>
          <ComicCard />
        </div>
      </div>
    </div>
  )
}

export default App


//add comic form with title, author, publisher, release date, genre, description, cover image upload, and submit button. style with tailwindcss.

//render the comic in a card with the cover image, title, author, publisher, release date, genre, and description. style with tailwindcss.

//add edit and delete buttons to the comic card. style with tailwindcss.

//add a search bar to filter comics by title, author, publisher, or genre. style with tailwindcss.

// add notes and journals

// add later 

//add a settings page with options to change the theme, manage account, and log out. style with tailwindcss.

//add logged in user profile page with the user's comics, reviews, and settings. style with tailwindcss.

//add a review system where users can rate and review comics. style with tailwindcss.

//add a recommendation system that suggests comics based on the user's reading history and preferences. style with tailwindcss.