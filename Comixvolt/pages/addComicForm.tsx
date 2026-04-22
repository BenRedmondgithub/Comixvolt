import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarDark } from '../src/components/navbar';
import { saveComic } from '../src/comicStorage';
import type { Comic } from '../types/comic';

type ComicFormValues = {
  title: string;
  author: string;
  publisher: string;
  releaseDate: string;
  coverImage: string;
  rating: string;
  description: string;
  status: NonNullable<Comic['status']>;
};

const initialForm: ComicFormValues = {
  title: '',
  author: '',
  publisher: '',
  releaseDate: '',
  coverImage: '',
  rating: '',
  description: '',
  status: 'to-read',
};

export default function AddComic() {
  const [formValues, setFormValues] = useState(initialForm);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage('');
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const comicToSave: Comic = {
        title: formValues.title.trim(),
        author: formValues.author.trim(),
        publisher: formValues.publisher.trim(),
        releaseDate: formValues.releaseDate,
        coverImage: formValues.coverImage.trim(),
        rating: Number(formValues.rating),
        description: formValues.description.trim(),
        status: formValues.status,
        // add notes
      };

      if (
        !comicToSave.title ||
        !comicToSave.author ||
        !comicToSave.publisher ||
        !comicToSave.releaseDate ||
        !comicToSave.description ||
        Number.isNaN(comicToSave.rating)
      ) {
        throw new Error('Fill out all fields before saving your comic.');
      }

      saveComic(comicToSave);
      setSubmitMessage(`Saved ${comicToSave.title} to local storage.`);
      setFormValues(initialForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save comic.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <NavbarDark />
      <div className="mx-auto mt-10 w-full max-w-md rounded-lg bg-zinc-300 p-6 shadow-lg outline outline-4 outline-orange-700">
        <form className="grid grid-cols-1 gap-6 text-center" onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold text-black text-center">Add a Comic</h2>
          <Link
            to="/home"
            className="mx-auto mt-4 rounded-md bg-cyan-600 px-4 py-2 text-center text-sm font-light text-white transition-colors hover:bg-cyan-700"
          >
            Back to Home
          </Link>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter title of the comic true believers"
              value={formValues.title}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Author
            </label>
            <input
              name="author"
              type="text"
              placeholder="Enter author"
              value={formValues.author}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Publisher
            </label>
            <input
              name="publisher"
              type="text"
              placeholder="Enter publisher"
              value={formValues.publisher}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Release Date
            </label>
            <input
              name="releaseDate"
              type="date"
              placeholder="Enter Release Date or date you picked it up"
              value={formValues.releaseDate}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Cover Image
            </label>
            <input
              name="coverImage"
              type="url"
              placeholder="Enter cover image"
              value={formValues.coverImage}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Ranking
            </label>
            <input
              name="rating"
              type="number"
              placeholder="Enter ranking (1-5 stars)"
              min="1"
              max="5"
              value={formValues.rating}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              rows={4}
              value={formValues.description}
              onChange={handleChange}
              className=" w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-800 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formValues.status}
              onChange={handleChange}
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
              <option value="to-read">Unread</option>
              <option value="reading">Reading</option>
              <option value="read">Completed</option>
            </select>
          </div>

          {submitMessage && (
            <p className="mx-auto w-8/12 rounded-md bg-emerald-100 px-3 py-2 text-sm text-emerald-800">
              {submitMessage}
            </p>
          )}

          {submitError && (
            <p className="mx-auto w-8/12 rounded-md bg-red-100 px-3 py-2 text-sm text-red-800">
              {submitError}
            </p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-center mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md text-sm font-light transition-colors mx-auto"
          >
            {isSubmitting ? 'Saving...' : 'Add Comic'}
          </button>
        </form>
      </div>
    </div>
  );
}
