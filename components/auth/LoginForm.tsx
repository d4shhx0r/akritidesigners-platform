"use client";

import { useState } from "react";
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

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isGoogle: true }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Google sign-in failed");
      }

      router.push(redirectUrl);
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Authentication failed";
      setError(msg);
      setLoading(false);
    }
  };

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
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
          isGoogle: false,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid email or password");
      }

      router.push(redirectUrl);
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid credentials";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-4 antialiased selection:bg-purple-100 selection:text-purple-900">
      <div className="w-full max-w-[340px] flex flex-col items-center">
        {/* Top Logo - subtle soft silvery tone matching the screenshot */}
        <div className="mb-8 select-none">
          <span className="text-3xl font-bold tracking-tight text-[#E1E6EB] transition-colors hover:text-[#CCD5DD]">
            Akritidesigners
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
              {/* Heading */}
              <h1 className="text-[19px] font-semibold text-[#111827] tracking-tight mb-7 text-center">
                Log in to Akritidesigners
              </h1>

              {error && (
                <div className="w-full mb-4 px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg text-center">
                  {error}
                </div>
              )}

              {/* Action Buttons */}
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

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full py-3 px-5 rounded-full bg-[#EFF2F5] hover:bg-[#E5E9EE] active:bg-[#DDE2E8] text-[#1F2937] text-sm font-medium transition-colors duration-150 flex items-center justify-center gap-3 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  ) : (
                    <>
                      {/* Crisp Google Icon */}
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                      <span>Continue with Google</span>
                    </>
                  )}
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
              {/* Heading */}
              <h1 className="text-[19px] font-semibold text-[#111827] tracking-tight mb-6 text-center">
                Enter your credentials
              </h1>

              {error && (
                <div className="w-full mb-3 px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg text-center">
                  {error}
                </div>
              )}

              {/* Form */}
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
                    className="w-full px-4 py-3 rounded-xl bg-[#EFF2F5] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#8000EA]/40 transition border-0"
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
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-[#EFF2F5] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#8000EA]/40 transition border-0"
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
                    className="text-xs text-[#9CA3AF] hover:text-[#4B5563] transition select-none cursor-pointer"
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
