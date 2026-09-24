import { Suspense } from "react";
import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log in | Akritidesigners",
  description: "Secure gateway login for Akritidesigners platform",
};

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-white flex items-center justify-center">
          <div className="text-3xl font-bold tracking-tight text-[#E1E6EB]">
            Akritidesigners
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
