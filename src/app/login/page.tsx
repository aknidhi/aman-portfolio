
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight, LockKeyhole, LoaderCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        setError("Unable to sign in. Check your credentials and try again.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 py-16 text-[#F2EEE8]">
      <div className="grid w-full max-w-5xl overflow-hidden border border-white/10 md:grid-cols-[45fr_55fr]">

        {/* Left branding */}
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/10 bg-[#111111] p-8 md:min-h-[590px] md:border-b-0 md:border-r md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F15A24]/15 blur-[100px]"
          />

          <Link href="/" className="relative text-3xl font-bold tracking-tight">
            AN<span className="text-[#F15A24]">.</span>
          </Link>

          <div className="relative my-16">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#F15A24]">
              Portfolio Management
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Behind the
              <span className="block text-[#F15A24]">creative work.</span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              A private workspace for managing portfolio content,
              projects, insights and your digital identity.
            </p>
          </div>

          <p className="relative text-xs text-gray-500">
            Authorized access only.
          </p>
        </div>

        {/* Right login form */}
        <div className="flex items-center bg-[#0D0D0D] p-8 sm:p-12 md:p-16">
          <div className="w-full">
            <div className="mb-10 flex h-12 w-12 items-center justify-center border border-[#F15A24]/40 text-[#F15A24]">
              <LockKeyhole size={22} />
            </div>

            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#F15A24]">
              Owner Access
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Welcome back.
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Sign in with your authorized account.
            </p>

            <form onSubmit={handleLogin} className="mt-10 space-y-6">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-white/15 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#F15A24]"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-white/15 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#F15A24]"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 bg-[#F15A24] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#D94B1B] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in to Dashboard
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <Link
              href="/"
              className="mt-8 inline-block text-sm text-gray-400 transition hover:text-white"
            >
              ← Return to portfolio
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
