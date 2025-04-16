"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const CarePartnerComponent = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        className="max-w-4xl w-full flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Icon Section */}
        <motion.div 
          className="mb-4" 
          variants={itemVariants}
        >
          <div className="relative w-full h-42">
          
            <img 
              src="/images/service.svg" 
              alt="Care Partner Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-blue-500 font-bold text-sm tracking-wider uppercase mb-6"
          variants={itemVariants}
        >
          YOU ARE THE PRIORITY
        </motion.p>

        {/* Main Heading - Carefully aligned to match the image */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            From the very first phone call with<br />
            a care partner, through every<br />
            milestone, we are in this together.
          </h1>
        </motion.div>

        {/* CTA Button - Styled to match the image */}
        <motion.div variants={itemVariants}>
          <Link href="/bookconsultation">
          <motion.button
            className="px-12 py-4 rounded-full bg-white cursor-pointer text-gray-900 border border-gray-200 font-medium text-base hover:shadow-md transition-shadow"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Book Consultation
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CarePartnerComponent;