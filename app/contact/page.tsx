'use client'; // needed — we use useState here

import { useState } from 'react';

// Form field type
type FormData = {
  name: string;
  email: string;
  message: string;
};

// Status type
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  // Form state — like Angular FormGroup values
  const [form, setForm] = useState<FormData>({
    name: '', email: '', message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Generic change handler — updates any field by name
  // Angular equivalent: patchValue({ [field]: value })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit handler — calls our API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-500">Have a project in mind? Let's talk.</p>
      </div>

      {/* Success message */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
          ❌ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange} required
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange} required
            placeholder="you@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message" name="message" rows={5}
            value={form.message} onChange={handleChange} required
            placeholder="Hi, I'd like to discuss a remote opportunity..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message →'}
        </button>

      </form>
    </div>
  );
}