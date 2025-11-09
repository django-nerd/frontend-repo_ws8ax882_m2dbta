import React from 'react';
import Section from './Section';
import { Users, Layers, RefreshCcw, Database, Brain, Rocket } from 'lucide-react';

export default function ContentSections() {
  return (
    <div>
      {/* Actors */}
      <Section id="actors" title="Actors" icon={<Users size={18} />}>        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Student (Disposer-equivalent)</h3>
            <p className="mt-2 text-slate-600">
              Registers with <span className="font-mono">@vit.edu</span> email (e.g., <span className="font-mono">name.surname123@vit.edu</span>), submits complaints, uploads images, tracks status (<span className="font-mono">Pending → In Progress → Resolved</span>), and chats with the AI assistant.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Admin/Faculty (Collector-equivalent)</h3>
            <p className="mt-2 text-slate-600">
              Registers with <span className="font-mono">@vit.edu</span> (no numbers). Accesses dashboard sorted by urgency, filters complaints, identifies duplicates, and updates statuses.
            </p>
          </div>
        </div>
      </Section>

      {/* Core User Flows */}
      <Section id="flows" title="Core User Flows" icon={<Layers size={18} />}>        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Register / Login</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>Validates domain, auto-assigns role based on email pattern, hashes passwords with <span className="font-mono">Bcrypt</span>.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Student Flow</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>Login → See personal dashboard (<span className="font-mono">Hash Map</span> lookup by <span className="font-mono">student_id</span>)</li>
              <li>Chat with AI chatbot (session history saved)</li>
              <li>Submit complaint (Title, Description, Image → sent to <span className="font-mono">Queue</span>)</li>
              <li>Track complaint status</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Admin Flow</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>Login → View Admin Dashboard</li>
              <li>See Top 5 Urgent Complaints (<span className="font-mono">Priority Queue</span>)</li>
              <li>Filter by status (Actionable, Resolved, Duplicates)</li>
              <li>Identify duplicates (Graph visualization)</li>
              <li>Hover complaint title → Tooltip for full description</li>
              <li>Update status (“Resolved”)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Lifecycle */}
      <Section id="lifecycle" title="Lifecycle: The Asynchronous Technical Flow" icon={<RefreshCcw size={18} />}>        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Submission (Flask)</h3>
            <p className="mt-2 text-slate-600">Student submits complaint → Task added to <span className="font-mono">Redis</span> Queue → Immediate redirect.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Processing (Celery Worker)</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>Generates fingerprint hash → checks <span className="font-mono">Hash Set</span> (O(1))</li>
              <li>AI model (.pkl) predicts priority score</li>
              <li>Updates <span className="font-mono">PostgreSQL</span> database</li>
              <li>Links duplicates in Graph structure</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-medium text-slate-900">Admin View</h3>
            <p className="mt-2 text-slate-600">Dashboard retrieves sorted complaints using PostgreSQL’s B+ Tree index (O(log n)).</p>
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section id="tech" title="Core Technologies & Libraries" icon={<Database size={18} />}>        
        <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Library</th>
                <th className="px-4 py-3 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                ['Flask', 'Core web framework'],
                ['PostgreSQL', 'Persistent database with B+ Tree indexing'],
                ['Celery', 'Task worker for async AI processing'],
                ['Redis', 'High-speed FIFO message broker'],
                ['scikit-learn / joblib', 'Trains and loads AI models (.pkl files)'],
                ['google-genai', 'Connects Gemini AI chatbot'],
                ['Flask-Login / Bcrypt', 'Authentication and password security'],
                ['python-dotenv', 'Loads secure environment variables'],
              ].map(([lib, purpose]) => (
                <tr key={lib}>
                  <td className="px-4 py-3 font-mono text-slate-900">{lib}</td>
                  <td className="px-4 py-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Data Structures */}
      <Section id="ds" title="Data Structure (DS) Implementation Deep Dive" icon={<Brain size={18} />}>        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ['Hash Map', 'O(1) lookups (login, dashboard, status updates)'],
            ['Priority Queue', 'Admin triage sorted by AI priority'],
            ['Hash Set', 'Detects duplicates via fingerprint hash'],
            ['Graph', 'Links duplicate complaints for visualization'],
            ['Queue (FIFO)', 'Redis-based Celery task management'],
            ['Tree', 'Category hierarchy (e.g., Academics → Exams)'],
          ].map(([title, desc]) => (
            <details key={title} className="group rounded-lg border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-slate-900">{title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{desc}</p>
                </div>
                <span className="ml-4 mt-1 text-slate-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-5 pb-5">
                <div className="text-sm text-slate-600">
                  <span className="font-mono">{title}</span> integrates into the system as described above, supporting performance and clarity in the admin triage experience.
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Future Scope */}
      <Section id="future" title="Future Scope" icon={<Rocket size={18} />}>        
        <ul className="space-y-3 text-slate-700">
          <li className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
            Semantic Duplicates: Upgrade <span className="font-mono">Hash Set</span> → <span className="font-mono">K-D Tree</span> / Vector Embedding
          </li>
          <li className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
            Chatbot Integration: Real-time complaint lookup by ID
          </li>
          <li className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
            Cloud Deployment: AWS S3 for file storage + Full cloud hosting
          </li>
        </ul>
      </Section>
    </div>
  );
}
