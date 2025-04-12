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
  const dropdownRef = useRef(null);

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

  // Menu data structure - Services no longer has dropdownItems
  const menuItems = [
    {
      title: "Plan your visit",
      href: "/plan",
      dropdownItems: [
        { title: "What to expect", description: "Learn about our approach to pediatric therapy", href: "/plan/expect" },
        { title: "Find a location", description: "Easily locate our nearest therapy center", href: "/plan/locations" },
        { title: "Parent stories", description: "Read stories from families who have partnered with us", href: "/plan/stories" }
      ]
    },
    {
      title: "Services",
      href: "/services",
      // No dropdown items for Services
    },
    {
      title: "Resources",
      href: "/resources",
      dropdownItems: [
        { title: "Blog", description: "Articles and information for parents", href: "/blog" },
        { title: "FAQ", description: "Answers to common questions", href: "/faq" }
      ]
    },
    {
      title: "About",
      href: "/about",
      dropdownItems: [
        { title: "Our Story", description: "Learn about our history and mission", href: "/about/story" },
        { title: "Team", description: "Meet our dedicated therapists", href: "/about/team" },
        { title: "Careers", description: "Join our growing team", href: "/about/careers" }
      ]
    }
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative">
      {/* Responsive header */}
      <nav ref={navbarRef} className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg w-full sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 md:h-24">
            {/* Responsive logo */}
            <div className="flex-shrink-0 flex items-center space-x-2 md:space-x-3">
              <Link href="/" className="flex items-center">
                <div className="h-14 w-14 md:h-20 md:w-20 relative">
                  {/* Using Next.js Image component with responsive sizing */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/mayurchildcare.png" 
                      alt="Mayur Child Care Center Logo" 
                      fill
                      sizes="(max-width: 768px) 56px, 80px"
                      style={{objectFit: "fill"}}
                      priority
                    />
                  </div>
                </div>
                <div className="ml-2 md:ml-4">
                  <h1 className="text-md md:text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    Mayur Child Care Center
                  </h1>
                  {/* Added a tagline - responsive size */}
                  <p className="text-xs md:text-sm text-gray-600">Nurturing young minds with care</p>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdownItems ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                      aria-expanded={activeDropdown === index}
                    >
                      {item.title}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} 
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none hover:bg-blue-50 rounded-full"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                href="/locations" 
                className="px-5 py-2.5 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Locations
              </Link>
              <Link 
                href="/request" 
                className="px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 flex items-center shadow-md hover:shadow-lg transition-all duration-200"
              >
                Request a visit
                <ChevronRight className="h-4 w-4 ml-2" />
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
        
        {/* Mobile Menu - Improved for better mobile experience */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="px-3 pt-2 pb-6 space-y-1 max-h-[70vh] overflow-y-auto">
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
                          {activeDropdown === index && item.dropdownItems && (
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
                                  className="block py-3 border-b border-gray-100 last:border-0 hover:bg-blue-50 px-3 rounded-md my-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <h3 className="text-sm font-medium text-gray-900 hover:text-blue-600">{dropdownItem.title}</h3>
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
                        className="w-full flex justify-between items-center px-3 py-3 text-gray-800 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile action buttons */}
                <div className="mt-4 flex flex-col space-y-3 px-2">
                  <Link
                    href="/locations"
                    className="px-4 py-2.5 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-50 text-center font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                  <Link
                    href="/request"
                    className="px-4 py-2.5 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center shadow-md font-medium"
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

      {/* Desktop Dropdown Menus - Better positioning and styling */}
      <AnimatePresence>
        {activeDropdown !== null && menuItems[activeDropdown]?.dropdownItems && (
          <motion.div
            ref={dropdownRef}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:block absolute left-0 right-0 z-40 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden mx-4 lg:mx-12"
          >
            <div className="max-w-7xl mx-auto mt-1 w-full">
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {menuItems[activeDropdown]?.dropdownItems.map((dropdownItem, idx) => (
                  <Link 
                    key={idx} 
                    href={dropdownItem.href}
                    className="p-5 rounded-lg transition-colors duration-150 hover:bg-blue-50 group border border-transparent hover:border-blue-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">{dropdownItem.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700">{dropdownItem.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;