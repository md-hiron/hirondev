'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: '/#', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#case-study', label: 'Case study' },
    { href: '/#contact', label: 'Contact' },
  ];

  // Close menu on route hash change
  useEffect(() => {
    const handleHashChange = () => closeMenu();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#121417]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Hiron<span className='text-cyan-400'>Dev</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white text-sm md:text-base" >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-cyan-400 transition relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white z-[60] relative">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#121417] text-white z-[999] shadow-lg transform transition-transform duration-300 backdrop-blur-md ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={closeMenu} className="text-white">
            <X size={26} />
          </button>
        </div>
        <ul className="p-6 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block text-white hover:text-cyan-400 transition border-b border-white/10 pb-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}
    </header>
  );
}
