"use client";
import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LocationMayur() {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Create refs for different sections to animate them when they come into view
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  return (
    <div className="max-w-7xl mt-14 mb-14 mx-auto p-4 font-sans bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left section */}
        <div className="flex-1">
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-16 w-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <img 
                src="/images/mayurchildcarecenter.webp" 
                alt="Hospital Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">
                <span>Rajasthan</span>
                <span className="mx-2">›</span>
                <span>Ajmer</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Mayur Children Hospital</h2>
            </div>
          </motion.div>

          <motion.div 
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={staggerItems}
            className="space-y-4 mt-8"
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-2">
              <MapPin className="text-teal-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <span className="font-medium text-gray-700">Address:</span>
                <p className="text-gray-600">B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer, Rajasthan, 305001</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <Mail className="text-teal-500 flex-shrink-0" size={20} />
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <a href="mailto:mayurchildrenhospital@gmail.com" className="text-gray-600 hover:text-teal-600">mayurchildrenhospital@gmail.com</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <Phone className="text-teal-500 flex-shrink-0" size={20} />
              <div>
                <span className="font-medium text-gray-700">Phone:</span>
                <a href="tel:8955966990" className="text-gray-600 hover:text-teal-600">8955966990</a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            ref={buttonsRef}
            initial="hidden"
            animate={buttonsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/bookconsultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-md px-6 py-3 font-medium transition-colors"
              >
                Book Consultation
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 rounded-md px-6 py-3 font-medium hover:bg-gray-50 transition-colors text-gray-800"
              >
                View Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right section - Map */}
        <motion.div 
          ref={mapRef}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
          className="flex-1 min-h-64 bg-gray-100 rounded-4xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.764464066343!2d74.62175467520922!3d26.49552757689837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7eb66262797%3A0x1933e5b43759fd8c!2zTWF5dXIgQ2hpbGQgQ2FyZSBDZW50ZXIgKOCkrOCkmuCljeCkmuCli-CkgiDgpJXgpL4g4KSF4KS44KWN4KSq4KSk4KS-4KSyKSAtIEJlc3QgQ2hpbGRyZW4gSG9zcGl0YWwgSW4gQWptZXI!5e0!3m2!1sen!2sin!4v1744626574417!5m2!1sen!2sin" 
            className="w-full h-96 rounded-4xl"
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        </motion.div>
      </div>
    </div>
  );
}