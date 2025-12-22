import React from 'react';

const Education = () => {
    const educationItems = [
        {
            institution: "Hamdard University",
            period: "2023–2027",
            degree: "Bachelors in Computer Engineering (Ongoing)",
            status: "Current"
        },
        {
            institution: "MIT OpenCourseWare",
            period: "Completed",
            degree: "MIT 6.006: Introduction to Algorithms",
            status: "Completed"
        },
        {
            institution: "CS50",
            period: "Completed",
            degree: "CS50 Introduction to Artificial Intelligence with Python",
            status: "Completed"
        },
        {
            institution: "Coursera",
            period: "Ongoing",
            degree: "Machine Learning Specialization",
            status: "In Progress"
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Education & Coursework
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {educationItems.map((item, index) => (
                        <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full border ${item.status === 'Completed' ? 'border-green-500 text-green-400' : 'border-cyan-500 text-cyan-400'}`}>
                                    {item.status}
                                </span>
                            </div>
                            <p className="text-purple-400 font-medium mb-1">{item.degree}</p>
                            <p className="text-slate-500 text-sm">{item.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
