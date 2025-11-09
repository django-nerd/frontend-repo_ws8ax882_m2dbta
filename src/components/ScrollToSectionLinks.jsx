import React from 'react';

export default function ScrollToSectionLinks() {
  const sections = [
    { id: 'actors', label: 'Actors' },
    { id: 'flows', label: 'User Flows' },
    { id: 'lifecycle', label: 'Lifecycle' },
    { id: 'tech', label: 'Tech' },
    { id: 'ds', label: 'DS' },
    { id: 'future', label: 'Future' },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-4 mb-2">
      <div className="flex flex-wrap gap-2 text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => handleClick(e, s.id)}
            className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
