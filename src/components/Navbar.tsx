"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        <Link className="text-lg font-semibold text-zinc-950" href="/">
          Wanderlust Explorer
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-1">
          {navigationLinks.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href === "/experiences" && pathname.startsWith("/experiences/"));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-sm px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                  isActive
                    ? "font-medium text-emerald-800"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}