"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  // On /login, render clean isolated view without Navbar and Footer
  if (isLoginPage) {
    return <>{children}</>;
  }

  // On all protected pages (guaranteed by server proxy gate), render standard site chrome
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
