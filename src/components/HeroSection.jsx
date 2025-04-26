// HeroSection.jsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants - simplified and refined
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  // Subtle bottom to top animation for text elements
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  // Gentle animation for image
  const imageVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.3
      }
    }
  };

  // Simple hover effect for buttons
  const buttonHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  };

  // Simplified decorative elements
  const decorativeCircleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.7
      }
    }
  };

  // Simplified bottom shapes animation
  const bottomShapesVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.8
      }
    }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 pr-0 lg:pr-8 z-10"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              Mayur Child Care Center is changing lives, one child at a time
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={itemVariants}
            >
              Mayur Child Care Center in Ajmer is dedicated to children's health. We've been helping kids for more than 7 years. <span className="font-bold">Our goal is to give every child the care they need to grow healthy and happy.</span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <Link href="/bookconsultation" passHref>
                <motion.button 
                  className="bg-gradient-to-r from-[#00bcd4] via-[#9c27b0] to-[#e50087] hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link href="/services" passHref>
                <motion.button 
                  className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-full text-lg border border-gray-300 transition-colors"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Our services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Image with refined animation */}
          <motion.div 
            className="w-full lg:w-1/2 mt-12 lg:mt-0 relative"
            variants={imageVariants}
          >
            <motion.div 
              className="relative w-full aspect-[4/3]"
              whileHover={{ 
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 } 
              }}
            >
              <Image
                src="/images/hero.webp" 
                alt="Child playing with blocks during therapy session"
                fill
                className="rounded-3xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            {/* Decorative elements with subtle animation */}
            <motion.div 
              className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 z-0"
              variants={decorativeCircleVariants}
            >
              <div className="w-64 h-64 bg-teal-500 rounded-full opacity-20"></div>
            </motion.div>
            <motion.div 
              className="absolute top-1/2 left-0 transform -translate-x-1/2 z-0"
              variants={decorativeCircleVariants}
            >
              <div className="w-40 h-40 bg-yellow-400 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative shapes with subtle animation */}
      <motion.div 
        className="absolute bottom-0 right-0 z-0 hidden sm:block"
        variants={bottomShapesVariants}
        initial="hidden"
        animate="visible"
      >
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200L150 0L300 200H0Z" fill="#38B2AC" fillOpacity="0.2" />
          <path d="M50 200L200 0L350 200H50Z" fill="#F6AD55" fillOpacity="0.2" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;