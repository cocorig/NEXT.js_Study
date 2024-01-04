import { SectionContainer } from "@/components/SectionContainer";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SectionContainer title="로그인">{children}</SectionContainer>;
}
