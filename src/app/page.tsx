
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-16">
        <Link href="/" className="text-xl font-bold tracking-wider">
          AN<span className="text-[#F15A24]">.</span>
        </Link>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <Link href="#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="border border-[#F15A24] px-5 py-2 text-sm transition hover:bg-[#F15A24]"
        >
          Let's Talk
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center px-6 py-16 md:px-16">

        {/* Orange background glow */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#F15A24]/10 blur-[140px]" />

        {/* Portrait - desktop */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[53%] md:block"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 75% at 60% 52%, black 58%, transparent 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />

          <Image
            src="/images/portrait.jpg"
            alt="Cinematic portrait of Aman"
            fill
            priority
            sizes="53vw"
            className="object-contain object-bottom mix-blend-screen"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl md:w-[65%]">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#F15A24]">
            Data Analytics & ML Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
            Turning data into{" "}
            <span className="text-[#F15A24]">
              intelligent decisions.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Blending machine learning, data analytics and intelligent
            applications to solve real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-[#F15A24] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#d94b19]"
            >
              Explore my projects →
            </Link>

            <Link
              href="#contact"
              className="border border-white/20 px-7 py-4 text-sm transition hover:border-[#F15A24]"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-14 flex gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/aknidhi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F15A24]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/aman-kumar-nidhi-484454209"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F15A24]"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:aknidhi06@gmail.com"
              className="transition hover:text-[#F15A24]"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Portrait - mobile */}
        <div className="relative mt-8 h-[420px] w-full md:hidden">
          <Image
            src="/images/portrait.jpg"
            alt="Cinematic portrait of Aman"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-600 md:px-16">
        © 2026 Aman Nidhi. All rights reserved.
      </footer>
    </main>
  );
}
