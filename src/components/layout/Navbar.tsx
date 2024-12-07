"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-navbar py-4 mb-6">
      <nav className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="text-4xl text-text mb-4 font-utopia no-underline font-normal hover:text-secondary"
          >
            Kevin Rutledge
          </Link>

          <ul className="flex gap-8 m-0 p-0 text-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-crimson font-bold no-underline
                    ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-text hover:text-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
