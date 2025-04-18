import CarePartnerComponent from "@/components/CarePartnerComponent";
import FAQSection from "@/components/Faq";

export const metadata = {
  title: 'Pediatric FAQs | Common Questions | Dr. Mayur Kumar Goyal - Ajmer',
  description: 'Get answers to common questions about child health, vaccinations, newborn care, and pediatric services at Mayur Child Care Center, Ajmer.',
  keywords: [
    'pediatric FAQs',
    'child doctor questions',
    'newborn care queries',
    'vaccination doubts',
    'child health questions',
    'pediatrician FAQ Ajmer',
    'Dr. Mayur Kumar FAQs',
    'baby health concerns',
    'frequently asked questions',
    'child specialist advice'
  ],
  openGraph: {
    title: 'Pediatric FAQs | Mayur Child Care Center - Ajmer',
    description: 'Expert answers to common questions about child health, vaccinations, and pediatric care from Dr. Mayur Kumar Goyal.',
    images: [
      {
        url: '/images/faq-pediatric.jpg',
        width: 800,
        height: 600,
        alt: 'Pediatric FAQs - Mayur Child Care Center',
      },
    ],
    type: 'website',
    url: 'https://www.drmayurkumargoyal.com/faq',
    siteName: 'Mayur Child Care Center',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/faq',
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
    title: 'Pediatric FAQs | Mayur Child Care Center - Ajmer',
    description: 'Get expert answers to your child health questions from Dr. Mayur Kumar Goyal',
    images: ['/images/faq-pediatric.jpg'],
  },
  other: {
    'application-name': 'Mayur Child Care Center',
    'author': 'Dr. Mayur Kumar Goyal',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function FAQ() {
  return(
  <>
  <div className="bg-white">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800  text-center pt-10 mb-5 ">Frequently Asked Questions</h1>
  <FAQSection />

  <hr className="text-[#1018281f]"/>
      <CarePartnerComponent/>
      </div>
  </>
  );
}
