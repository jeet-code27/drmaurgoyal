'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-6">
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
    </div>
  );
};

const FAQSection = () => {
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
      answer: "Mayur Child Care Center is open Monday through Friday from 7:00 AM to 6:30 PM. We're closed on major holidays, and our full holiday schedule is provided during enrollment."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a play-based, developmentally appropriate curriculum that incorporates elements from multiple educational philosophies including Montessori, Reggio Emilia, and traditional approaches. Our program focuses on the whole child, nurturing social, emotional, physical, and cognitive development."
    },
    {
      question: "What meals do you provide?",
      answer: "We provide nutritious breakfast, lunch, and two snacks daily. Our meals are prepared fresh on-site and meet all nutritional guidelines for growing children. We accommodate food allergies and special dietary requirements with proper documentation."
    },
    {
      question: "What is your staff-to-child ratio?",
      answer: "We maintain low staff-to-child ratios to ensure quality care and individual attention. Our ratios are: 1:4 for infants, 1:6 for toddlers, and 1:8 for preschoolers, which exceeds many state requirements."
    },
    {
      question: "Do you offer part-time enrollment options?",
      answer: "Yes, we offer both full-time and part-time enrollment options to accommodate diverse family needs. Part-time options include 2-day or 3-day schedules, subject to availability."
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
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
     
          <img 
            src="/images/faq.svg" 
            alt="Mayur Child Care Center" 
            className="h-32 w-auto object-contain"
          />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          If you're looking for more information about <br className="hidden sm:block" />
          <span className="text-teal-600">Mayur Child Care Center</span>, we'd love to help.
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          If your question isn't listed here, feel free to contact us directly for any specific inquiries or additional information.
        </motion.p>
      </div>

      <motion.div 
        className="divide-y divide-gray-200 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;