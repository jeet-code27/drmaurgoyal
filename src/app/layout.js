import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import './globals.css';
import FloatingContact from '@/components/FloatingContact';

export const metadata = {
  title: 'Mayur Child Care Center',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <FloatingContact/>
        <Footer />
      </body>
    </html>
  );
}
