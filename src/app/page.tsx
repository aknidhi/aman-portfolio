
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

          <Link href="#skills" className="transition hover:text-white">
            Skills
          </Link>

          <Link href="#experience" className="transition hover:text-white">
            Experience
          </Link>

          <Link href="#education" className="transition hover:text-white">
            Education
          </Link>

          <Link href="#certifications" className="transition hover:text-white">
            Certifications
          </Link>

          <Link href="#journey" className="transition hover:text-white">
            Journey
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


{/* Skills Section */}
<section
  id="skills"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    <div className="editorial-grid">

      {/* Left: Section Introduction */}
      <div className="editorial-left">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
          03 / Technical Expertise
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          The tools behind
          <span className="text-[#F15A24]"> the ideas.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
          My technical toolkit brings together programming,
          data analytics, machine learning and modern AI
          technologies to build practical solutions.
        </p>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Areas of interest
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            Data-driven solutions
            <span className="text-[#F15A24]"> / </span>
            Intelligent applications
            <span className="text-[#F15A24]"> / </span>
            Machine learning
          </p>
        </div>
      </div>

      {/* Right: Skills Categories */}
      <div className="editorial-right space-y-5">

        {/* Programming & Analytics */}
        <div className="border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Programming & Analytics
            </h3>
            <span className="text-sm text-[#F15A24]">01</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Python", "MS Excel", "Power BI"].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-[#F15A24] hover:text-[#F15A24]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Machine Learning & AI */}
        <div className="border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Machine Learning & AI
            </h3>
            <span className="text-sm text-[#F15A24]">02</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Agentic AI",
              "LangChain",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-[#F15A24] hover:text-[#F15A24]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Frameworks & Libraries
            </h3>
            <span className="text-sm text-[#F15A24]">03</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "PyTorch",
              "TensorFlow",
              "Scikit-learn",
              "LangGraph",
              "LlamaIndex",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-[#F15A24] hover:text-[#F15A24]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Databases & Storage
            </h3>
            <span className="text-sm text-[#F15A24]">04</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "MySQL",
              "PostgreSQL",
              "ChromaDB",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-[#F15A24] hover:text-[#F15A24]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              AI Development Tools
            </h3>
            <span className="text-sm text-[#F15A24]">05</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Claude",
              "Gemini",
              "Blackbox AI",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-[#F15A24] hover:text-[#F15A24]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


{/* Experience Section */}
<section
  id="experience"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    <div className="editorial-grid">

      {/* Left Introduction */}
      <div className="editorial-left">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
          04 / Experience
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Learning by
          <span className="text-[#F15A24]"> building.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
          My experience is shaped by practical projects,
          collaborative development and continuous learning.
          I focus on turning technical knowledge into working
          applications.
        </p>
      </div>

      {/* Right Experience Timeline */}
      <div className="editorial-right">

        <div className="relative border-l border-white/10 pl-7 md:pl-10">

          {/* Experience 1 */}
          <article className="relative pb-14">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              Internship
            </p>

            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
              Infotact Solutions
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Internship Project · Team Lead
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Working with a team on CareFlow, a collaborative
              healthcare project focused on sepsis event data.
              My responsibilities include coordinating the team,
              organizing development tasks and contributing to
              the project workflow.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Team Coordination",
                "Python",
                "Data Analysis",
                "GitHub",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 text-xs text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          {/* Experience 2 */}
          <article className="relative">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              Independent Development
            </p>

            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
              AI & ML Projects
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Personal Project Development
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Exploring machine learning, financial research
              automation and intelligent applications through
              hands-on projects such as FinSight AI and Janvoice AI.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Agentic AI",
                "Python",
                "LLM Applications",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 text-xs text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

        </div>
      </div>
    </div>
  </div>
</section>


{/* Education Section */}
<section
  id="education"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    <div className="editorial-grid">

      {/* Left Introduction */}
      <div className="editorial-left">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
          05 / Education
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Building the
          <span className="text-[#F15A24]"> foundation.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
          My academic journey is helping me develop the
          technical foundation and problem-solving skills
          needed to work with data, intelligent systems
          and modern technology.
        </p>
      </div>

      {/* Right Education Details */}
      <div className="editorial-right">

        <article className="border border-white/10 bg-[#111111] p-7 md:p-10">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-[#F15A24]">
              Undergraduate Degree
            </span>

            <span className="border border-[#F15A24]/40 px-3 py-1 text-xs text-[#F15A24]">
              Pursuing
            </span>
          </div>

          <h3 className="mt-10 text-3xl font-bold md:text-4xl">
            Bachelor of Technology
          </h3>

          <p className="mt-3 text-lg text-gray-300">
            Computer Science & Engineering
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Artificial Intelligence & Data Science
          </p>

          <div className="mt-10 border-t border-white/10 pt-8">

            <div className="grid grid-cols-2 gap-8">

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Institution
                </p>
                <p className="mt-3 text-sm font-medium text-white">
                  Gurugram University
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Location
                </p>
                <p className="mt-3 text-sm font-medium text-white">
                  Haryana, India
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Duration
                </p>
                <p className="mt-3 text-sm font-medium text-white">
                  2025 – 2028
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Academic Status
                </p>
                <p className="mt-3 text-sm font-medium text-white">
                  Currently Pursuing
                </p>
              </div>

            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Academic Focus
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Computer Science",
                "Artificial Intelligence",
                "Data Science",
                "Machine Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 text-xs text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </article>
      </div>

    </div>
  </div>
</section>


{/* Certifications & Courses Section */}
<section
  id="certifications"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    <div className="editorial-grid">

      {/* Left Introduction */}
      <div className="editorial-left">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
          06 / Continuous Learning
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Always learning.
          <span className="text-[#F15A24]"> Always growing.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
          Technology keeps evolving, and so does my learning
          journey. I believe in improving my skills through
          structured learning, practical exercises and
          hands-on development.
        </p>
      </div>

      {/* Right Credentials */}
      <div className="editorial-right space-y-5">

        {/* Certifications */}
        <article className="border border-white/10 bg-[#111111] p-7 md:p-9">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              01 / Professional Credentials
            </p>
            <span className="text-xl text-gray-500">↗</span>
          </div>

          <h3 className="mt-7 text-2xl font-bold">
            Certifications
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            A collection of verified certifications, professional
            credentials and recognized learning achievements.
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-sm text-gray-500">
              Certificate records will be added here.
            </p>
          </div>
        </article>

        {/* Courses */}
        <article className="border border-white/10 bg-[#111111] p-7 md:p-9">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              02 / Learning & Development
            </p>
            <span className="text-xl text-gray-500">↗</span>
          </div>

          <h3 className="mt-7 text-2xl font-bold">
            Courses & Training
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Learning programs and training activities that
            support my development in data analytics,
            machine learning and artificial intelligence.
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-sm text-gray-500">
              Course records will be added here.
            </p>
          </div>
        </article>

        {/* Learning Focus */}
        <div className="border border-[#F15A24]/20 bg-[#F15A24]/[0.04] p-7">
          <p className="text-xs uppercase tracking-widest text-[#F15A24]">
            Current Learning Interests
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Generative AI",
              "Machine Learning",
              "Data Analytics",
              "Agentic AI",
            ].map((item) => (
              <span
                key={item}
                className="border border-white/10 px-3 py-2 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


{/* Journey Section */}
<section
  id="journey"
  className="border-t border-white/10 px-6 py-28 md:px-16"
>
  <div className="page-container">

    <div className="editorial-grid">

      {/* Left Introduction */}
      <div className="editorial-left">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#F15A24]">
          07 / My Journey
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Progress over
          <span className="text-[#F15A24]"> perfection.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
          Every project, challenge and learning experience
          contributes to my growth. This timeline captures
          important steps in my journey through technology,
          data and artificial intelligence.
        </p>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            The direction
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Learn <span className="text-[#F15A24]">/</span>
            Build <span className="text-[#F15A24]">/</span>
            Improve
          </p>
        </div>
      </div>

      {/* Right Timeline */}
      <div className="editorial-right">

        <div className="relative border-l border-white/10 pl-7 md:pl-10">

          {/* Milestone 1 */}
          <article className="relative pb-12">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              2025
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Academic Journey
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Began my B.Tech journey in Computer Science
              and Engineering, specializing in Artificial
              Intelligence and Data Science.
            </p>
          </article>

          {/* Milestone 2 */}
          <article className="relative pb-12">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              2026
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Exploring AI & Data
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Continued developing practical skills in
              machine learning, data analytics and intelligent
              applications through hands-on projects.
            </p>
          </article>

          {/* Milestone 3 */}
          <article className="relative pb-12">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              2026
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              FinSight AI
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Developed an AI-powered financial research
              application combining stock analysis,
              portfolio insights and AI-assisted research.
            </p>
          </article>

          {/* Milestone 4 */}
          <article className="relative">
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-[#F15A24] bg-[#0A0A0A] md:-left-[45px]" />

            <p className="text-xs uppercase tracking-widest text-[#F15A24]">
              2026
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Internship & Collaboration
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Joined Infotact Solutions and took the team
              lead role in the collaborative CareFlow
              healthcare project.
            </p>
          </article>

        </div>
      </div>
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
