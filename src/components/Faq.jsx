'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 py-6"
    >
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-teal-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6 pb-4 text-gray-600 text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqListRef, faqListInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqData = [
    {
      question: "Who does Mayur Child Care Center serve?",
      answer: "Mayur Child Care Center serves children from 6 weeks to 5 years of age. We provide care for infants, toddlers, and preschoolers in a nurturing and educational environment tailored to each developmental stage."
    },
    {
      question: "How can I get started with Mayur Child Care Center?",
      answer: "Getting started is easy! First, schedule a tour of our facility by contacting us. Next, complete our registration forms. Finally, we'll work with you to create a care plan tailored to your child's needs and schedule a start date."
    },
    {
      question: "What are your operating hours?",
      answer: "Mayur Child Care Center operates Monday through Saturday in two sessions: 9:00 AM to 10:00 AM and 5:00 PM to 8:00 PM. On Sundays, we're open from 11:00 AM to 1:00 PM."
    },    
    {
      question: "What is your staff-to-child ratio?",
      answer: "We maintain low staff-to-child ratios to ensure quality care and individual attention. Our ratios are: 1:4 for infants, 1:6 for toddlers, and 1:8 for preschoolers, which exceeds many state requirements."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "Safety is our top priority at Mayur Child Care Center. We have secure entry systems, regular safety drills, comprehensive background checks for all staff, CPR and First Aid certified teachers, camera monitoring systems, and strict pick-up authorization policies to ensure your child's safety."
    },
    {
      question: "Do you provide progress reports for children?",
      answer: "Yes, we provide regular progress reports and conduct parent-teacher conferences twice a year. We use developmental assessment tools to track each child's progress and share these insights with parents. Daily updates are also provided through our parent communication app."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-16">
        <motion.div 
          ref={headerRef}
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={headerInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/faq.svg" 
            alt="Mayur Child Care Center" 
            className="h-32 w-auto object-contain"
          />
        </motion.div>

        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          If you're looking for more information about <br className="hidden sm:block" />
          <span className="text-teal-600">Mayur Child Care Center</span>, we'd love to help.
        </motion.h2>
        
        <motion.p 
          ref={descRef}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={descInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          If your question isn't listed here, feel free to contact us directly for any specific inquiries or additional information.
        </motion.p>
      </div>

      <div 
        ref={faqListRef}
        className="divide-y divide-gray-200 mt-10"
      >
        {faqData.map((item, index) => (
          <FAQItem 
            key={index}
            index={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;