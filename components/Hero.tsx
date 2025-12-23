
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-4xl">
        <h2 className="text-indigo-400 font-semibold tracking-widest mb-4 uppercase">
          Welcome to my universe
        </h2>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
          I build <span className="text-gradient">digital</span> experiences.
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          I'm Alex, a designer and developer specializing in creating functional, 
          beautiful interfaces and interactive web applications using cutting-edge technology.
        </p>
        <div className="flex gap-4">
          <a 
            href="#projects" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="glass hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="mt-20 flex gap-12 text-slate-500">
        <div>
          <span className="block text-2xl font-bold text-white">5+</span>
          <span className="text-xs uppercase tracking-widest">Years Exp.</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-white">100+</span>
          <span className="text-xs uppercase tracking-widest">Projects</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-white">40+</span>
          <span className="text-xs uppercase tracking-widest">Happy Clients</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
