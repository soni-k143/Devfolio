// No 'use client' needed — this is a Server Component
// It renders on the server. No hooks, no interactivity needed here.
import Link from 'next/link';
import { info } from '../data/info';

export default function Hero() {
  return (
    <section className="py-20">

{/*       // Available badge — only shows if info.available is true */}
      {info.available && (
        <span className="inline-block bg-indigo-50 text-indigo-600 text-sm px-4 py-1 rounded-full mb-6">
          👋 Available for remote work
        </span>
      )}

{/*       // Heading */}
      <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
        Hi, I'm {info.name}<br />
        <span className="text-indigo-600">{info.title}</span>
      </h1>

{/*       // Bio */}
      <p className="text-lg text-gray-500 max-w-xl mb-8">
        {info.bio}
      </p>

{/*       // CTA Buttons */}
      <div className="flex gap-4 mb-12">
        <Link
          href="/projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/blog"
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
        >
          Read Blog
        </Link>
      </div>

{/*       // Skills strip */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {info.skills.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}