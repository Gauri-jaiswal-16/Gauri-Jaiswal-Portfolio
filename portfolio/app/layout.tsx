import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gauri Jaiswal — AI/ML Student & AI Product Design Intern",
  description:
    "Portfolio of Gauri Jaiswal — first-year AI/ML engineering student, AI Product Design intern, and video editor, building toward a career in applied AI.",
  metadataBase: new URL("https://gaurijaiswal.dev"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
  openGraph: {
    title: "Gauri Jaiswal — AI/ML Student & AI Product Design Intern",
    description:
      "Portfolio of Gauri Jaiswal — first-year AI/ML engineering student, AI Product Design intern, and video editor.",
    url: "https://gaurijaiswal.dev",
    siteName: "Gauri Jaiswal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased transition-colors duration-300 overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
