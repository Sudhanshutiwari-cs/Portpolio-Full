import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close sidebar on scroll (mobile only)
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isOpen]);

  // Prevent background scroll when sidebar is open (mobile only)
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen, isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between'>
        <div className='text-xl font-bold'>SUDHANSHU</div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-9 text-lightgray text-2xl'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vault">Vault</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <Button />
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className='flex items-center gap-4'>
            <Button />
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          {/* Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
            />
          )}

          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-end p-4'>
              <button onClick={toggleSidebar} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className='flex flex-col gap-6 p-6 text-xl'>
              <Link to="/" onClick={toggleSidebar}>Home</Link>
              <Link to="/about" onClick={toggleSidebar}>About</Link>
              <Link to="/vault" onClick={toggleSidebar}>Vault</Link>
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;