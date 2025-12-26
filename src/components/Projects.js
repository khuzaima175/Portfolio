import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Synapse: AI Learning Companion",
            description: "An intelligent application designed to transform passive video content into a dynamic learning experience. Leverages Large Language Models to master any subject through summaries, quizzes, and personalized review schedules.",
            features: [
                "Brain-Powered Analysis: Processes video transcripts for summaries & concepts.",
                "Intelligent Quiz Generation: Builds custom multiple-choice quizzes.",
                "Spaced Repetition System (SRS): Optimizes long-term retention.",
                "AI Tutor: Interactive chat for deeper insights."
            ],
            tags: ["Python", "Google Gemini API", "SQLite", "ipywidgets", "Flask (Planned)"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Calorie Meter Pro",
            description: "A modern, Python-based desktop application for tracking calories, nutrition, and fitness goals, supercharged with Gemini AI for smart analysis and coaching.",
            features: [
                "Smart Food Logging: Natural language entry (e.g., '2 eggs and toast').",
                "Photo Analysis: Estimate calories/macros from meal photos.",
                "AI Nutrition Assistant: Personalized meal plans & motivation.",
                "Interactive Dashboard: Live charts & quick stats sidebar."
            ],
            tags: ["Python 3.10+", "CustomTkinter", "Gemini API", "Matplotlib", "SQLite"],
            color: "from-green-400 to-emerald-600"
        },
        {
            title: "AI Movie Ratings & Recommender",
            description: "A feature-rich React dashboard for movie enthusiasts to search, track, and rate cinematic experiences with a focus on professional aesthetics and smooth performance.",
            features: [
                "AI Assistant: Chat with a film buff AI for personalized picks.",
                "Real-time Search: Search movies/series with type filtering.",
                "Trending Discovery: Curated popular movie grid for discovery.",
                "Dual-List Management: Separate 'Watched' and 'Plan to Watch' lists.",
                "Smart Random Picker: Animated selection tool for undecided viewers.",
                "Cinematic Stats: Total watch time analysis and top-rated badges.",
                "Modern UX: Staggered animations and glassmorphism design."
            ],
            tags: ["React", "Custom Hooks", "Google Gemini API", "OMDb API", "Vanilla CSS"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Idea Flow 🧠",
            description: "A high-performance, AI-powered 'Mind Palace' designed to capture your thoughts at the speed of light. Instantly turns raw voice notes or text into structured insights using Gemini 2.0.",
            features: [
                "Smart Voice Capture: Hands-free recording with AI transcription.",
                "Deep Dive AI: One-click strategic expansion & roadmaps.",
                "AI Refinement: Polishes titles, summaries, and action items.",
                "Local-First Privacy: Data stays in browser storage (Vault Management).",
                "Power User Shortcuts: Keyboard-driven workflow for speed."
            ],
            tags: ["Vite + React", "TypeScript", "Google Gemini 2.0", "Tailwind CSS", "Framer Motion"],
            color: "from-indigo-500 to-violet-500"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Innovative solutions leveraging AI to solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/50 flex flex-col">
                            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                            <div className="p-8 relative z-10 flex-grow">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
                                    {project.description}
                                </p>

                                {project.features && (
                                    <ul className="mb-6 space-y-2 text-slate-400 text-sm">
                                        {project.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start">
                                                <span className="text-cyan-500 mr-2">▹</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-semibold px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Glow Effect */}
                            <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
