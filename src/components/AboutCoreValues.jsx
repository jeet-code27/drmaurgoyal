import Image from 'next/image';

const AboutCoreValues = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our core values</h1>
      
      <p className="text-gray-700 mb-12 max-w-3xl">
        Through our community of more than 350 expert clinicians, we serve thousands of
        children and families who need our help. Since our founding, we've helped thousands of
        children achieve their full potential by putting them at the center of everything we do.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
        {/* Left Side - Image and Values */}
        <div className="hidden lg:block lg:mt-16">
          <div className="relative rounded-4xl overflow-hidden w-full h-full">
            <Image 
              src="/images/child-climbing.webp" 
              alt="Child climbing with therapist help" 
              width={500} 
              height={600}
              className="w-full h-[60%] rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Right Side - Values Content */}
        <div className="flex flex-col gap-10">
          {/* Results for our Patients */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Results for our Patients</h2>
              <ul className="space-y-2 w-full md:w-2/3">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are passionate about driving results for our patients—our patients are our WHY.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We measure our success by the progress of our patients.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are building something bigger than all of us.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Excellence */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Excellence</h2>
              <ul className="space-y-2 w-full md:w-2/3">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We do what we say we're going to do.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We hold ourselves to the highest standards.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We hold each other accountable.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We expect consistency of effort.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We work hard, with urgency.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We take pride in our rigor and discipline.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Continuous Improvement */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Continuous Improvement</h2>
              <ul className="space-y-2 w-full md:w-2/3">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are determined to get better every day.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are innovators and big dreamers.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We embrace change because it is the path to growth.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe there is always more to be learned.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are all stewards of the organization, and we strive to build and maintain the best, most efficient, systems and operations.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Integrity */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Integrity</h2>
              <ul className="space-y-2 w-full md:w-2/3">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We will not compromise our integrity.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We hold ourselves to the highest ethical standards.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are courageous: we speak with candor, ask for help, make tough calls, and raise questions.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We create an environment where excellent people can do excellent work.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* One Team */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">One Team</h2>
              <ul className="space-y-2 w-full md:w-2/3">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are woven together with our patients, families, providers, and community.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We value collaboration, humility, and compassion.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are optimists: we believe in the ability of our team to accomplish great things.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are empowered, and we look for ways to empower those around us.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We know that life is too short not to play, laugh, and find joy every day.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Mobile Image (only shows on mobile) */}
        <div className="block lg:hidden order-first mb-8">
          <div className="relative rounded-lg overflow-hidden w-full">
            <Image 
              src="/images/child-climbing.webp" 
              alt="Child climbing with therapist help" 
              width={500} 
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;