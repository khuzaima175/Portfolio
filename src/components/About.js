import React from 'react';

const About = () => {
    const highlights = [
        { icon: "🎓", text: "Computer Engineering Student" },
        { icon: "🤖", text: "AI & ML Enthusiast" },
        { icon: "💻", text: "Python & React Developer" },
        { icon: "🚀", text: "Building for Education & Health" }
    ];

    return (
        <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        About Me
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 text-center">
                            A driven Computer Engineering student specializing in <span className="text-cyan-400 font-semibold">AI integration</span> and <span className="text-purple-400 font-semibold">machine learning</span>.
                            Leveraging a strong background in Python and algorithms to build hands-on applications for
                            the education and health sectors. Currently deepening my expertise in machine learning by
                            mastering frameworks like <span className="text-pink-400 font-semibold">PyTorch</span> to create more sophisticated and impactful solutions.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                                    <span className="text-3xl mb-2">{item.icon}</span>
                                    <span className="text-sm text-slate-400 text-center">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
