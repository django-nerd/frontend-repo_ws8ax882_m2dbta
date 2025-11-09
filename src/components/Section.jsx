import React from 'react';

export default function Section({ id, icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white shadow-sm">
            {icon}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {title}
            <span className="block h-1 w-24 mt-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full" />
          </h2>
        </div>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
