"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Company", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/images/clover-logo.png"
            alt="Clover Technologies Logo"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Clover Technologies
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-green-600">
              Enterprise Software
            </p>
          </div>

        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Button className="rounded-xl bg-green-600 px-6 hover:bg-green-700">
          Request Demo
        </Button>

      </div>
    </header>
  );
}