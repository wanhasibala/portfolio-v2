import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScrolling from "@/lib/SmoothScrolling";
import { Providers } from "../providers/Theme";
import { VerticalProvider } from "../providers/VerticalContext";

const inter = Livvic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Wan Hasib",
  description: "Wan Hasib's Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
