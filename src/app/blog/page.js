
import fs from 'fs';
import path from 'path';
import ClientBlogPage from './ClientBlogPage.jsx';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: 'Pediatric Health Blogs by Dr. Mayur Kumar Goyal',
  description: 'Expert articles on pediatrics, neonatal care, and child health by Dr. Mayur Kumar Goyal - Pediatrician in Ajmer (Rajasthan) India',
  authors: [{ name: 'Dr. Mayur Kumar Goyal', url: 'https://drmayurkumargoyal.com' }],
  keywords: 'pediatrics, child health, neonatal care, pediatrician, Ajmer, Dr. Mayur Kumar Goyal',
  openGraph: {
    title: 'Pediatric Health Blogs by Dr. Mayur Kumar Goyal',
    description: 'Expert articles on pediatrics, neonatal care, and child health by Dr. Mayur Kumar Goyal',
    type: 'website',
    url: 'https://drmayurkumargoyal.com/blog',
  },
  alternates: {
    canonical: 'https://www.drmayurkumargoyal.com/blog',
  },
};

export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}