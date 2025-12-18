import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  keywords: ["Next.js", "React", "Portfolio", "Web Development", "Angx", "Fullstack","Nguyen Truong An","Truong An","Nguyễn An"],
  authors: [{ name: "Angx" }],
  creator: "Angx",
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
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
