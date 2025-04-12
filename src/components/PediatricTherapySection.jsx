import Image from 'next/image'

const PediatricTherapySection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden relative">
      {/* SVG Background Element */}
      <div className="absolute top-2/5 -right-64 opacity-30 pointer-events-none">
        <svg width="1190" height="381" viewBox="0 0 1190 311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 213.749C217.5 284.895 741.344 412.557 911.844 99.5572C999.304 -60.9999 1145.5 13.0001 1179.5 182" stroke="url(#paint0_linear_215_16960)" strokeWidth="80"></path>
          <defs>
            <linearGradient id="paint0_linear_215_16960" x1="1554" y1="-43.1433" x2="4" y2="-43.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FECE53" stopOpacity="0"></stop>
              <stop offset="0.493158" stopColor="#F4B647"></stop>
              <stop offset="1" stopColor="#F1D4E5" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-medium tracking-wide uppercase text-sm">
            PEDIATRIC THERAPY
          </h3>
        </div>
        
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text content */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The children who we serve are at the center of everything we do.
            </h1>
            <p className="text-gray-600 mb-10 text-lg">
              We provide comprehensive, coordinated, interdisciplinary, pediatric care and therapy services, 
              focused on addressing the unique needs of every child.
            </p>
            
            {/* Features list */}
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Child-Centered:</span>
                  <span className="text-gray-600"> Personalized and coordinated care, designed around your child's unique goals and needs.</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Evidence-based and Comprehensive:</span>
                  <span className="text-gray-600"> Backed by science, and delivered by interdisciplinary experts—all under one roof.</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Relationship-Driven:</span>
                  <span className="text-gray-600"> Deep collaboration and partnership drives exceptional outcomes for children and a better experience for their families.</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Image container */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative">
              {/* Circular image */}
              <div className="rounded-full overflow-hidden relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <Image 
                  src="/images/pediatric-therapy.webp"
                  alt="Children receiving pediatric therapy" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PediatricTherapySection