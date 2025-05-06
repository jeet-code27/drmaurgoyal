// app/layout.js
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import './globals.css';
import FloatingContact from '@/components/FloatingContact';
import { Metadata } from 'next';

// Define the default metadata as a variable export
export const metadata = {
  metadataBase: new URL('https://drmayurkumargoyal.com'),
  title: {
    template: '%s',
    default: 'Mayur Child Care Center'
  },
  description: 'Best pediatrician in Ajmer, Rajasthan. Dr. Mayur Kumar Goyal specializes in child healthcare, newborn care, and vaccination services.',
  keywords: [
    'pediatrician in Ajmer',
    'child healthcare',
    'newborn care',
    'vaccination services',
    'best pediatrician in Ajmer',
    'child doctor in Ajmer',
    'Dr. Mayur Kumar Goyal',
    'Mayur Child Care Center',
    'Ajmer pediatric clinic',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/* <FloatingContact/> */}
        <Footer />
      </body>
    </html>
  );
}