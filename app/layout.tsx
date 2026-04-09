import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B Suraj Patra | Portfolio",
  description: "B Suraj Patra is a Computer Science and Engineering student specializing in Full Stack Development and Game Design.",
  icons: {
    icon: [
      { url: '/logo.webp', type: 'image/webp' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/logo.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#000', color: '#fff' }}>{children}</body>
    </html>
  );
}
