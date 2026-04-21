import React from 'react';

const NavbarDark: React.FC = () => {
    return (
        <nav className="bg-zinc-900 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-8">
                <a href="/" className="text-4xl font-bold text-zinc-100"> ComixVolt 🗯️</a>
                <div className="space-x-8">
                    <a href="/read" className="text-2xl text-zinc-300 hover:text-zinc-100">Read</a>
                    <a href="/completed" className="text-2xl text-zinc-300 hover:text-zinc-100">Completed</a>
                    <a href="/to-read" className="text-2xl text-zinc-300 hover:text-zinc-100">To Read</a>
                </div>
            </div>
        </nav>
    );
};

export { NavbarDark };
export default NavbarDark;