    import Image from 'next/image'

    const DoctorProfileSection = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fcf9ff] overflow-hidden relative">
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
                MEET OUR DOCTOR
            </h3>
            </div>
            
            {/* Main content container */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Doctor Image Container */}
            <div className="w-full lg:w-2/5 relative order-2 lg:order-1">
                <div className="relative">
                {/* Doctor image with rounded border */}
                <div className="rounded-lg overflow-hidden relative w-full h-96 md:h-[500px] mx-auto shadow-lg border-4 border-white">
                    <Image 
                    src="/images/second.jpg"
                    alt="Dr. Mayur Kumar Goyal - Pediatrician" 
                    fill
                    style={{ objectFit: 'fit' }}
                    className="rounded-lg"
                    priority
                    />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white px-6 py-4 rounded-full shadow-lg">
                    <p className="font-bold text-2xl">7+ Years</p>
                    <p className="text-sm">Experience</p>
                </div>
                </div>
            </div>
            
            {/* Text content */}
            <div className="w-full lg:w-3/5 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dr. Mayur Kumar Goyal
                </h2>
                <h1 className="text-xl text-teal-600 font-medium mb-6">
                Pediatrician & Neonatologist
                </h1>
                
                <div className="space-y-4 text-gray-600">
                <p>
                    Dr. Mayur Kumar Goyal is an upcoming Pediatrician and one of the best child specialist (pediatrician) doctor in Ajmer and has been practicing since 2017. He practices at Mayur Child Care Center located near Lions Club, Vaishali Nagar, Ajmer.
                </p>
                
                <p>
                    He completed his MBBS from BVP Pune in 2012, MD (Pediatrics) from NIMS Jaipur in 2016 and Fellowship in Neonatology (IAP) from Neo Clinic Children Hospital Jaipur in 2018 and was ranked 2nd pan India. His specialization lies in care and treatment of newborns, primarily those who are premature, underweight or otherwise in need of acute care.
                </p>
                
                <p>
                    Dr. Mayur worked in various facilities like JLN Medical College- Ajmer, Neo Clinic Children Hospital, Fortis Hospital and Santokba Durlabhji Memorial Hospital. He is also a member of IAP, IAP NEOCHAP, PGHTN and IMA communities. He has good experience in advanced Neonatal care and managed cases of Neonatal emergencies.
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    About Mayur Child Care Center
                    </h3>
                    <p>
                    Mayur Child Care Center was established in 2018. The Care Center offers Immunization, Regular Check-ups, 24 hours admission facilities, day care, pharmacy and laboratory investigations Neonatal Care, Counselling and OPD Consultation for its patients. Mayur Child Care Center also offers online Personal appointment booking facility. Mayur Child Care Center offers 24 hours pediatric health care facilities.
                    </p>
                </div>
                
                {/* Credentials list */}
                <div className="pt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">MBBS - BVP Pune</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">MD Pediatrics - NIMS Jaipur</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Fellowship in Neonatology (IAP)</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">Member of IAP, IAP NEOCHAP</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default DoctorProfileSection;