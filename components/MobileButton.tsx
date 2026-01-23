"use client";

import Link from "next/link";

interface MobileButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MobileButton({ href, children, className = "" }: MobileButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-4 py-3 border-2 border-white bg-black text-white font-medium transition-all duration-300 text-center text-sm sm:text-base hover:bg-white hover:text-black active:bg-white active:text-black rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}
