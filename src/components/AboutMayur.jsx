import React from 'react';

export default function AboutMayur() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-[#fcf9ff]">
      {/* Logo container - made bigger and more prominent */}
      <div className="mb-8">
        {/* Replace with your logo path */}
        <img 
          src="/images/logo.png" 
          alt="Mayur Child Care Logo" 
          className="h-40 w-auto" 
        />
      </div>
      
      {/* Tagline with improved spacing */}
      <div className="w-full max-w-5xl">
        <p className="text-gray-700 uppercase tracking-widest font-bold mb-8 text-sm md:text-base">
          MAYUR CHILD CARE EXISTS TO CHANGE LIVES
        </p>
        
        {/* Main vision statement with enhanced highlight styling */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
          Our vision is to create 
          <span className="relative mx-2">
            <span className="relative bg-purple-200 rounded-xl z-10"> generational change </span>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-purple-200 opacity-60 z-0 rounded-sm"></span>
          </span> 
          by 
          <span className="relative mx-2">
            <span className="relative z-10 bg-purple-200 rounded-xl"> transforming pediatric healthcare </span>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-purple-200 opacity-60 z-0 rounded-sm"></span>
          </span> 
          for children and families.
        </h2>
        
        {/* Description with improved readability and spacing */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          We provide comprehensive, coordinated, interdisciplinary, pediatric care and therapy services, focused on addressing
          the unique needs of every child. We meet every child where they are, treat every child as an individual, and celebrate
          every child's unique gifts and magic while helping them develop tools that will serve them throughout their lives.
        </p>
      </div>
    </section>
  );
}