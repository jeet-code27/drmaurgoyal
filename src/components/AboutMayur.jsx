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
        Our goal is to create
          <span className="relative mx-2">
            <span className="relative bg-purple-200 rounded-xl z-10">  a better future   </span>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-purple-200 opacity-60 z-0 rounded-sm"></span>
          </span> 
          by 
          <span className="relative mx-2">
            <span className="relative z-10 bg-purple-200 rounded-xl"> improving children's health </span>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-purple-200 opacity-60 z-0 rounded-sm"></span>
          </span> 
          and lives.
        </h2>
        
        {/* Description with improved readability and spacing */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-justify">
        We provide complete and caring medical support for children of all ages. At Mayur Child Care Center, our team listens to each child’s needs and offers personalized treatment with love and respect. We help every child grow up healthy, confident, and happy. Dr. Mayur Kumar Goyal is known as one of the <b> best pediatric doctors in Ajmer</b>, trusted by many families for expert care. Whether it’s regular checkups or special treatments, we are here to give your child the best care in <b>Ajmer’s child healthcare.</b>
        </p>
      </div>
    </section>
  );
}