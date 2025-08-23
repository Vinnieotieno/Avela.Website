import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avela - Instant Salary Advances to M-Pesa",
  description:
    "Get instant access to your earned wages directly to your M-Pesa wallet. Avela provides advance salary services for Kenyan employees with transparent fees and no CRB listing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />

          {/* Tawk.to Script */}
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
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
        </ThemeProvider>
      </body>
    </html>
  );
}
