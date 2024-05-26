import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScrolling from "@/lib/SmoothScrolling";
import { Providers } from "./providers/Theme";

const inter = Livvic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <SmoothScrolling>
            <Navbar />
            {children}
          </SmoothScrolling>
        </Providers>
      </body>
    </html>
  );
}
