import Image from 'next/image';
import Link from 'next/link';

const PediatricServices = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="uppercase text-gray-700 text-sm font-medium tracking-wider mb-4">
            SERVICES
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Exceptional therapeutic services for exceptional children
          </h1>
          <p className="text-gray-600 mb-8">
            Woven Care provides center-based pediatric therapy services including
            Applied Behavior Analysis (ABA), Pediatric Speech Therapy, Pediatric
            Occupational Therapy (OT), and Pediatric Physical Therapy (PT) at over
            10 convenient Colorado locations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/request-visit"
              className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
            >
              Request a visit
            </Link>
            <Link 
              href="/locations"
              className="px-8 py-3 bg-white text-gray-800 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              View locations
            </Link>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-72 md:h-96 lg:h-full">
            <Image
              src="/images/therapy-session.webp" 
              alt="Therapist working with a child on developmental activities"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PediatricServices;