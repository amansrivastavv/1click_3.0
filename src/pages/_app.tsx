"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authApi } from "@/api/auth";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const noLayoutPages = ["/login", "/"];
  const showLayout = !noLayoutPages.includes(router.pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const protectedPages = ["/dashboard"];
    const isProtectedPage = protectedPages.some((page) =>
      router.pathname.startsWith(page)
    );

    if (isProtectedPage && !authApi.isAuthenticated()) {
      router.replace("/login");
    } else if (router.pathname === "/login" && authApi.isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router.pathname, mounted, router]);

  if (!mounted) {
    return null;
  }

  const PageComponent = <Component {...pageProps} />;
  return showLayout ? <Layout>{PageComponent}</Layout> : PageComponent;
}
