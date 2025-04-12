// HeroSection.jsx
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Mayur Child Care Center is changing lives, one child at a time
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Mayur Child Care Center is an established leader in pediatric therapy, 
              serving Ajmer for more than 15 years, and dedicated to 
              celebrating and empowering children at all stages of 
              development. <span className="font-bold">We're on a mission to change the world by 
              helping every child achieve their full potential.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/request-visit" passHref>
                <button 
                  className="bg-gradient-to-r from-[#00bcd4] via-[#9c27b0] to-[#e50087] hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors"
                >
                  Request a visit
                </button>
              </Link>
              <Link href="/services" passHref>
                <button 
                  className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-full text-lg border border-gray-300 transition-colors"
                >
                  Our services
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/logo.png" 
                alt="Child playing with blocks during therapy session"
                fill
                className="rounded-3xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 z-0">
              <div className="w-64 h-64 bg-teal-500 rounded-full opacity-20"></div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 z-0">
              <div className="w-40 h-40 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative shapes */}
      <div className="absolute bottom-0 right-0 z-0 hidden sm:block">
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200L150 0L300 200H0Z" fill="#38B2AC" fillOpacity="0.2" />
          <path d="M50 200L200 0L350 200H50Z" fill="#F6AD55" fillOpacity="0.2" />
        </svg>
      </div>
    
  
    </section>
  );
};

export default HeroSection;