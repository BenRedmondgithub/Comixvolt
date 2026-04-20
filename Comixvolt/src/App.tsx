import { useState } from 'react'
import './App.css'
import { NavbarDark } from './components/navbar.js';
import { ComicCard } from './components/comicCard.js';

function App() {
  // Sample comic data for demonstration
  const sampleComic = {
    title: "Spider-Man: Amazing Fantasy #15",
    author: "Stan Lee",
    publisher: "Marvel Comics",
    releaseDate: "1962-08-10",
    coverImage: "https://static.wikia.nocookie.net/pawnstarsthegame/images/0/05/Amazing_Fantasy_-15-0.png/revision/latest?cb=20160527204501",
    rating: 5,
    description: "The first appearance of Spider-Man! A classic that changed comics forever.",
    // notes: ["First appearance of Spider-Man"]
  };

  const sampleComic2 = {
    title: "Teenage Mutant Ninja Turtles: The Last Ronin #1",
    author: "Kevin Eastman & Peter Laird",
    publisher: "IDW Publishing",
    releaseDate: "2020-10-07",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/LastRonin1Cover.jpeg",
    rating: 5,
    description: "A gritty, dystopian tale of the last surviving Ninja Turtle seeking justice in a world ruled by crime.",
    // notes: ["Gritty retelling of Batman's origin story"]
  };

  // Array of comics for mapping
  const comics = [sampleComic, sampleComic2];

  return (
    <div className="App min-h-screen bg-gray-50">
      <NavbarDark />
      <div className="hero py-16 px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Comixvolt</h1>
          <p className="text-xl text-gray-600 mb-8">Track your comics. Write your thoughts. Build your story.</p>
          <a href="/add-comic" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors mb-12">
            Add a Comic
          </a>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Comics</h2>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
              {comics.map((comic, index) => (
                <ComicCard key={index} comic={comic} />
              ))}
            </div>
          </div>
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