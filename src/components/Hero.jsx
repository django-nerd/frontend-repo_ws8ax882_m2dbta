import React from 'react';
import { GraduationCap, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="summary" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-blue-100">
              <GraduationCap size={16} />
              Technical Project Documentation
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              Student Complaint & Grievance Management System
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                (Flask + AI + Celery + PostgreSQL)
              </span>
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              A secure, multi-user platform for students to submit grievances and for administrators to triage, analyze, and resolve them efficiently — powered by asynchronous AI processing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-mono">Flask</span>
              <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-mono">Celery</span>
              <span className="px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-mono">PostgreSQL</span>
              <span className="px-3 py-1 rounded-md bg-indigo-600 text-white text-xs font-mono">Redis</span>
              <span className="px-3 py-1 rounded-md bg-teal-600 text-white text-xs font-mono">Gemini AI</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700 mb-2">
                <FileText size={16} className="text-blue-600" />
                <span className="text-sm font-medium">Project Summary</span>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  This project is a secure, multi-user Student Complaint and Grievance System designed for an academic institution. It provides a dedicated portal for students to submit issues and an intelligent dashboard for administrators to efficiently manage and resolve them.
                </p>
                <p>
                  The system is architected around asynchronous task processing to handle computationally expensive tasks (like AI analysis) without compromising user experience.
                </p>
                <div className="pt-2">
                  <div className="text-slate-900 font-medium">Student Features:</div>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Register (with domain validation)</li>
                    <li>Login</li>
                    <li>Submit grievances (with images)</li>
                    <li>Track status updates</li>
                    <li>Interact with live AI chatbot</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <div className="text-slate-900 font-medium">Admin Features:</div>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Prioritized dashboard</li>
                    <li>Filter by status/urgency</li>
                    <li>Identify duplicates (Graph logic)</li>
                    <li>Update complaint status</li>
                    <li>Contact students directly</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 -z-10 bg-gradient-to-r from-blue-200/40 to-sky-200/40 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
