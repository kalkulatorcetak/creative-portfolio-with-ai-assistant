
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0c]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-gradient">ALEX.</div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Alex Designer. All rights reserved. Built with ❤️ and Gemini AI.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
