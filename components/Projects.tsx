
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Reimagined",
    description: "A luxury shopping experience with motion design.",
    image: "https://picsum.photos/seed/p1/800/600",
    tags: ["React", "Three.js", "Tailwind"]
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Data visualization for enterprise marketing teams.",
    image: "https://picsum.photos/seed/p2/800/600",
    tags: ["Next.js", "D3", "Typescript"]
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Modern UI for LLM interactions and file analysis.",
    image: "https://picsum.photos/seed/p3/800/600",
    tags: ["Gemini API", "Framer Motion"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group glass rounded-3xl overflow-hidden cursor-pointer transition-all hover:border-white/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5 text-indigo-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
