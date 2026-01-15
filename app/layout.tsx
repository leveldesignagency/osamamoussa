import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Osama Moussa | Consultant General Surgeon | Upper GI | Watford, London",
  description: "Consultant General Surgeon specialising in Upper Gastrointestinal Surgery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SVG Favicon with dark/light mode support */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/Logo_Osama_Moussa_Compartment-02.svg"
        />
        {/* Fallback PNG favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/Logo_Osama_Moussa_Compartment-02.png"
        />
        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          href="/Logo_Osama_Moussa_Compartment-02.png"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

