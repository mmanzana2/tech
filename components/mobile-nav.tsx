"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white p-6 shadow-lg dark:bg-gray-900 animate-slide-in-right">
            <div className="flex flex-col space-y-6">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="#services" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link 
                  href="#about" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link 
                  href="#contact" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </nav>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button className="w-full" onClick={toggleMenu}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 