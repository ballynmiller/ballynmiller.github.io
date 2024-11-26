import "@/styles/global.css";
import Head from "next/head";

export const metadata = {
  title: "Ballyn Miller",
  description: "Personal website for Ballyn Miller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="container">{children}</body>
    </html>
  );
}
