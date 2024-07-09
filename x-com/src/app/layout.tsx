import type { Metadata } from "next";
import "./globals.css";
import { MSWComponent } from "./_component/MSWComponent";
export const metadata: Metadata = {
  title: "X. 무슨 일이 일어나고 있나요? / X",
  description: "x.com",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <MSWComponent />
      <body>{children}</body>
    </html>
  );
}

// overflow: hidden;
// overscroll-behavior-y: none;
