import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import MainNavigation from '@/components/layouts/MainNavigation';

export const metadata = {
  title: 'Iridium Recruitment Ltd',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
