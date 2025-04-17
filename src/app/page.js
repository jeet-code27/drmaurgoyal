import AboutMayur from "@/components/AboutMayur";
import DoctorProfileSection from "@/components/DoctorProfileSection";
import FAQSection from "@/components/Faq";

import HeroSection from "@/components/HeroSection";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import PatientReviews from "@/components/PatientReviews";
import PediatricTherapySection from "@/components/PediatricTherapySection";

  export const metadata = {
  title: 'Best Pediatrician in Ajmer | Newborn Specialist | Dr. Mayur Kumar Goyal',
  description: 'Dr. Mayur Kumar Goyal is a leading pediatrician and neonatologist in Ajmer providing expert child care at Mayur Child Care Center. Specializing in newborn care, vaccinations, and pediatric health services.',
  keywords: [
    'best pediatrician in Ajmer',
    'child specialist doctor',
    'newborn baby doctor',
    'Dr. Mayur Kumar Goyal',
    'Mayur Child Care Center',
    'neonatal specialist Ajmer',
    'child vaccination center',
    'pediatric clinic Ajmer',
    'premature baby care',
    'best child doctor near me'
  ],
  openGraph: {
    title: 'Top Pediatrician in Ajmer | Dr. Mayur Kumar Goyal',
    description: 'Expert pediatric and neonatal care at Mayur Child Care Center in Ajmer. Specializing in newborn care, immunizations, and child health services.',
    images: [
      {
        url: '/images/dr-mayur-profile.jpg',
        width: 800,
        height: 600,
        alt: 'Dr. Mayur Kumar Goyal - Pediatrician Ajmer',
      },
    ],
    type: 'website',
    url: 'https://www.drmayurkumargoyal.com',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pediatrician in Ajmer | Dr. Mayur Kumar Goyal',
    description: 'Specialized pediatric and neonatal care at Mayur Child Care Center, Ajmer',
    images: ['/images/doctor.png'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    'author': 'Dr. Mayur Kumar Goyal',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function Home() {
  return (
  <div className="">
    <HeroSection/>
    <hr className="text-[#1018281f]"/>
    <AboutMayur/>
    <hr className="text-[#1018281f]"/>
    <PediatricTherapySection/>
    <hr className="text-[#1018281f]"/>
    <DoctorProfileSection/>
    <hr className="text-[#1018281f]"/>
    <PatientReviews/>
    <hr className="text-[#1018281f]"/>
    <ImageGallerySlider/>
    <hr className="text-[#1018281f]"/>
    <FAQSection/>
  </div>
  );
}
