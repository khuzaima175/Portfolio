import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                            Khuzaima Ahmed
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium">Home</a>
                            <a href="#about" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium">About</a>
                            <a href="#education" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium">Education</a>
                            <a href="#skills" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium">Skills</a>
                            <a href="#projects" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md font-medium">Projects</a>
                            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-md font-medium transition-colors hover:shadow-lg hover:shadow-cyan-500/50">Contact</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
                        <a href="#home" className="block hover:bg-slate-700 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#about" className="block hover:bg-slate-700 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#education" className="block hover:bg-slate-700 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium">Education</a>
                        <a href="#skills" className="block hover:bg-slate-700 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium">Skills</a>
                        <a href="#projects" className="block hover:bg-slate-700 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#contact" className="block bg-cyan-500 text-slate-900 px-3 py-2 rounded-md text-base font-medium mt-4 text-center">Contact Me</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
