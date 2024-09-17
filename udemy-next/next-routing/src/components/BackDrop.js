"use client";
import { useRouter } from "next/navigation";
export default function BackDrop() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}
