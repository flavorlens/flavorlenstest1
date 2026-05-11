import type { Metadata } from "next";
import { Inter, Montserrat, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Flavor Lens | Organic Fresh Integrity",
  description: "Flavor Lens: High-end AI technology for organic fresh integrity. Elevate your culinary storytelling with real food vibrance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lexend.variable} ${montserrat.variable} font-display transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}
