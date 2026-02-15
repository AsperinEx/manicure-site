import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мастер по маникюру Вероника | Минск | метро Восток",
  description:
    "Профессиональный маникюр в Минске рядом со станцией метро Восток (район Маяк Минска). Маникюр, гель-лак, наращивание. Уютный кабинет, стерильные инструменты и качественные материалы. Онлайн-запись через DIKIDI.",
  openGraph: {
    title: "Мастер по маникюру Вероника | Минск",
    description:
      "Маникюр в Минске рядом с метро Восток (Маяк Минска). Аккуратно, стерильно, с заботой о деталях.",
    url: "https://nails-by-veronika.netlify.app",
    siteName: "Nails by Veronika",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
