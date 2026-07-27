"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clover } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <Clover className="h-6 w-6 text-green-600" />
          <span>Clover Technologies</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#">Products</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Company</Link>
          <Link href="#">Contact</Link>
        </nav>

        <Button>Request Demo</Button>
      </div>
    </header>
  );
}