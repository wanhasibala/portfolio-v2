import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScrolling from "@/lib/SmoothScrolling";
import { Providers } from "../providers/Theme";
import { VerticalProvider } from "../providers/VerticalContext";
import { cn } from "@/lib/utils";

const inter = Livvic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://wanhasib.vercel.app",
  ),
  title: {
    default: "Wan Hasib — Fullstack Developer & UI Architect",
    template: "%s | Wan Hasib",
  },
  description:
    "Personal portfolio of Wan Hasib Al Aslamy. Fullstack Developer & UI Architect based in Surabaya, Indonesia specializing in high-performance web applications and digital products.",
  keywords: [
    "Wan Hasib",
    "Fullstack Developer",
    "Frontend Engineer",
    "UI Architect",
    "Portfolio",
    "Next.js",
    "React",
    "Surabaya",
    "Indonesia",
  ],
  authors: [{ name: "Wan Hasib Al Aslamy" }],
  creator: "Wan Hasib Al Aslamy",
  openGraph: {
    title: "Wan Hasib — Fullstack Developer & UI Architect",
    description:
      "Fullstack Developer & UI Architect based in Surabaya, Indonesia. Creating next-level digital products and high-performance web experiences.",
    url: "https://wanhasib.vercel.app",
    siteName: "Wan Hasib Portfolio",
    images: [
      {
        url: "/share-image.png",
        width: 1200,
        height: 630,
        alt: "Wan Hasib Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wan Hasib — Fullstack Developer & UI Architect",
    description:
      "Fullstack Developer & UI Architect based in Surabaya, Indonesia. Creating next-level digital products and high-performance web experiences.",
    images: ["/hero-image-big.png"],
    creator: "@wanhasib",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/gemini-svg.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className={inter.className}>
        <Providers>
          <VerticalProvider>
            <SmoothScrolling>
              <Navbar />
              {children}
            </SmoothScrolling>
          </VerticalProvider>
        </Providers>
      </body>
    </html>
  );
}
