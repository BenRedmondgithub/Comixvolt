import React from 'react';
import { NavbarDark } from '../src/components/navbar';

export default function AddComic() {
  return (
    <div>
      <NavbarDark />
      <div className="mx-auto mt-10 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 text-center gap-6">
          <h2 className="text-lg font-bold text-gray-900 text-center">Add a Comic</h2>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter title of the comic true believers"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Author
            </label>
            <input
              type="text"
              placeholder="Enter author"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Publisher
            </label>
            <input
              type="text"
              placeholder="Enter publisher"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Release Date
            </label>
            <input
              type="date"
              placeholder="Enter Release Date or date you picked it up"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Cover Image
            </label>
            <input
              type="url"
              placeholder="Enter cover image"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Ranking
            </label>
            <input
              type="number"
              placeholder="Enter ranking (1-5 stars)"
              className="w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="text-center flex flex-col gap-2 text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              rows={4}
              className=" w-8/12 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-light transition-colors mx-auto"
          >
            Add Comic
          </button>
        </form>
      </div>
    </div>
  );
}
