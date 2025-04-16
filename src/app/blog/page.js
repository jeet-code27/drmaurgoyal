import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Baby, Brain, Stethoscope } from 'lucide-react';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: 'Pediatric Health Blogs by Dr. Mayur Kumar Goyal',
  description: 'Expert articles on pediatrics, neonatal care, and child health by Dr. Mayur Kumar Goyal',
  openGraph: {
    title: 'Pediatric Health Blogs by Dr. Mayur Kumar Goyal',
    description: 'Expert articles on pediatrics, neonatal care, and child health by Dr. Mayur Kumar Goyal',
    type: 'website',
    url: 'https://drmayurkumargoyal.com/blog',
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-semibold mb-4">
                  Child Health Insights
                </div>
                <h1 className="text-4xl pb-2 md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-6">
                  Pediatric Health Blog by Dr. Mayur Kumar Goyal
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                  Expert articles on pediatrics, neonatal care, and raising healthy children from one of Ajmer's leading pediatricians.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                    <Baby className="h-4 w-4 mr-1" />
                    Neonatal Care
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm">
                    <Brain className="h-4 w-4 mr-1" />
                    Child Development
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                    <Stethoscope className="h-4 w-4 mr-1" />
                    Pediatric Advice
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <div className="aspect-square w-full h-full relative">
                  <Image 
                    src="/images/second.jpg" 
                    alt="Dr. Mayur Kumar Goyal - Pediatrician & Neonatologist in Ajmer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Doctor credentials */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 md:p-8">
              <div className="md:flex justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Dr. Mayur Kumar Goyal</h3>
                  <p className="text-blue-100">Pediatrician & Neonatologist</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Mayur Child Care Center, Ajmer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src={blog.image || '/images/placeholder.jpg'} 
                    alt={blog.alt || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={blog.id <= 3}
                  />
                  {blog.tags && blog.tags[0] && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full">
                      {blog.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-blue-600">{blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-5 line-clamp-3">
                    {blog.excerpt || blog.content.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags && blog.tags.slice(1).map((tag, index) => (
                      <span key={index} className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Doctor Info Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">About Dr. Mayur Kumar Goyal</h3>
                <p className="mb-6">One of the best child specialists (pediatricians) in Ajmer with expertise in neonatal care and pediatric emergencies.</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Mayur Child Care Center</h4>
                      <p className="text-blue-100">Near Lions Club, Vaishali Nagar, Ajmer</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Education</h4>
                      <p className="text-blue-100">MBBS, MD (Pediatrics)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Experience</h4>
                      <p className="text-blue-100">Practicing since 2017</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized In</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Baby className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Neonatal Care</h4>
                      <p className="text-gray-600">Specializes in care of premature and underweight newborns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <Stethoscope className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pediatric Emergencies</h4>
                      <p className="text-gray-600">Expert in handling critical pediatric and neonatal emergencies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Child Development</h4>
                      <p className="text-gray-600">Guidance on growth milestones and developmental issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Vaccination</h4>
                      <p className="text-gray-600">Complete immunization services for children of all ages</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">IAP</span>
                  <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full">IAP NEOCHAP</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">PGHTN</span>
                  <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full">IMA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}