import { Inter, Lexend_Deca as lexendDeca } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/landingPage/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lexend = lexendDeca({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata = {
  title: 'Forwardin',
  description: 'An app by ADS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lexend.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
