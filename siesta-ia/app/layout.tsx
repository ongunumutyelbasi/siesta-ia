// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { TransitionLayout } from "@/components/TransitionLayout"; 
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SIESTA.ia Architecture",
  description: "Architecture rooted in quiet simplicity and natural light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* 🚨 Body is clean, only applying font classes 🚨 */}
      <body className={`font-sans antialiased`}> 
        <TransitionLayout>
          {children}
        </TransitionLayout>
        <Footer />
      </body>
    </html>
  );
}