import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Asma Portfolio';
const description = ''; // Set description to an empty string to avoid unwanted text

export const metadata: Metadata = {
  title,
  description, // This will ensure no text is displayed below the title
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
    description, // Ensure description is empty for Open Graph as well
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
    description, // Ensure description is empty for Twitter as well
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as string}</title> {/* Type assertion added here */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="creator" content={metadata.creator} />
        <meta name="theme-color" content={metadata.themeColor[0].color} media={metadata.themeColor[0].media} />
        <meta name="theme-color" content={metadata.themeColor[1].color} media={metadata.themeColor[1].media} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:image" content={metadata.twitter.images} />

        {/* Icons */}
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />

        {googleAnalyticsId && (
          <>
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
          </>
        )}
      </head>
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
