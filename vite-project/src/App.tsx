import { useEffect, useRef, useState, memo } from "react";
import { SyncLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";
import FMImg from "./assets/FMss.png";
import voxa from "./assets/voxatextlogo.svg";
import Marquee from "react-fast-marquee";
import AayanWeb from "./assets/aayanweb.png";
import tlsearch from "./assets/tlsearch.png";
import CSS from "./assets/tech-stack-icons/CSSLogo.svg";
import MySQL from "./assets/tech-stack-icons/MySQLLogo.svg";
import HTML5 from "./assets/tech-stack-icons/HTML5Logo.svg";
import JS from "./assets/tech-stack-icons/JavaScriptLogo.svg";
import NODE from "./assets/tech-stack-icons/NodeLogo.svg";
import TAILWIND from "./assets/tech-stack-icons/TailwindLogo.svg";
import REACT from "./assets/tech-stack-icons/ReactLogo.svg";
import PYTHON from "./assets/tech-stack-icons/python-3.svg";
import EXPRESS from "./assets/tech-stack-icons/expresslogo.svg";
import NEXT from "./assets/tech-stack-icons/Nextjs.svg";
import TS from "./assets/tech-stack-icons/Typescript.svg";
import FIREBASE from "./assets/tech-stack-icons/firebase.svg";
import CPP from "./assets/tech-stack-icons/C++logo.svg";
import SUPABASE from "./assets/tech-stack-icons/supabaselogo.svg";
import emailjs from "@emailjs/browser";
import "./index.css";
import "./App.css";

declare global {
  interface Window {
    VANTA: any;
  }
}

// Optimized Vanta NET Hook
function useVantaNet(ref: React.RefObject<HTMLDivElement | null>) {
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || effectRef.current) return;
    if (window.VANTA) {
      effectRef.current = window.VANTA.NET({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x0f0f17,
        points: window.innerWidth < 640 ? 8 : 16,
        maxDistance: window.innerWidth < 640 ? 12 : 20,
        spacing: 20.0,
      });

    }

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [ref]);
}

const ContactForm = memo(function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = form.current;
    if (!formEl) return;

    emailjs
      .sendForm(
        "service_2zlojgi",
        "template_1deljjl",
        formEl,
        "cvuiRUMw64Soebb11"
      )
      .then(() => {
        console.log("Message sent to me");

        emailjs
          .send(
            "service_2zlojgi",
            "template_9hll0nc",
            {
              user_name: formEl.user_name.value,
              user_email: formEl.user_email.value,
            },
            "cvuiRUMw64Soebb11"
          )
          .then(() => {
            console.log("Auto-reply sent to user ✅");
          })
          .catch((error) => {
            console.error("Auto-reply failed ❌", error);
          });
      })
      .catch((error) => {
        console.error("Main email failed ❌", error);
      });

    formEl.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
        max-w-2xl
        bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        shadow-2xl
        p-8 space-y-6
        transition-all duration-500
        hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-white/40
      "
    >

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30 resize-none"
      />

      <button
        type="submit"
        className="
          w-full bg-gradient-to-r from-cyan-500 to-blue-500
          text-white font-bold py-3 rounded-xl
          active:scale-95
          tracking-wide text-sm cursor-pointer
        "
      >
        Send Message
      </button>
    </form>
  );
});

const Header = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  useVantaNet(ref);
  return (
    <div ref={ref} className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white">
          Mohammed Aayan Pathan
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          <Typewriter
            words={[
              "Full-Stack Web Developer and Computer Science Enthusiast",
              "Star Associate of the Year at Voxa",
              "Infusing Artificial Intelligence with user-ended applications",
              "Proficient in Python, JavaScript and C++, with a strong focus on web development",
              "Next.js and TailwindCSS Expertise",
              "Comfortable working in AGILE environments and collaborating in cross-functional teams",
              "International CS Competition Bronze Honor Finalist (top 8% intl.)",
            ]}
            loop={0}
            cursor
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1250}
          />
        </p>
      </div>
    </div>
  );
});

const MainContent = memo(function MainContent() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [academicsTab, setAcademicsTab] = useState<"gcse" | "alevels" | "aslevel">("gcse");

  const techs = [
    { src: REACT, url: "https://reactjs.org" },
    { src: JS, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { src: TAILWIND, url: "https://tailwindcss.com" },
    { src: CSS, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { src: HTML5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { src: NODE, url: "https://nodejs.org" },
    { src: MySQL, url: "https://www.mysql.com" },
    { src: PYTHON, url: "https://www.python.org" },
    { src: EXPRESS, url: "https://expressjs.com" },
    { src: NEXT, url: "https://nextjs.org" },
    { src: TS, url: "https://www.typescriptlang.org" },
    { src: FIREBASE, url: "https://firebase.google.com/" },
    { src: SUPABASE, url: "https://supabase.com/" },
    { src: CPP, url: "https://isocpp.org/" },
  ];

  return (
    <section className="relative w-screen min-h-screen overflow-x-clip text-white">
      <div className="relative z-10 section section-pad section-stack">
        <h2 className="section-title relative z-20">About Me</h2>
        <p className="text-md md:text-xl sm:text-lg text-gray-200 max-w-xl px-6 sm:px:6 lg:px-16 xl:px-0 leading-relaxed relative z-20">
          I'm Mohammed Aayan Pathan. I'm 17 years old and I'm from India, though I reside, study and work in the UAE. I've been
          fascinated by the technical ingenunity and capabilities of technology since a young age, and ever since, I've
          been on a journey to understand and leverage technology for
          practically everything! I am currently in Year 13, on my last year of
          the A-Level course in GEMS Founders School Al Barsha, and will be applying for a BSc in Computer Science at university.
          <br />
          <br />
          I am a full-stack web developer, specializing in Next.js and TailwindCSS. I'm flexible with SQL approaches such as MySQL or No-SQL approaches like Firebase or Supabase. I place heavy priority on clean and user-oriented UIs; I believe form is function. I'm also proficient in Python and C++, and have experience working with backends in Python, though I typically work with MySQL-ERN or Next.js routes.
        </p>

        <section id="experience" className="section section-pad">
          <div className="section-stack">
            <h2 className="section-title">My Experience</h2>
            <article
              className="
    max-w-4xl mx-auto mt-6
    rounded-2xl border border-white/20
    bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-md
    p-6 sm:p-8 text-left
    shadow-md transition-all duration-300
    group hover:shadow-lg hover:shadow-[#b592ff]/20 hover:border-[#b592ff]/20
  "
            >
              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center justify-center gap-3">
                  <img
                    loading="lazy"
                    src={voxa}
                    alt="Voxa logo"
                    className="w-20 h-10 rounded-md bg-[#b592ff]/10 p-1 border border-[#b592ff]/30 shrink-0"
                  />
                  <h3 className="subtitle">
                    Full-Stack Web Developer{" "}
                    <span className="text-white/70">• Voxa</span>
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm sm:text-base text-gray-400">
                    2025 - 2026
                  </span>
                  <a
                    href="https://voxa.club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-[#b592ff] hover:underline"
                  >
                    Visit →
                  </a>
                </div>
              </header>
              <div className="mt-6 relative pl-8">
                {/* vertical line */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b592ff] via-white/20 to-transparent rounded-full" />

                <div className="space-y-8">
                  <div>
                    <div className="flex flex-wrap items-center lg:gap-3 sm:gap-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white">
                        Junior Engineering Associate
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400">October 2025 — April 2026</p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white">
                      Product &amp; App Development Intern
                    </h4>
                    <p className="text-sm text-gray-400">July 2025 (Start)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                  As part of a cross-functional development team, I contributed
                  to building
                  <strong> Voxa </strong>, a full-stack, AI-powered web
                  application designed to enhance public speaking skills. I
                  worked on everything from voice processing to user experience,
                  integrating real-time transcription, feedback mechanisms, and
                  gamified user progress.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                  I deployed the app on <strong>Vercel</strong> and managed
                  version control via
                  <strong> GitHub</strong>, collaborating closely with
                  developers to review code, manage issues, and deliver scalable
                  solutions.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="
  flex items-center justify-center
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  AssemblyAI WebSocket live transcription and OpenAI API rapid
                  personalized feedback generation.
                </div>
                <div
                  className="
  flex items-center justify-center
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  Firebase Auth, Firestore, and Storage and now Supabase integration with Next.js
                  Routes.
                </div>
                <div
                  className="
  flex items-center justify-center
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  Engaging progress system, onboarding flow & performance analytics.
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-pad">
          <div className="section-stack">
            <h2 className="section-title">My Projects</h2>
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {(
                [
                  {
                    name: "TLSearch",
                    description: "A semantic search engine built with Next.js and FastAPI, using vector embeddings to query space biology research papers with AI-generated summaries.",
                    note: "Initial load may exceed 1 min due to Render inactivity.",
                    tags: ["Next.js", "FastAPI", "Python", "Vector Embeddings", "AI"],
                    url: "https://tlsearch.org",
                    image: tlsearch,
                    isLogo: false,
                    border: "border-yellow-400/35",
                    accent: "via-yellow-400/55",
                    bg: "from-yellow-500/15 via-yellow-500/5 to-black/75",
                    tagCls: "bg-yellow-400/10 border-yellow-400/20 text-yellow-200/80",
                    linkCls: "text-yellow-300",
                  },
                  {
                    name: "FormulaMetric",
                    description: "Intelligent F1 performance analytics using z-score, quartile trend analysis, sigmoid transformations and team-mate ratio comparisons for objective driver insight.",
                    note: "Initial load may exceed 1 min due to Render inactivity.",
                    tags: ["MySQL", "Express", "React", "Node.js", "Vercel", "Aiven"],
                    url: "https://www.formulametric.com",
                    image: FMImg,
                    isLogo: false,
                    border: "border-rose-400/35",
                    accent: "via-rose-400/55",
                    bg: "from-rose-500/15 via-rose-500/5 to-black/75",
                    tagCls: "bg-rose-400/10 border-rose-400/20 text-rose-200/80",
                    linkCls: "text-rose-300",
                  },
                  {
                    name: "Voxa Voice App",
                    description: "An AI-powered public speaking coach built with Next.js and TypeScript. Features real-time voice transcription via AssemblyAI, instant personalised feedback powered by OpenAI, a gamified progress system, and a community platform — backed by Firebase and Supabase.",
                    note: "",
                    tags: ["Next.js", "TypeScript", "Firebase", "Supabase", "AssemblyAI"],
                    url: "https://voxa.club",
                    image: voxa,
                    isLogo: true,
                    border: "border-purple-400/35",
                    accent: "via-purple-400/55",
                    bg: "from-purple-500/15 via-purple-500/5 to-black/75",
                    tagCls: "bg-purple-400/10 border-purple-400/20 text-purple-200/80",
                    linkCls: "text-purple-300",
                  },
                  {
                    name: "aayanpathan.com",
                    description: "My personal portfolio built with Vite, React, TypeScript, and TailwindCSS. Features a glassmorphic design with interactive Vanta.js NET animations.",
                    note: "",
                    tags: ["React", "Vite", "TypeScript", "TailwindCSS", "Vanta.js"],
                    url: "http://www.aayanpathan.com",
                    image: AayanWeb,
                    isLogo: false,
                    border: "border-cyan-400/35",
                    accent: "via-cyan-400/55",
                    bg: "from-cyan-500/15 via-cyan-500/5 to-black/75",
                    tagCls: "bg-cyan-400/10 border-cyan-400/20 text-cyan-200/80",
                    linkCls: "text-cyan-300",
                  },
                ] as const
              ).map((p, i) => (
                <div
                  key={i}
                  className="relative h-80 [perspective:1200px] cursor-pointer select-none"
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setFlippedIndex(i);
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) setFlippedIndex(null);
                  }}
                  onClick={() => {
                    if (!window.matchMedia("(hover: hover)").matches)
                      setFlippedIndex((prev) => (prev === i ? null : i));
                  }}
                >
                  <div
                    className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
                    style={{ transform: flippedIndex === i ? "rotateY(180deg)" : "rotateY(0deg)" }}
                  >
                    {/* Front face */}
                    <div className={`absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] border ${p.border}`}>
                      {p.isLogo ? (
                        <div className={`w-full h-full bg-gradient-to-br ${p.bg} backdrop-blur-md flex items-center justify-center [backface-visibility:hidden]`}>
                          <img src={p.image} alt={p.name} className="h-16 object-contain opacity-90" />
                        </div>
                      ) : (
                        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover object-top" />
                      )}
                      {!p.isLogo && <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />}
                      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${p.accent} to-transparent`} />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">{p.name}</h3>
                        <p className="text-xs text-white/40 mt-0.5">hover · tap to flip</p>
                      </div>
                    </div>

                    {/* Back face */}
                    <div className={`absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] border ${p.border} bg-gradient-to-br ${p.bg} backdrop-blur-md p-6 flex flex-col justify-center gap-5 overflow-hidden`}>
                      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${p.accent} to-transparent`} />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
                        {p.note && <p className={`text-xs mt-2 italic ${p.linkCls} opacity-55`}>{p.note}</p>}
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                          {p.tags.map((tag) => (
                            <span key={tag} className={`text-xs px-2 py-0.5 rounded-md border ${p.tagCls}`}>{tag}</span>
                          ))}
                        </div>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-block ${p.linkCls} text-sm font-medium hover:underline`}
                        >
                          View Website →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pad">
          <div className="section-stack my-3">
            <h2 className="section-title">Technologies</h2>
          </div>

          {/* Full-bleed marquee (escapes the centered container) */}
          <div className="relative w-screen max-w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden isolate">
            {/* Edge fades to page background (#0f0f17) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 z-20 bg-gradient-to-r from-[#0f0f17] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 z-20 bg-gradient-to-l from-[#0f0f17] to-transparent" />

            <Marquee autoFill pauseOnHover speed={75} className="py-2">
              {techs.map(({ src, url }, i) => {
                const isExpressOrNext = src === EXPRESS || src === NEXT;
                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className={`h-28 xl:h-48 sm:h-15 mx-8 transition duration-300 ${isExpressOrNext
                        ? "filter invert brightness-40 hover:brightness-200"
                        : "grayscale opacity-80 hover:grayscale-0"
                        }`}
                    />
                  </a>
                );
              })}
            </Marquee>
          </div>
        </section>

        <section id="academics" className="section section-pad">
          <div className="section-stack">
            <h2 className="section-title">Academics</h2>
            <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">

              {/* Header */}
              <p className="text-white/35 text-xs text-center mb-4">GEMS Founders School — Al Barsha</p>

              {/* Tabs */}
              <div className="flex justify-center gap-2 mb-6">
                {(["gcse", "aslevel", "alevels"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setAcademicsTab(tab)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      academicsTab === tab
                        ? "bg-white/15 border border-white/25 text-white"
                        : "text-white/35 hover:text-white/60 border border-transparent"
                    }`}
                  >
                    {tab === "gcse" ? "GCSEs" : tab === "alevels" ? "A-Levels" : "AS-Levels"}
                  </button>
                ))}
              </div>

              {/* GCSEs */}
              {academicsTab === "gcse" && ([
                { subject: "Mathematics",             grade: "9" },
                { subject: "Computer Science",        grade: "9" },
                { subject: "Chemistry",               grade: "9" },
                { subject: "Psychology",              grade: "9" },
                { subject: "Physics",                 grade: "8" },
                { subject: "Business",                grade: "8" },
                { subject: "English Literature",      grade: "8" },
                { subject: "English Language",        grade: "7" },
                { subject: "Further Pure Mathematics",grade: "7" },
              ] as const).map(({ subject, grade }, i, arr) => (
                <div key={subject} className={`flex items-center justify-between py-2.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                  <span className="text-sm text-white/75">{subject}</span>
                  <span className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                    grade === "9" ? "bg-amber-500/20 border-amber-500/35 text-amber-400"       :
                    grade === "8" ? "bg-emerald-400/15 border-emerald-400/25 text-emerald-300" :
                                    "bg-sky-400/10 border-sky-400/20 text-sky-300"
                  }`}>{grade}</span>
                </div>
              ))}

              {/* A-Levels */}
              {academicsTab === "alevels" && ([
                { subject: "Mathematics",        grade: "A*", predicted: false },
                { subject: "Further Mathematics",grade: "A*", predicted: true  },
                { subject: "Physics",            grade: "A",  predicted: true  },
                { subject: "Computer Science",   grade: "A",  predicted: true  },
              ] as const).map(({ subject, grade, predicted }, i, arr) => (
                <div key={subject} className={`flex items-center justify-between py-2.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                  <span className="text-sm text-white/75">{subject}</span>
                  <div className="flex items-center gap-2">
                    {predicted && <span className="text-[11px] text-white/25 tracking-wide">predicted</span>}
                    <span className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                      grade === "A*" ? "bg-amber-500/20 border-amber-500/35 text-amber-400"        :
                                       "bg-emerald-400/15 border-emerald-400/25 text-emerald-300"
                    }`}>{grade}</span>
                  </div>
                </div>
              ))}

              {/* AS-Levels */}
              {academicsTab === "aslevel" && (<>
                {([
                  { subject: "Mathematics",        internal: false },
                  { subject: "Further Mathematics",internal: false },
                  { subject: "Physics",            internal: false },
                  { subject: "Computer Science",   internal: true  },
                ] as const).map(({ subject, internal }, i, arr) => (
                  <div key={subject} className={`flex items-center justify-between py-2.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                    <span className={`text-sm ${internal ? "text-white/40" : "text-white/75"}`}>{subject}</span>
                    <div className="flex items-center gap-2">
                      {internal && <span className="text-[11px] text-white/25 tracking-wide">internal</span>}
                      <span className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                        internal
                          ? "bg-white/5 border-white/10 border-dashed text-white/30"
                          : "bg-amber-500/20 border-amber-500/35 text-amber-400"
                      }`}>A</span>
                    </div>
                  </div>
                ))}
                <p className="text-white/25 text-[11px] mt-4 text-center">CS grade is teacher-assessed, not externally examined</p>
              </>)}

            </div>
          </div>
        </section>

        <section className="section section-pad">
          <div className="section-stack">
            <h2 className="section-title">Contact Me</h2>
            <p className="text-gray-300 text-lg">Interested in contacting me? Let's build something together!</p>
            <ContactForm />
          </div>
        </section>
      </div>
      <footer className="w-full py-20 flex flex-col items-center gap-1">
        {([
          { label: "LinkedIn",         href: "https://www.linkedin.com/in/mohammed-aayan-pathan/", hoverCls: "hover:text-[#5ba4e0]", lineCls: "bg-[#5ba4e0]" },
          { label: "GitHub",           href: "https://github.com/SyntaxSnipes",                   hoverCls: "hover:text-white",      lineCls: "bg-white"    },
          { label: "Curriculum Vitae", href: "../Aayan_CV_March15.pdf",                           hoverCls: "hover:text-cyan-300",   lineCls: "bg-cyan-400" },
        ] as const).map(({ label, href, hoverCls, lineCls }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-4xl md:text-5xl lg:text-6xl font-bold text-white/25 ${hoverCls} transition-colors duration-300 group leading-tight`}
          >
            {label}
            <span className={`absolute -bottom-0.5 left-0 h-px w-0 ${lineCls} transition-[width] duration-500 ease-out group-hover:w-full`} />
          </a>
        ))}
      </footer>
    </section>
  );
});

const Loader: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f17]">
    <SyncLoader color="#ffffff" loading size={50} />
  </div>
);

const App: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <Header />
      <MainContent />
    </>
  );
};

export default App;
