import CarePartnerComponent from "@/components/CarePartnerComponent";
import FAQSection from "@/components/Faq";
import LocationHero from "@/components/LocationHero";
import LocationMayur from "@/components/LocationMayur";


export const metadata = {
    title: 'Location & Contact | Mayur Child Care Center - Ajmer',
    description: 'Find our pediatric clinic location in Ajmer, contact details, and directions to Mayur Child Care Center with Dr. Mayur Kumar Goyal.',
    keywords: [
      'pediatric clinic location Ajmer',
      'Mayur Child Care Center address',
      'child doctor in Ajmer',
      'Dr. Mayur Kumar Goyal clinic',
      'newborn specialist near me',
      'child healthcare center location',
      'best pediatrician in Ajmer',
      'clinic directions',
      'contact pediatrician',
      'hospital location map'
    ],
    openGraph: {
      title: 'Clinic Location | Mayur Child Care Center - Ajmer',
      description: 'Visit our pediatric clinic in Ajmer for expert child healthcare services. Find directions, contact information, and clinic hours.',
      images: [
        {
          url: '/images/clinic-location.jpg',
          width: 800,
          height: 600,
          alt: 'Mayur Child Care Center Location in Ajmer',
        },
      ],
      type: 'website',
      url: 'https://www.drmayurkumargoyal.com/locations',
      siteName: 'Mayur Child Care Center',
    },
    alternates: {
      canonical: 'https://www.drmayurkumargoyal.com/locations',
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
      title: 'Clinic Location | Mayur Child Care Center - Ajmer',
      description: 'Find our pediatric clinic location in Ajmer for expert child healthcare services',
      images: ['/images/clinic-location.jpg'],
    },
    other: {
      'application-name': 'Mayur Child Care Center',
      'author': 'Dr. Mayur Kumar Goyal',
      'generator': 'Next.js',
      'theme-color': '#ffffff',
    },
  };

  
export default function Location() {
    return (
<>
<div className="bg-white">
<LocationHero/>
<hr className="text-[#1018281f]"/>
<LocationMayur/>
<hr className="text-[#1018281f]"/>
<FAQSection/>
<hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
</div>
</>
    );

}