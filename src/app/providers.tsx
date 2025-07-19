"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { defaultSystem } from "@chakra-ui/react"

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}