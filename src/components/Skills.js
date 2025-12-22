import React from 'react';

const Skills = () => {
    const skills = [
        { category: "Languages", icon: "💻", items: ["JavaScript", "Python", "C++", "SQL", "Arduino"] },
        { category: "Frameworks & Tools", icon: "🛠️", items: ["React", "Tailwind CSS", "TypeScript", "Git", "PyTorch"] },
        { category: "Other Skills", icon: "🧠", items: ["Machine Learning", "Embedded Systems", "Unreal Engine", "Problem Solving"] }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-800 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technologies and skills I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-2 group">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                                <span className="text-3xl">{skillGroup.icon}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {skillGroup.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, idx) => (
                                    <span key={idx} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-600 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
