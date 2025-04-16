import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172321] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-green-500/10 -translate-x-12 -translate-y-12"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-teal-500/10 translate-x-16"></div>
      <div className="absolute bottom-0 left-1/3 w-16 h-16 rounded-full bg-emerald-500/10 -translate-y-8"></div>
      <div className="absolute top-1/4 left-1/2 w-40 h-40 rounded-full bg-green-400/5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-teal-400/5"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="mb-5">
              <Link href="/" className="inline-block">
                <Image 
                  src="/images/logo.png" 
                  alt="Mayur Child Care Center Logo" 
                  width={160} 
                  height={60}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-center md:text-left mb-6 leading-relaxed">
              Nurturing minds, fostering growth, and creating a safe haven for your children to learn, play, and thrive in our green sanctuary of learning.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90 p-2 rounded-full transition-all duration-300 shadow-lg shadow-green-900/30" aria-label="Facebook">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="https://instagram.com" className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 p-2 rounded-full transition-all duration-300 shadow-lg shadow-green-900/30" aria-label="Instagram">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="https://youtube.com" className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:opacity-90 p-2 rounded-full transition-all duration-300 shadow-lg shadow-green-900/30" aria-label="YouTube">
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links with cute icons */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 text-center md:text-left relative">
              <span className="relative z-10 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Explore</span>
              <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-green-400 to-teal-500 hidden md:block"></span>
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-green-400 group-hover:scale-125 transition-transform duration-300">•</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-green-400 group-hover:scale-125 transition-transform duration-300">•</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Services
                </Link>
              </li>
             
             
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Blogs
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Location
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="/bookconsultation" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center justify-center md:justify-start group">
                  <span className="mr-2 text-emerald-400 group-hover:scale-125 transition-transform duration-300">•</span> Book Consultation
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Information with fun styling */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 text-center md:text-left relative">
              <span className="relative z-10 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Get in Touch</span>
              <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-500 hidden md:block"></span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-full mr-3 shadow-md">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white">B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar,</p>
                  <p className="text-gray-300">Ajmer,  Rajasthan,  305001</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-full mr-3 shadow-md">
                  <Phone size={18} className="text-white" />
                </div>
                <p className="text-white">8955966990</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-2 rounded-full mr-3 shadow-md">
                  <Mail size={18} className="text-white" />
                </div>
                <p className="text-white">mayurchildrenhospital@gmail.com</p>
              </div>
              <div className="mt-6 text-center md:text-left p-4 rounded-lg bg-[#1d2e2b] backdrop-blur-sm">
                <div className="mb-2 font-medium text-white bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Hours of Operation:</div>
                <p className="text-gray-200">Monday - Saturday: <span className="text-white"></span></p>
                <p className="text-gray-200">Schedule-1: <span className="text-white">9:00 AM - 10:00 AM</span></p>
                <p className="text-gray-200">Schedule-2: <span className="text-white">5:00 PM - 8:00 PM</span></p>
               <p className="text-gray-200">Sunday: <span className="text-white">11:00 AM - 1:00 PM</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with playful design */}
        <div className="border-t border-green-900/30 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent font-medium">Mayur Child Care Center</span>. All rights reserved.
            </div>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</Link>
              <span className="text-green-600">•</span>
              <Link href="/terms" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;