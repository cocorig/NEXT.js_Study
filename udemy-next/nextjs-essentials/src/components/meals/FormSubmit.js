"use client";

import { useFormStatus } from "react-dom";

import React from "react";

export default function FormSubmit() {
  // useFormStatus훅은 action 컴포넌트 내부에 있어야 작동한다.
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
