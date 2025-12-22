import React from 'react';

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSIjMzM0MTU1IiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <div className="mb-4 animate-fade-in-up">
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm border border-cyan-400/30 px-4 py-2 rounded-full bg-cyan-400/5">
                        👋 Welcome to my portfolio
                    </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up delay-100">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">Khuzaima Ahmed</span>
                </h1>
                <p className="mt-4 text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
                    Computer Engineering Student specializing in <span className="text-cyan-400 font-semibold">AI Integration</span> and <span className="text-purple-400 font-semibold">Machine Learning</span>.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                    <a href="#projects" className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        <span>View Projects</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full border-2 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all font-semibold hover:shadow-lg hover:shadow-cyan-500/20">
                        Contact Me
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 animate-bounce">
                    <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block p-2">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
