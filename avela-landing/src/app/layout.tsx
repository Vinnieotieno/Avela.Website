import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { organizationStructuredData } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avela - Kenya's #1 Earned Wage Access Platform | Instant Salary to M-Pesa",
  description:
    "Get instant access to your earned salary via M-Pesa with Avela. Kenya's leading EWA platform serving 50,000+ workers. 0% interest, no loans, instant transfers. Join today!",
  keywords: "Avela, salary advance Kenya, earned wage access, M-Pesa salary advance, instant salary Kenya, payroll advance, financial wellness Kenya, employee benefits, EWA platform Kenya, Kenyan fintech",
  authors: [{ name: "Avela Technologies" }],
  creator: "Avela Team",
  publisher: "Avela Technologies Ltd",
  robots: "index, follow",
  alternates: {
    canonical: "https://avela.co.ke"
  },
  openGraph: {
    title: "Avela - Kenya's #1 Earned Wage Access Platform",
    description: "Get instant access to your earned salary via M-Pesa. 0% interest, no loans, serving 50,000+ Kenyan workers.",
    url: "https://avela.co.ke",
    siteName: "Avela - Kenya's Leading EWA Platform",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "https://avela.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avela - Kenya's Leading Earned Wage Access Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Avela - Kenya's #1 Earned Wage Access Platform",
    description: "Get instant access to your earned salary via M-Pesa. 0% interest, no loans, serving 50,000+ Kenyan workers.",
    images: ["https://avela.co.ke/og-image.jpg"],
    creator: "@avelafinan79261",
    site: "@avelafinan79261"
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  other: {
    "geo.region": "KE",
    "geo.country": "Kenya",
    "geo.placename": "Nairobi, Kenya",
    "language": "en-KE",
    "target-country": "KE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0081CC" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//x.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Additional Meta Tags for Kenya */}
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />
        <meta name="DC.title" content="Avela - Kenya's Leading Earned Wage Access Platform" />
        <meta name="DC.creator" content="Avela Technologies" />
        <meta name="DC.subject" content="Earned Wage Access, Financial Inclusion, Kenya Fintech" />
        <meta name="DC.description" content="Instant salary access via M-Pesa for Kenyan workers" />
        <meta name="DC.publisher" content="Avela Technologies Ltd" />
        <meta name="DC.contributor" content="Avela Team" />
        <meta name="DC.date" content="2025" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://avela.co.ke" />
        <meta name="DC.language" content="en-KE" />
        <meta name="DC.coverage" content="Kenya" />
        <meta name="DC.rights" content="© 2025 Avela Technologies Ltd" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <AccessibilityProvider>
            {/* Skip Links for Keyboard Navigation */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <a href="#navigation" className="skip-link">
              Skip to navigation
            </a>

            {/* Screen Reader Announcements */}
            <div id="announcements" aria-live="polite" aria-atomic="true" className="sr-only"></div>

            <Header />
            <main id="main-content" className="min-h-screen" role="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />

            {/* Cookie Consent Banner */}
            <CookieConsent />
          </AccessibilityProvider>

          {/* Tawk.to Script - Configured to show only icon */}
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

              // Configure Tawk.to to show only the icon without messages
              Tawk_API.onLoad = function(){
                // Hide the chat widget initially
                Tawk_API.hideWidget();

                // Show only the minimized chat icon
                Tawk_API.showWidget();

                // Disable automatic messages/greetings
                Tawk_API.setAttributes({
                  'name': '',
                  'email': ''
                });
              };

              // Prevent automatic chat opening
              Tawk_API.onChatMaximized = function(){
                // This ensures the chat only opens when user clicks
              };

              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68a60a6aa4fc79192a7cd389/1j349hcsn';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
