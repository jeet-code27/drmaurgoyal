'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMayur() {
  // Controls for staggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Trigger animations when the section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for different animation elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const highlightVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 0.6,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-[#fcf9ff]"
    >
      {/* Logo container with fade up animation */}
      <motion.div 
        className="mb-8"
        variants={itemVariants}
      >
        <motion.img 
          src="/images/logo.png" 
          alt="Mayur Child Care Logo" 
          className="h-40 w-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      
      {/* Tagline with slide in animation */}
      <div className="w-full max-w-5xl">
        <motion.p 
          variants={itemVariants}
          className="text-gray-700 uppercase tracking-widest font-bold mb-8 text-sm md:text-base"
        >
          MAYUR CHILD CARE EXISTS TO CHANGE LIVES
        </motion.p>
        
        {/* Main vision statement with animated highlights */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10"
        >
          Our goal is to create
          <span className="relative mx-2">
            <span className="relative bg-purple-200 rounded-xl z-10">  a better future   </span>
            <motion.span 
              className="absolute bottom-1 left-0 h-4 bg-purple-200 z-0 rounded-sm"
              variants={highlightVariants}
            ></motion.span>
          </span> 
          by 
          <span className="relative mx-2">
            <span className="relative z-10 bg-purple-200 rounded-xl"> improving children's health </span>
            <motion.span 
              className="absolute bottom-1 left-0 h-4 bg-purple-200 z-0 rounded-sm"
              variants={highlightVariants}
            ></motion.span>
          </span> 
          children's lives.
        </motion.h2>
        
        {/* Description with fade in animation */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-justify"
        >
          We provide complete and caring medical support for children of all ages. At Mayur Child Care Center, our team listens to each child's needs and offers personalized treatment with love and respect. We help every child grow up healthy, confident, and happy. Dr. Mayur Kumar Goyal is known as one of the <b>best pediatric doctors in Ajmer</b>, trusted by many families for expert care. Whether it's regular checkups or special treatments, we are here to give your child the best care in <b>Ajmer's child healthcare.</b>
        </motion.p>
      </div>
    </motion.section>
  );
}