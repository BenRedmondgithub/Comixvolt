import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarDark } from '../src/components/navbar';
import { ComicCard } from '../src/components/comicCard';
import type { Comic } from '../types/comic';
import { getStoredComics } from '../src/comicStorage';
import Footer from '../src/components/footer';

const featuredComics: Comic[] = [
    {
        title: 'Spider-Man: Amazing Fantasy #15',
        author: 'Stan Lee',
        publisher: 'Marvel Comics',
        releaseDate: '1962-08-10',
        coverImage: 'https://static.wikia.nocookie.net/pawnstarsthegame/images/0/05/Amazing_Fantasy_-15-0.png/revision/latest?cb=20160527204501',
        rating: 5,
        description: 'The first appearance of Spider-Man in a landmark Silver Age issue.',
        notes: ['First appearance of Spider-Man.', 'Essential Silver Age key issue.'],
    },
    {
        title: 'Teenage Mutant Ninja Turtles: The Last Ronin #1',
        author: 'Kevin Eastman & Peter Laird',
        publisher: 'IDW Publishing',
        releaseDate: '2020-10-07',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/f9/LastRonin1Cover.jpeg',
        rating: 5,
        description: 'A bleak alternate-future TMNT story centered on the final surviving turtle.',
        status: 'read',
        notes: ['Darker alternate-future story.', 'Oversized format looks great in hand.'],
    },

    {
        title: 'Superman: for All Seasons',
        author: 'Jeph Loeb & Tim Sale',
        publisher: 'DC Comics',
        releaseDate: '1998-09-01',
        coverImage: 'https://m.media-amazon.com/images/I/81TlmYYs0oL._SY466_.jpg',
        rating: 5,
        description: 'A poignant exploration of Superman\'s early years and his journey to becoming a hero.',
        status: 'read',
        notes: ['Explores Superman\'s early years.', 'Beautifully illustrated by Tim Sale.'],
    },

    {
        title: 'Kingdom Come',
        author: 'Mark Waid & Alex Ross',
        publisher: 'DC Comics',
        releaseDate: '1996-05-01',
        coverImage: 'https://m.media-amazon.com/images/I/81YYDddTuLL._SY466_.jpg',
        rating: 5,
        description: 'A visionary tale of a future where traditional heroes clash with a new generation of reckless vigilantes.',
        status: 'read',
        notes: ['Hot damn what a book.', 'Alex Ross\'s painted art is stunning.'],
    },

];

export default function Home() {
    const [storedComics, setStoredComics] = useState<Comic[]>([]);

    useEffect(() => {
        setStoredComics(getStoredComics());
    }, []);

    const comicsToDisplay = [...storedComics, ...featuredComics];

  return (
        <div className="min-h-screen bg-zinc-950">
            <NavbarDark />
            <main className="flex flex-col items-center mx-auto max-w-6xl px-4 py-10">
                    <div className="mb-10 max-w-2xl">
                        <h1 className="mb-4 text-4xl font-bold text-black">Welcome to Comixvolt</h1>
                        <p className="mb-6 text-lg text-gray-700">Track your comics. Write your thoughts. Build your story.</p>
                        <Link to="/add-comic" className="items-center inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700">
                            Add a Comic
                        </Link>
                    </div>

                    <section>
                        <h2 className="flex items-center mb-6 text-2xl font-bold text-black">Featured Comics</h2>
                        <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5">
                            {comicsToDisplay.map((comic) => (
                                <ComicCard key={`${comic.title}-${comic.releaseDate}`} comic={comic} />
                            ))}
                        </div>
                    </section>
            </main>
            <Footer />
        </div>
    );
}