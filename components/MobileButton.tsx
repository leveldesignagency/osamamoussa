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
      className={`inline-block px-4 py-3 border-2 border-black bg-white text-black font-medium transition-all duration-300 text-center text-sm sm:text-base hover:bg-black hover:text-white active:bg-black active:text-white ${className}`}
    >
      {children}
    </Link>
  );
}
