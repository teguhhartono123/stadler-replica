import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadler Rail Replica - Swiss Precision Hub",
  description: "Next-Gen Eco-Friendly Fleet Platform Built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
