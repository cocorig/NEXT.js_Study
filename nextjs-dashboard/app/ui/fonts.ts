// 전체에서 사용될 글꼴을 보관
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const lusitana400 = Lusitana({
  subsets: ["latin"],
  variable: "--font-lusitan",
  weight: "400",
});
