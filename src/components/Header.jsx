// components/Navbar.js
"use client"; 
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  
  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">Jennifer Tarleton</Link>
        </div>
         {/* Links on the right */}
         <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="hover:text-accent">About</Link>
            <Link href="/#projects" className="hover:text-accent">Projects</Link>
            <Link href="/#blog" className="hover:text-accent">Blog</Link>
            <Link href="/#contact" className="hover:text-accent">Contact</Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
        {/* Mobile Menu Links */}
        {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/#about" className="hover:text-accent">About</Link>
          <Link href="/#projects" className="hover:text-accent">Projects</Link>
          <Link href="/#blog" className="hover:text-accent">Blog</Link>
          <Link href="/#contact" className="hover:text-accent">Contact</Link>
        </div>
      )}
     
    </nav>
  );
};

export default Header;





  

 