import React from 'react';

interface Comic {
  title?: string;
  author?: string;
  publisher?: string;
  releaseDate?: string;
  coverImage?: string;
  rating?: number;
  description?: string;
  status?: 'read' | 'reading' | 'to-read';
  notes?: string[];
}

const ComicCard = ({ comic }: { comic: Comic }) => {
  const {
    title = "Untitled Comic",
    author = "Unknown Author",
    publisher = "Unknown Publisher",
    releaseDate = "Unknown Release Date",
    coverImage = "",
    rating = 0,
    description = "No description available.",
    status = "to-read",
    notes = []
  } = comic || {};

  // Default cover if no image provided
  const defaultCover = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300' fill='%23374151'%3E%3Crect width='200' height='300' fill='%23374151'/%3E%3Ctext x='100' y='150' text-anchor='middle' fill='white' font-size='16'%3ENo Cover%3C/text%3E%3C/svg%3E";

  // Function to render star rating

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-xs">
      {/* Cover Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img
          src={coverImage || defaultCover}
          alt={`${title} cover`}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          onError={(e) => { e.currentTarget.src = defaultCover; }}
        />

        {/* Rating */}
        {rating > 0 && (
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg px-1.5 py-0.5">
            <div className="flex items-center space-x-1">
              {rating >= 1 && <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.64 12.545.762 9.455l6.09-.545L10 3l2.148 5.91 6.09.545-4.878 3.09L15.878 15z" /></svg>}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-md font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Author & Publisher */}
        <div className="space-y-0.5 mb-2">
          {author && (
            <p className="text-xs text-gray-600">
              <span className="font-medium">By:</span> {author}
            </p>
          )}
          {publisher && (
            <p className="text-xs text-gray-600">
              <span className="font-medium">Publisher:</span> {publisher}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs text-gray-700 mb-3 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-1.5">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-xs font-medium transition-colors">
            View
          </button>
          <button className="px-2 py-1.5 border border-gray-300 hover:border-gray-400 text-gray-700 rounded transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        {/* Status */}
        {status && (
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">Status:</span> {status}
          </p>
        )}
        {/* Notes */}
        {notes.length > 0 && (
          <details className="mt-3 rounded-lg border border-gray-200 bg-gray-50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 marker:hidden">
              <span>Notes</span>
              <svg
                className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <ul className="border-t border-gray-200 px-3 py-2 text-xs leading-relaxed text-gray-600">
              {notes.map((note, index) => (
                <li key={`${title}-note-${index}`} className="py-1 first:pt-0 last:pb-0">
                  {note}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </div>
  );
};

// Component to display multiple comics in a grid
const ComicsGrid = ({ comics = [] }) => {
  if (!comics || comics.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Comics Found</h3>
        <p className="text-gray-500">Start building your collection by adding some comics!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {comics.map((comic, index) => (
        <ComicCard key={comic || index} comic={comic} />
      ))}
    </div>
  );
};

export { ComicCard, ComicsGrid };