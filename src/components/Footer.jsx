import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2025 Student Grievance System | Built with <span className="font-mono">Flask</span>, <span className="font-mono">Celery</span>, <span className="font-mono">PostgreSQL</span>, and <span className="font-mono">Gemini AI</span>.</p>
        <a href="#summary" className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs" onClick={(e)=>{e.preventDefault(); document.getElementById('summary')?.scrollIntoView({behavior:'smooth'});}}>Back to top</a>
      </div>
    </footer>
  );
}
