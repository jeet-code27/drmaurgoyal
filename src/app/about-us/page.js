import AboutCoreValues from "@/components/AboutCoreValues";
import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AboutMission from "@/components/AboutMission";
import CarePartnerComponent from "@/components/CarePartnerComponent";

export const metadata = {
  title: 'About Us | Mayur Child Care Center | Pediatric Care in Ajmer',
  description: 'Learn about Dr. Mayur Kumar Goyal and Mayur Child Care Center - our mission, core values, and commitment to providing exceptional pediatric care in Ajmer.',
  keywords: [
    'about Mayur Child Care',
    'pediatrician in Ajmer',
    'Dr. Mayur Kumar Goyal profile',
    'child care center Ajmer',
    'about our pediatric clinic',
    'mission and values',
    'newborn care specialist',
    'child healthcare philosophy',
    'pediatric services Ajmer',
    'about our child specialist'
  ],
  openGraph: {
    title: 'About Mayur Child Care Center | Pediatric Services in Ajmer',
    description: 'Discover our mission, values, and the expertise behind Mayur Child Care Center - dedicated to providing the best pediatric care in Ajmer.',
    images: [
      {
        url: '/images/about-clinic.jpg',
        width: 800,
        height: 600,
        alt: 'Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://www.drmayurkumargoyal.com/about-us',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/about-us',
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
    title: 'About Mayur Child Care Center | Pediatric Care Ajmer',
    description: 'Our mission and values for providing exceptional pediatric and neonatal care in Ajmer',
    images: ['/images/about-clinic.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    'author': 'Dr. Mayur Kumar Goyal',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <hr className="text-[#1018281f]"/>
      <AboutDoctor/>
      <hr className="text-[#1018281f]"/>
      <AboutMission />
      <hr className="text-[#1018281f]"/>
      <AboutCoreValues/>
      <hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
    </>
  );
}
