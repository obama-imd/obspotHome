"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { hasSession } from "@/lib/auth/session";
import AuthLoading from "@/components/auth/AuthLoading";

type AuthGuardProps = {
  children: ReactNode;
};

const PUBLIC_ROUTES = [
    "/auth/login",
    "/auth/register",
    "/"
]
const LOGIN_ROUTE = "/auth/login";

export default function AuthGuard({ children }: AuthGuardProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const isPublicRoute = PUBLIC_ROUTES.some(route => route === pathname);

    if (!isPublicRoute && !hasSession()) {
      router.replace(LOGIN_ROUTE);
    }
  }, [isReady, pathname, router]);

  if (!isReady) {
    return <AuthLoading />;
  }

  const isPublicRoute = PUBLIC_ROUTES.some(route => route === pathname);

  if (!isPublicRoute && !hasSession()) {
    return <AuthLoading />;
  }

  return <>{children}</>;
}
