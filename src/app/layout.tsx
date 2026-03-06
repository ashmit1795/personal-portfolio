import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashmit Patra | Developer Portfolio",
  description: "Computer Science student building backend systems, APIs, and exploring DevOps & cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-accent selection:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
