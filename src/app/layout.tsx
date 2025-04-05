import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Asma Portfolio';
const description = 'A portfolio website showcasing the work and skills of Asma Siddique, a Frontend Developer specializing in React and Next.js.'; // Set description to avoid unwanted text

export const metadata: Metadata = {
  title,
  description, // This ensures the description is displayed correctly
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
  ],
  creator: 'Asma Siddique',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    title,
    description, // Ensure description is set for Open Graph
    siteName: title,
    images: [
      {
        url: '/images/open-graph-asma.PNG', // Ensure this path is correct
        width: 1200, // Add width and height for better performance
        height: 630,
        alt: 'Asma Siddique Portfolio Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description, // Ensure description is set for Twitter
    creator: '@asma9001', // Add your Twitter handle if available
    images: '/images/open-graph-asma.PNG',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
