import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"; 
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// METADATA ESTÁNDAR
export const metadata: Metadata = {
  title: "Juan Pablo Márquez | SEO Engineer",
  description: "Especialista en arquitectura técnica de búsqueda y automatización con IA.",
  alternates: { canonical: "https://juanpablomarquez.vercel.app" },
  verification: { google: "6ZqOZgswu_dGAP82WD_HmBgq8NQ5Fa4lu5JI56jr3Kw" },
};

// SCHEMA MARKUP B2B (Separado para limpieza de código)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Juan Pablo Márquez",
  "jobTitle": "Technical SEO Engineer & Next.js Architect",
  "url": "https://juanpablomarquez.vercel.app",
  "sameAs": [
    "https://linkedin.com/in/juanpamrod",
    "https://github.com/pablomrdz"
  ],
  "alumniOf": "Diseño Industrial",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Nicolás de los Garza",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "knowsAbout": ["Technical SEO", "Next.js", "WordPress Migration", "n8n Automation", "PHP"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      {/* INYECCIÓN DEL SCHEMA EN EL HEAD */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white dark:bg-[#0a0a0a] transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}