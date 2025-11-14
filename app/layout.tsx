import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spin Bros Melbourne",
  description: `🏓 Table Tennis Coaching in Melbourne
Master Defense with Lucas 🛡️ & Attack with Micael 💥
Fun, Technical & Fast Progress!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <html lang="en">
        <body className={`${inter.className} antialiased dark`}>
          {children}
        </body>
      </html>
    </>
  );
}
