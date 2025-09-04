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
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
