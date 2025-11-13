"use client";
import { ReactNode, useState, useEffect } from "react";
import { AuthKitProvider } from '@farcaster/auth-kit';
import { siwfConfig } from "./components/siwf";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AuthKitProvider config={siwfConfig}>
      {children}
    </AuthKitProvider>
  );
}

