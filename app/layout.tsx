import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://angx.id.vn/'),
  title: {
    default: "Portfolio | Angx",
    template: "%s | Angx Portfolio"
  },
  description: "Angx Portfolio - Web/Mobile Developer ",
  keywords: ["Next.js", "React", "Portfolio", "Web Development", "Angx", "Fullstack", "Nguyen Truong An", "Truong An", "Nguyễn An"],
  authors: [{ name: "Angx", url: "mailto:nguyentruongan0610@gmail.com" }],

  creator: "Angx",
  publisher: "Angx",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://angx.id.vn/",
    title: "Portfolio | Angx",
    description: "Khám phá các dự án và kỹ năng của Angx.",
    siteName: "Angx Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Angx Portfolio",
      },
    ],

  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://angx.id.vn/#person",
              name: "Nguyễn Trường An",
              alternateName: "Angx",
              url: "https://angx.id.vn/",
              image: "https://angx.id.vn/icon.png",
              jobTitle: "Web & Mobile Developer",
              description: "Fullstack Web & Mobile Developer chuyên React, Next.js, Node.js.",
              email: "mailto:nguyentruongan0610@gmail.com",
              sameAs: [
                "https://github.com/angx",      
                "https://linkedin.com/in/angx" 
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "React Native",
                "MongoDB",
                "Spring Boot"
              ]
            }),
          }}
        />

        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://angx.id.vn/#website",
              url: "https://angx.id.vn/",
              name: "Angx Portfolio",
              description: "Angx Portfolio  – Web/Mobile Developer",
              publisher: {
                "@id": "https://angx.id.vn/#person"
              }
            }),
          }}
        />

        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://angx.id.vn/"
                }
              ]
            }),
          }}
        />

      </body>
    </html>
  );
}
