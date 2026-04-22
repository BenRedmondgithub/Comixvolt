import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComic from '../pages/addComicForm';
import Home from '../pages/Home';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-comic" element={<AddComic />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
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