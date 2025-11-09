import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
