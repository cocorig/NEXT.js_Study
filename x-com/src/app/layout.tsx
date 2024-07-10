import type { Metadata } from "next";
import "./globals.css";
import { MSWComponent } from "./_component/MSWComponent";
import AuthSession from "./_component/AuthSession";
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
      <body>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}

// overflow: hidden;
// overscroll-behavior-y: none;
