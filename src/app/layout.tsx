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
  title: "Wan Hasib",
  description: "Wan Hasib's Portfolio ",
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
