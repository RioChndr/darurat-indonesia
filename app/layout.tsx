import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peringatan Darurat Indonesia",
  description: "Indonesia darurat demokrasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="twitter-script"
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      >
      </Script>
      <body>{children}</body>
    </html>
  );
}
