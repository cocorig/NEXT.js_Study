"use client";

import { usePathname } from "next/navigation";
export default function ProjectPage() {
  const router = usePathname();
  console.log(router);

  return <>ProjectPage</>;
}
