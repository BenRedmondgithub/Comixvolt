import React from 'react';

const ComicCard = ({ comic }) => {
  const {
    title,
    author,
    publisher,
    releaseDate,
    genre,
    description,
    coverImage,
    rating = 0,
    notes = []
  } = comic;

  // Default cover if no image provided
  const defaultCover = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300' fill='%23374151'%3E%3Crect width='200' height='300' fill='%23374151'/%3E%3Ctext x='100' y='150' text-anchor='middle' fill='white' font-size='16'%3ENo Cover%3C/text%3E%3C/svg%3E";

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm">
      {/* Cover Image */}
      <div className="relative h-80 bg-gray-200 overflow-hidden">
        <img
          src={coverImage || defaultCover}
          alt={`${title} cover`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = defaultCover;
          }}
        />
        {/* Genre Badge */}
        {genre && (
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              {genre}
            </span>
          </div>
        )}
        {/* Rating */}
        {rating > 0 && (
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
            <div className="flex items-center space-x-1">
              {renderStars(rating)}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Author & Publisher */}
        <div className="space-y-1 mb-3">
          {author && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">By:</span> {author}
            </p>
          )}
          {publisher && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Publisher:</span> {publisher}
            </p>
          )}
          {releaseDate && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Released:</span> {formatDate(releaseDate)}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            View Details
          </button>
          <button className="px-3 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        {notes && notes.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to display multiple comics in a grid
const ComicsGrid = ({ comics }) => {
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
        <ComicCard key={comic.id || index} comic={comic} />
      ))}
    </div>
  );
};

export { ComicCard, ComicsGrid };