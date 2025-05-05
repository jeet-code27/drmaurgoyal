'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Menu data structure
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Resources",
      href: "/resources",
      dropdownItems: [
        { title: "Blog", description: "Articles and information for parents", href: "/blog" },
        { title: "FAQ", description: "Answers to common questions", href: "/faq" },
        { title: "Testimonials", description: "Stories of hope, healing, and happiness from our little patients and their parents", href: "/testimonials" },

      ]
    },
    {
      title: "Newborn Care",
      href: "/newborn-care",
    },
    {
      title: "About",
      href: "/about-us",
    }
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.15 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative">
      {/* Responsive header */}
      <nav ref={navbarRef} className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg w-full sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            {/* Logo - MODIFIED: increased size, removed gradient background, fixed image format issues */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-20 w-20 md:h-26 md:w-26 relative">
                  <Image 
                    src="/images/mayurchildcare.png" 
                    alt="Mayur Child Care Center Logo" 
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
                <div className="">
                  <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00bcd4] via-[#9c27b0] to-[#e50087] bg-clip-text text-transparent">
                    Mayur Child Care Center
                  </h2>

                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdownItems ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                      aria-expanded={activeDropdown === index}
                    >
                      {item.title}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-600' : ''}`} 
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === index && item.dropdownItems && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute z-40 bg-white shadow-lg rounded-lg border border-gray-100 w-64 mt-1 right-0"
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <Link 
                              key={idx} 
                              href={dropdownItem.href}
                              className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                              <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                href="/locations" 
                className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm"
              >
                Location
              </Link>
              <Link 
                href="/bookconsultation" 
                className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 flex items-center shadow-md hover:shadow-lg transition-all duration-200 text-sm"
              >
                Book Consultation
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="px-3 pt-2 pb-4 space-y-1 max-h-screen overflow-y-auto">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0">
                    {item.dropdownItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="w-full flex justify-between items-center px-3 py-3 text-gray-800 hover:bg-gray-50 rounded-md"
                        >
                          <span className="font-medium">{item.title}</span>
                          <ChevronDown 
                            className={`ml-1 h-5 w-5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-500' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="px-3 py-2 bg-gray-50 rounded-md mb-2"
                            >
                              {item.dropdownItems.map((dropdownItem, idx) => (
                                <Link 
                                  key={idx} 
                                  href={dropdownItem.href}
                                  className="block py-2 border-b border-gray-100 last:border-0 hover:bg-blue-50 px-3 rounded-md my-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <h3 className="text-sm font-medium text-gray-900">{dropdownItem.title}</h3>
                                  <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-gray-800 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile action buttons */}
                <div className="mt-3 flex flex-col space-y-2 px-2">
                  <Link
                    href="/locations"
                    className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 text-center font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                  <Link
                    href="/request"
                    className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 flex items-center justify-center shadow-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Request a visit
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;