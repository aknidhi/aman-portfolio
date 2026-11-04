
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
          className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[60%] md:block"
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
        <div className="relative z-10 max-w-4xl md:w-[45%]">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#F15A24]">
            Data Analytics & ML Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
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

      
{/* About Section */}
<section
  id="about"
  className="relative border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container editorial-grid">

    {/* Left Content */}
    <div className="editorial-left">
      <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
        01 / About Me
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-6xl">
        More than just
        <span className="text-[#F15A24]"> data.</span>
        <br />
        A problem solver.
      </h2>
    </div>

    {/* Right Content */}
    <div className="editorial-right flex flex-col justify-center">
      <p className="text-lg leading-9 text-gray-300">
        I'm a Data Analytics and Machine Learning developer interested
        in building practical technology that solves real-world problems.
        I enjoy working with data, exploring patterns, developing
        intelligent applications and turning ideas into useful products.
      </p>

      <p className="mt-5 text-base leading-8 text-gray-500">
        My focus is on combining analytical thinking, machine learning
        and modern AI tools to create solutions that are useful,
        meaningful and easy to work with.
      </p>

      {/* Personal Information */}
      <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Education
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            B.Tech — CSE (AI & DS)
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            University
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Gurugram University
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Location
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Haryana, India
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Current Focus
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            AI, ML & Data Analytics
          </p>
        </div>

      </div>
    </div>
  </div>
</section>



{/* Projects Section */}
<section
  id="projects"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    {/* Section Heading */}
    <div className="mb-20">
      <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
        02 / Selected Work
      </p>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Ideas turned into
          <span className="text-[#F15A24]"> reality.</span>
        </h2>

        <p className="max-w-sm text-base leading-7 text-gray-400">
          A collection of projects exploring data, machine learning,
          artificial intelligence and practical problem-solving.
        </p>
      </div>
    </div>

    {/* Featured Project */}
    <div className="editorial-grid border-y border-white/10 py-12">

      {/* Featured Project Information */}
      <div className="editorial-left">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="border border-[#F15A24]/40 px-3 py-1 text-xs uppercase tracking-wider text-[#F15A24]">
            Featured Project
          </span>
          <span className="text-xs text-gray-500">
            AI / Financial Research
          </span>
        </div>

        <h3 className="text-4xl font-bold md:text-6xl">
          FinSight <span className="text-[#F15A24]">AI.</span>
        </h3>

        <p className="mt-7 text-lg leading-8 text-gray-300">
          An AI-powered financial research agent designed to help
          users explore stocks, compare companies and generate
          structured investment research.
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          The application brings financial analysis, technical
          indicators, portfolio insights and AI-powered follow-up
          conversations into one research workflow.
        </p>

        {/* Features */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Stock Comparison",
            "Portfolio Analysis",
            "Technical Indicators",
            "PDF Reports",
            "AI Chat",
            "Research History",
          ].map((feature) => (
            <span
              key={feature}
              className="border border-white/10 px-3 py-2 text-xs text-gray-400"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-9">
          <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
            Technologies
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <span>Python</span>
            <span className="text-[#F15A24]">/</span>
            <span>Streamlit</span>
            <span className="text-[#F15A24]">/</span>
            <span>LLM</span>
            <span className="text-[#F15A24]">/</span>
            <span>ChromaDB</span>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://finresearch-ai.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#F15A24] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#d94b19]"
          >
            Explore FinSight AI <span>↗</span>
          </a>
        </div>
      </div>

      {/* Featured Project Visual */}
      <div className="editorial-right">
        <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-[#14110F] p-6 md:min-h-[460px] md:p-9">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F15A24]/15 blur-[100px]" />

          <div className="relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm font-semibold tracking-wide">
                FinSight <span className="text-[#F15A24]">AI</span>
              </span>
              <span className="text-xs text-gray-500">
                Research Workspace
              </span>
            </div>

            <div className="mt-9">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Financial Intelligence
              </p>

              <h4 className="mt-3 text-3xl font-bold">
                Research smarter.
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Explore financial data with AI assistance.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {[
                ["01", "Stock Comparison"],
                ["02", "Portfolio Analysis"],
                ["03", "Technical Signals"],
                ["04", "Research Reports"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-xs text-[#F15A24]">{number}</p>
                  <p className="mt-3 text-sm text-gray-300">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs text-gray-500">
                AI-POWERED FINANCIAL RESEARCH
              </p>
              <div className="mt-3 h-1 w-full bg-white/10">
                <div className="h-1 w-2/3 bg-[#F15A24]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Other Projects */}
    <div className="mt-20 grid gap-6 md:grid-cols-2">

      {/* Janvoice AI */}
      <article className="group border border-white/10 bg-[#111111] p-7 transition hover:border-[#F15A24]/50 md:p-9">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Project 02
          </span>
          <span className="text-xs text-[#F15A24]">
            AI Application
          </span>
        </div>

        <h3 className="mt-12 text-3xl font-bold">
          Janvoice <span className="text-[#F15A24]">AI.</span>
        </h3>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          An AI project currently being documented for its
          portfolio case study.
        </p>

        <div className="mt-12 border-t border-white/10 pt-5">
          <span className="text-sm text-gray-500 transition group-hover:text-[#F15A24]">
            Case study coming soon ↗
          </span>
        </div>
      </article>

      {/* CareFlow */}
      <article className="group border border-white/10 bg-[#111111] p-7 transition hover:border-[#F15A24]/50 md:p-9">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Project 03
          </span>
          <span className="text-xs text-[#F15A24]">
            Healthcare / Data
          </span>
        </div>

        <h3 className="mt-12 text-3xl font-bold">
          Care<span className="text-[#F15A24]">Flow.</span>
        </h3>

        <p className="mt-5 text-sm leading-7 text-gray-400">
          A collaborative healthcare project exploring sepsis
          event data and data-driven approaches to healthcare.
        </p>

        <div className="mt-12 border-t border-white/10 pt-5">
          <span className="text-sm text-gray-500 transition group-hover:text-[#F15A24]">
            Case study coming soon ↗
          </span>
        </div>
      </article>

    </div>

  </div>
</section>



      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-600 md:px-16">
        © 2026 Aman Nidhi. All rights reserved.
      </footer>
    </main>
  );
}
