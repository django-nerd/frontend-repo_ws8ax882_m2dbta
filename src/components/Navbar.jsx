import React, { useEffect, useMemo, useState } from 'react';
import { FileText, Users, Layers, RefreshCcw, GitBranch, Database, Rocket } from 'lucide-react';

const sections = [
  { id: 'summary', label: 'Summary', Icon: FileText },
  { id: 'actors', label: 'Actors', Icon: Users },
  { id: 'flows', label: 'User Flows', Icon: Layers },
  { id: 'lifecycle', label: 'Lifecycle', Icon: RefreshCcw },
  { id: 'tech', label: 'Tech', Icon: Database },
  { id: 'ds', label: 'Data Structures', Icon: GitBranch },
  { id: 'future', label: 'Future', Icon: Rocket },
];

export default function Navbar() {
  const [active, setActive] = useState('summary');

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = useMemo(() => sections, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#summary" onClick={(e)=>handleClick(e,'summary')} className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white shadow-sm">SG</span>
            <span className="hidden sm:block">Student Grievance System</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`group px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  active === id
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} className={active === id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                {label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <a
              href="#summary"
              onClick={(e) => handleClick(e, 'summary')}
              className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white"
            >
              Navigate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
