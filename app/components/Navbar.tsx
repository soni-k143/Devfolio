// 'use client' tells Next.js this component runs in the browser
// We need this because we'll use usePathname (a browser hook)
// Angular equivalent: every Angular component is "client" by default
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// TypeScript: define the shape of each nav link
type NavLink = {
  label: string;
  href: string;
};

// Our nav links array — we'll add pages as we build them
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  // usePathname gives us the current URL path
  // Angular equivalent: Router.url or ActivatedRoute
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

{/*         // Logo / Brand name */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          DevFolio
        </Link>

{/*         // Nav links */}
       <ul className="flex items-center gap-8 list-none m-0 p-0"> 
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-indigo-600 underline underline-offset-4'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}