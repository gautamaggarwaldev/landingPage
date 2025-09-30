// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Retreat Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-white shadow-sm py-8 px-6 border-b font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            {/* Logo Image - Increased size */}

            <Link href="/" className="text-3xl">
              <div className="w-40 h-16 mr-4 relative">
                <Image
                  src="/logobg.png" // Replace with your logo path
                  alt="Traveon Logo"
                  width={160}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Navigation Links */}
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Book a Retreat Button */}
            <Link
              href="/book"
              className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium text-lg"
            >
              Book a Retreat
            </Link>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <button
            className="md:hidden p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Mobile Menu - Only shown when hamburger is clicked */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-200 bg-white font-sans">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 text-center font-medium text-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Retreat
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
