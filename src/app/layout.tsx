import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthGuard from "@/components/auth/AuthGuard";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obspot",
  description: "Plataforma colaborativa sobre e para a comunidade STEAM Potiguar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
