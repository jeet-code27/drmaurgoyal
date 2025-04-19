"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import ElfsightWidget from './ElfsightWidget';

const PatientReviews = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "January 15, 2025",
      comment: "Dr. Mayur Kumar Goyal is an exceptional pediatrician. His gentle approach with my newborn made all the difference during vaccinations. His expertise in neonatology is truly commendable.",
      procedure: "Newborn Vaccination"
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 5,
      date: "February 2, 2025",
      comment: "When my 3-year-old had high fever, Dr. Goyal's accurate diagnosis and treatment plan helped him recover quickly. His patience with children is remarkable.",
      procedure: "Pediatric Fever Treatment"
    },
    {
      id: 3,
      name: "Ankit Patel",
      rating: 5,
      date: "February 10, 2025",
      comment: "Dr. Mayur's care for my premature baby was outstanding. His knowledge as a neonatologist gave us confidence during those critical early weeks.",
      procedure: "Premature Baby Care"
    },
    {
      id: 4,
      name: "Neha Gupta",
      rating: 5,
      date: "January 28, 2025",
      comment: "Dr. Goyal took time to explain my child's growth milestones in detail. His friendly demeanor makes children comfortable during visits. Highly recommended pediatrician in Ajmer!",
      procedure: "Child Growth Monitoring"
    }
  ];

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <button
        className={`mx-1 transition-all duration-300 ${
          active 
            ? 'w-8 h-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full' 
            : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
        }`}
        onClick={() => onClick()}
      />
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-teal-500" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-teal-500" />
      </button>
    );
  };

  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16 relative bg-white">
      <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-black leading-tight font-playfair">
          Patient Reviews
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-3 md:mb-4"></div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-500 to-teal-300 inline-block text-transparent bg-clip-text leading-relaxed">
          Dr. Mayur Kumar Goyal
          <span className="block text-lg md:text-xl lg:text-2xl mt-1">M.B.B.S., M.D. (Pediatrics), Pediatrician & Neonatologist</span>
        </h3>
        
      <ElfsightWidget/>
      </div>

    </div>
  );
};

export default PatientReviews;