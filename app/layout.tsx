import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Мастер по маникюру Вероника | Минск",
  description:
    "Профессиональный маникюр в Минске. Уютный кабинет, стерильные инструменты и качественные материалы. Онлайн-запись через DIKIDI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* DIKIDI Script */}
        <Script
          src="https://dikidi.net/assets/js/widget_record/widget2.min.js?v=1758698230"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
