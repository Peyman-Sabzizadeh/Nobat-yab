import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نوبت یاب",
  description: "راحت ترین نوبتی که تا حالا گرفته اید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-6xl mx-auto px-4 pt-2">{children}</body>
    </html>
  );
}
