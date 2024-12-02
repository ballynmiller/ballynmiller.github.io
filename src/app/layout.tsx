import "@/styles/global.css";
import { Viewport } from "next";
import { poppins } from "./fonts";

export const metadata = {
  title: "Ballyn Miller",
  description: "Personal website for Ballyn Miller",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="px-0 py-0 md:px-10 md:py-2">{children}</body>
    </html>
  );
}
