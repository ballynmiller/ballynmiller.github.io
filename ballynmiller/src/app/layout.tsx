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
      <body>{children}</body>
    </html>
  );
}
