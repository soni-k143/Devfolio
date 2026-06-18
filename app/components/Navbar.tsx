'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes'; // ← add this
import { useEffect, useState } from 'react'; // ← add this

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch on the icon
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          DevFolio
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-indigo-600 dark:text-indigo-400 underline underline-offset-4'
                      : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-base"
            aria-label="Toggle theme"
          >
            {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}