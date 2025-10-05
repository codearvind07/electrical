import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import FloatingContact from '@/components/floating-contact';
import Footer from '@/components/footer';
import PopularLinks from '@/components/PopularLinks';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// Create a comprehensive keyword list
const keywords = [
  // Submersible Starter Panels
  'submersible starter panel', 'submersible pump control panel', 'submersible starter panel manufacturers', 
  'submersible starter panel price', 'submersible pump starter panel suppliers', 'submersible control panel box',
  
  // AC & DC Drives
  'ac drives for motors', 'dc drives for motors', 'ac dc drive manufacturers', 'ac drive price in India', 
  'dc motor speed control drives', 'industrial ac dc drives suppliers',
  
  // APFC Panels
  'apfc panel manufacturers', 'automatic power factor correction panel', 'apfc panel price', 
  'apfc panel suppliers in India', 'apfc control panel installation', 'low voltage apfc panel',
  
  // AMF Panels
  'amf panel manufacturers', 'automatic mains failure panel', 'amf control panel price', 
  'generator amf panel suppliers', 'amf panel wiring diagram', 'amf panel for dg set',
  
  // Fire Fighting Panel
  'fire fighting control panel', 'fire pump control panel manufacturers', 'fire fighting panel suppliers', 
  'fire hydrant pump control panel', 'fire sprinkler pump panel', 'fire fighting panel price in India',
  
  // Meter Box Panel
  'meter box panel manufacturers', 'electric meter box suppliers', 'meter distribution panel', 
  'single phase meter box panel', 'three phase meter box panel', 'meter box enclosure',
  
  // Synchronize Panel
  'synchronization panel manufacturers', 'dg synchronization panel suppliers', 'generator synchronize panel', 
  'motor control synchronize panel', 'auto synchronization panel price', 'electrical synchronize panel',
  
  // Distribution Panel
  'distribution panel board', 'electrical distribution panel manufacturers', 'distribution panel suppliers', 
  'main distribution board price', 'low voltage distribution panel', 'power distribution panel box',
  
  // Control Desks
  'control desk manufacturers', 'operator control desk panel', 'electrical control desk suppliers', 
  'motor control desk panel', 'customized control desk', 'industrial control desk system',
  
  // Bus Ducts
  'bus duct manufacturers', 'electrical bus duct suppliers', 'sandwich bus duct price', 
  'plug-in bus duct system', 'rising mains bus duct', 'low voltage bus duct',
  
  // Main LT Panel
  'lt panel manufacturers', 'main lt panel suppliers', 'low tension electrical panel', 
  'lt panel price in India', 'lt distribution panel board', 'main lt switchboard',
  
  // Cable Tray
  'cable tray manufacturers', 'perforated cable tray suppliers', 'cable tray price in India', 
  'gi cable tray manufacturers', 'ladder type cable tray', 'electrical cable tray system',
  
  // Local SEO variations (examples)
  'electrical panel manufacturers in Noida', 'electrical control panels suppliers in Delhi', 
  'industrial electrical panels price in India', 'electrical distribution panels installation'
];

export const metadata: Metadata = {
  title: 'DP Electricals - Industrial & Commercial Electrical Solutions | Noida',
  description: 'Leading electrical solutions provider since 2001. Specializing in industrial panels, automation, and electrical infrastructure across Noida and India.',
  keywords: keywords,
  authors: [{ name: 'DP Electricals' }],
  creator: 'DP Electricals',
  publisher: 'DP Electricals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dpelectrical.in'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'DP Electricals - Industrial & Commercial Electrical Solutions',
    description: 'Trusted electrical solutions provider since 2001. Industrial panels, automation, distribution boards, and electrical infrastructure across Noida and India.',
    url: 'https://dpelectrical.in',
    siteName: 'DP Electricals',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'DP Electricals Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DP Electricals - Industrial & Commercial Electrical Solutions',
    description: 'Trusted electrical solutions provider since 2001. Industrial panels, automation, distribution boards, and electrical infrastructure.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification - replace with your actual verification code
  verification: {
    google: 'eaafqH7up2bjYn66g90dS9xLaT4hHcjWbUrHM-gktec',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
       <meta name="google-site-verification" content="eaafqH7up2bjYn66g90dS9xLaT4hHcjWbUrHM-gktec" />
        
        {/* Structured Data Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DP Electricals",
              "url": "https://dpelectrical.in",
              "logo": "https://dpelectrical.in/logo.png",
              "description": "Leading electrical solutions provider since 2001. Specializing in industrial panels, automation, distribution boards, and electrical infrastructure across Noida and India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Industrial Area",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/dp-electricals",
                "https://twitter.com/dpelectricals"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DP Electricals",
              "url": "https://dpelectrical.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dpelectrical.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <GoogleAnalytics />
          <Navbar />
          <FloatingContact />
          <main>{children}</main>
          <PopularLinks />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}