import Image from 'next/image';

const AboutCoreValues = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our core values</h2>
      
      <p className="text-gray-700 mb-12 max-w-3xl text-justify">
      At our clinic, led by Dr. Mayur Kumar Goyal, we’re proud to offer compassionate, expert care that puts children first. Our values guide everything we do, ensuring your child receives the <b> best pediatric care in Ajmer.</b>
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
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We focus on real results that improve children's lives.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We track progress to make sure every child is thriving</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe in making a difference—together.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Excellence */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Excellence</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We do what we promise.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We hold ourselves and each other to high standards.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We give consistent effort, every single day.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We work with urgency and take pride in our work.</p>
                </li>
                {/* <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We work hard, with urgency.</p>
                </li> */}
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
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We think big and try new things.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We welcome change—it helps us grow.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We’re always learning and improving.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We keep making our systems and care better for our patients..</p>
                </li>
                {/* <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are all stewards of the organization, and we strive to build and maintain the best, most efficient, systems and operations.</p>
                </li> */}
              </ul>
            </div>
          </div>
          
          {/* Integrity */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">Integrity</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We never compromise on honesty and ethics.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We speak openly, ask questions, and support each other.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We build a safe and respectful space for families and staff.</p>
                </li>
                {/* <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We create an environment where excellent people can do excellent work.</p>
                </li> */}
              </ul>
            </div>
          </div>
          
          {/* One Team */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold text-gray-900 w-full md:w-1/3">One Team</h2>
              <ul className="space-y-2 w-full md:w-2/3 text-gray-700">
                {/* <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We are woven together with our patients, families, providers, and community.</p>
                </li> */}
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We support each other with kindness and humility.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We believe teamwork helps us achieve great things.</p>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We empower each other and share the joy of helping children grow and thrive.</p>
                </li>
                {/* <li className="flex items-start">
                  <div className="text-green-600 mr-2 mt-1 flex-shrink-0">✓</div>
                  <p>We know that life is too short not to play, laugh, and find joy every day.</p>
                </li> */}
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