"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type Props = {
  children: React.ReactNode;
};

export default function RQProvider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      // react-query 전역 설정
      queries: {
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  const [client] = useState(queryClient);
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}
