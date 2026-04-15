import React, { useState } from 'react';

const NavbarDark = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold tracking-tight hover:text-blue-300 transition-colors">
              📚 Comixvolt
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                My Collection
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Add Comics
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Discover
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Reviews
              </a>
            </div>
          </div>

          {/* Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search comics..."
                className="bg-slate-700/50 text-white placeholder-gray-300 px-4 py-2 pr-10 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Notifications */}
            <button className="text-gray-300 hover:text-white p-2 rounded-md relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10 17h5l-5 5v-5zM5 12l5-5v5H5z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white p-2 rounded-md">
              <img
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                alt="Profile"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700">
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Collection</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Comics</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Discover</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <input
                  type="search"
                  placeholder="Search comics..."
                  className="w-full bg-slate-700/50 text-white placeholder-gray-300 px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export { NavbarDark };