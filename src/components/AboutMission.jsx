// AboutMission.jsx
'use client';
import Image from 'next/image';
// import { motion } from 'framer-motion';

const AboutMission = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto">
          {/* Text Content - Left side with proper spacing */}
          <div className="lg:w-1/2 w-full lg:pl-4">
            <p className="text-cyan-500 uppercase font-bold tracking-wider mb-4">
              OUR MISSION
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12">
              <span className="block mb-1">Change lives.</span>
              <span className="block">Change the world.</span>
            </h1>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Purpose</h2>
              <p className="text-gray-700 mb-5">
                Our purpose is to change lives by delivering and increasing access to 
                exceptional care. We are determined to build the best children's health
                organization in the world.
              </p>
              <p className="text-gray-700">
                We will do this by creating an unparalleled environment where the best
                people want to grow.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                We will build the best children's health organization in the world,
                providing integrated care that meets the needs of children and families
                exactly where they are.
              </p>
            </div>
            
           
          </div>
          
          {/* Image - Right side with rounded corners */}
          <div className="lg:w-1/2 w-full md:mt-10">
            <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/children-playing.webp" 
                alt="Children playing together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;