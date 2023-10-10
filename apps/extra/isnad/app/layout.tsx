import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import LeftSideBar from './components/leftSidebar/LeftSideBar';

export const metadata = {
  title: 'Isnad | Hadith Collection',
  description:
    'A collection of Hadiths from Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Sunan Ibn Majah, Sunan al-Tirmidhi, and Sunan al-Nasa’i.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>

        <LeftSideBar>{children}</LeftSideBar>
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
