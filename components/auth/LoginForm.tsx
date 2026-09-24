"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("from") || "/";

  const [step, setStep] = useState<"options" | "credentials">("options");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid email or password.");
      }

      // Hard redirect to ensure clean cookie session attachment
      window.location.href = redirectUrl;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid credentials.";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-4 antialiased selection:bg-purple-100 selection:text-purple-900">
      <div className="w-full max-w-[340px] flex flex-col items-center">
        {/* Top Logo + Brand Wordmark: Matching official identity */}
        <div className="flex items-center justify-center gap-3 mb-8 select-none">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-zinc-200/80">
            <Image
              src="/branding/monogram.svg"
              alt="Akritidesigners Logo"
              width={32}
              height={32}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-[0.16em] text-[#1E252D] uppercase font-sans">
            AKRITIDESIGNERS
          </span>
        </div>

        {/* Dynamic Screens */}
        <AnimatePresence mode="wait">
          {step === "options" ? (
            <motion.div
              key="options-screen"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              {/* Heading: Exact matching font & color to the above word [AKRITIDESIGNERS] */}
              <h1 className="text-base font-bold tracking-[0.12em] text-[#1E252D] uppercase text-center mb-7">
                Log in to Akritidesigners
              </h1>

              {error && (
                <div className="w-full mb-4 px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg text-center font-sans">
                  {error}
                </div>
              )}

              {/* Action Button: Continue with email */}
              <div className="w-full space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setStep("credentials");
                  }}
                  disabled={loading}
                  className="w-full py-3 px-5 rounded-full bg-[#EFF2F5] hover:bg-[#E5E9EE] active:bg-[#DDE2E8] text-[#1F2937] text-sm font-medium transition-colors duration-150 text-center select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Continue with email
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="credentials-screen"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              {/* Heading: Exact matching font & color to the above word [AKRITIDESIGNERS] */}
              <h1 className="text-base font-bold tracking-[0.12em] text-[#1E252D] uppercase text-center mb-6">
                Enter your credentials
              </h1>

              {error && (
                <div className="w-full mb-3 px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg text-center font-sans">
                  {error}
                </div>
              )}

              {/* Credentials Form */}
              <form onSubmit={handleCredentialsLogin} className="w-full space-y-2.5">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    autoFocus
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#EFF2F5] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#8000EA]/40 transition border-0 font-sans"
                  />
                </div>

                {/* Password Input with eye toggle */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-[#EFF2F5] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#8000EA]/40 transition border-0 font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#4B5563] transition p-1"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Log In Button - vibrant purple pill */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-5 rounded-full bg-[#8000EA] hover:bg-[#7200D1] active:bg-[#6400B8] text-white text-sm font-medium transition-all duration-150 shadow-sm flex items-center justify-center select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    ) : (
                      "Log in"
                    )}
                  </button>
                </div>

                {/* Back to login link */}
                <div className="pt-3 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setError(null);
                      setStep("options");
                    }}
                    className="text-xs text-[#9CA3AF] hover:text-[#4B5563] transition select-none cursor-pointer font-sans"
                  >
                    Back to login
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
