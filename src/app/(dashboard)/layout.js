import { Inter } from 'next/font/google';
import '../globals.css';
import AuthProvider from '@/components/dashboard/auth/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Dashboard | Forwardin',
  description: 'An app by ADS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
