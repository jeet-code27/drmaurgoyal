import CarePartnerComponent from "@/components/CarePartnerComponent";
import PediatricServices from "@/components/PediatricServices";
import ServiceBoxes from "@/components/ServiceBox";

export const metadata = {
    title: 'Pediatric Services in Ajmer | Dr. Mayur Kumar Goyal',
    description: 'Comprehensive pediatric services at Mayur Child Care Center, Ajmer. Newborn care, vaccinations, growth monitoring, and specialized child healthcare services.',
    keywords: [
      'pediatric services Ajmer',
      'child healthcare services',
      'newborn care specialist',
      'baby vaccination center',
      'child growth monitoring',
      'pediatric consultation Ajmer',
      'Dr. Mayur Kumar services',
      'child specialist treatments',
      'neonatal care services',
      'pediatric clinic facilities'
    ],
    openGraph: {
      title: 'Pediatric Healthcare Services | Mayur Child Care Center Ajmer',
      description: 'Explore our complete range of pediatric services including newborn care, immunizations, growth monitoring, and specialized child treatments.',
      images: [
        {
          url: '/images/services-pediatric.jpg',
          width: 800,
          height: 600,
          alt: 'Pediatric Services at Mayur Child Care Center',
        },
      ],
      type: 'website',
      url: 'https://www.drmayurkumargoyal.com/services',
      siteName: 'Mayur Child Care Center',
    },
    alternates: {
      canonical: 'https://www.drmayurkumargoyal.com/services',
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
      title: 'Pediatric Services in Ajmer | Mayur Child Care Center',
      description: 'Complete child healthcare services including newborn care, vaccinations, and specialized treatments',
      images: ['/images/services-pediatric.jpg'],
    },
    other: {
      'application-name': 'Mayur Child Care Center',
      'author': 'Dr. Mayur Kumar Goyal',
      'generator': 'Next.js',
      'theme-color': '#ffffff',
    },
  };

export default function Services() {
    return (
        <>
            <PediatricServices />
           <ServiceBoxes/>
           <CarePartnerComponent/>
        </>
    );
}
