"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit({ text, loadingText, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} {...rest}>
      {pending ? loadingText : text}
    </button>
  );
}
