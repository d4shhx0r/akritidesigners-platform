"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isLoginPage) {
      setChecking(false);
      return;
    }

    // Quick cookie pre-check on client
    const hasCookie = document.cookie
      .split("; ")
      .some((item) => item.startsWith("akriti_auth_session="));

    if (!hasCookie) {
      const fromPath = window.location.pathname;
      const target = fromPath && fromPath !== "/" 
        ? `/login?from=${encodeURIComponent(fromPath)}` 
        : "/login";
      window.location.replace(target);
      return;
    }

    // Server session verification
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthorized(true);
        } else {
          const fromPath = window.location.pathname;
          const target = fromPath && fromPath !== "/" 
            ? `/login?from=${encodeURIComponent(fromPath)}` 
            : "/login";
          window.location.replace(target);
        }
      })
      .catch(() => {
        window.location.replace("/login");
      })
      .finally(() => {
        setChecking(false);
      });
  }, [pathname, isLoginPage]);

  // If on /login page, render clean isolated view without Navbar and Footer
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If checking authentication or unauthorized, block view with loading lockup
  if (checking || !authorized) {
    return (
      <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-zinc-100 select-none">
        <div className="relative w-12 h-12 mb-4 animate-pulse">
          <Image
            src="/branding/monogram.svg"
            alt="Akritidesigners"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
          AUTHENTICATING GATEWAY...
        </div>
      </div>
    );
  }

  // Authenticated full site
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
