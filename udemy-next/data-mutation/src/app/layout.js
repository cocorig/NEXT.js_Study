import Header from "@/components/Header";
import "./globals.css";

// layout.js의 metadata는 모든 페이지에서 사용된다.
export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
