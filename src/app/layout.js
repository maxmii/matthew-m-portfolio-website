import './globals.css';
import MainNavigation from '@/components/layouts/MainNavigation';

export const metadata = {
  title: 'Iridium Recruitment Ltd',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainNavigation />
          {children}
      </body>
    </html>
  );
}
