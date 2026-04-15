import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddComic from '../pages/add-comic.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-comic" element={<AddComic />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
