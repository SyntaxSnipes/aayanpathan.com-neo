import { useEffect, useRef, useState, memo } from "react";
import { SyncLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";
import FMImg from "./assets/FMss.png";
import voxa from "./assets/voxatextlogo.svg";
import ausEmblem from "./assets/aus-emblem.png";
import Marquee from "react-fast-marquee";
import tlsearch from "./assets/tlsearch.png";
import unimetric from "./assets/UMss.png";
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

function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const points = Array.from({ length: window.innerWidth < 640 ? 48 : 52 }, () => ({
      x: Math.random(),
      y: Math.random(),
      velocityX: (Math.random() - 0.5) * 0.00012,
      velocityY: (Math.random() - 0.5) * 0.00012,
    }));
    const pointer = { x: -1000, y: -1000 };
    const connectionDistance = window.innerWidth < 640 ? 92 : 145;
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      animationFrame = 0;
      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        if (!prefersReducedMotion) {
          point.x += point.velocityX;
          point.y += point.velocityY;
          if (point.x < 0 || point.x > 1) point.velocityX *= -1;
          if (point.y < 0 || point.y > 1) point.velocityY *= -1;
        }

        const x = point.x * width;
        const y = point.y * height;
        const distanceToPointer = Math.hypot(x - pointer.x, y - pointer.y);
        const proximity = Math.max(0, 1 - distanceToPointer / 180);
        context.beginPath();
        context.arc(x, y, 1.2 + proximity * 1.5, 0, Math.PI * 2);
        context.fillStyle = `rgba(143, 162, 248, ${0.3 + proximity * 0.45})`;
        context.fill();
      });

      for (let index = 0; index < points.length; index += 1) {
        const first = points[index];
        const firstX = first.x * width;
        const firstY = first.y * height;
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const second = points[nextIndex];
          const distance = Math.hypot(
            firstX - second.x * width,
            firstY - second.y * height,
          );
          if (distance > connectionDistance) continue;
          const opacity = (1 - distance / connectionDistance) * 0.16;
          context.beginPath();
          context.moveTo(firstX, firstY);
          context.lineTo(second.x * width, second.y * height);
          context.strokeStyle = `rgba(143, 162, 248, ${opacity})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }

      if (!prefersReducedMotion && document.visibilityState === "visible") {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const resetPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && !animationFrame) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetPointer);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="constellation-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
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
  const [submitState, setSubmitState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = form.current;
    if (!formEl) return;

    const userName = formEl.user_name.value;
    const userEmail = formEl.user_email.value;
    setSubmitState("sent");
    formEl.reset();

    emailjs
      .sendForm(
        "service_2zlojgi",
        "template_1deljjl",
        formEl,
        "cvuiRUMw64Soebb11",
      )
      .then(() => {
        console.log("Message sent to me");

        emailjs
          .send(
            "service_2zlojgi",
            "template_9hll0nc",
            {
              user_name: userName,
              user_email: userEmail,
            },
            "cvuiRUMw64Soebb11",
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
        hover:shadow-2xl hover:shadow-[#8fa2f8]/20 hover:border-white/40
      "
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8fa2f8] focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8fa2f8] focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="w-full px-4 py-3 rounded-xl bg-white/7 border border-white/20 placeholder-gray-400 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8fa2f8] focus:bg-white/12 focus:border-white/40 hover:bg-white/10 hover:border-white/30 resize-none"
      />

      {submitState === "sent" && (
        <p
          role="status"
          className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-center text-sm font-medium text-emerald-200"
        >
          Message sent successfully. Thanks for reaching out!
        </p>
      )}

      {submitState === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-center text-sm font-medium text-red-200"
        >
          Something went wrong while sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "sending" || submitState === "sent"}
        className={`
          w-full text-white font-bold py-3 rounded-xl
          active:scale-95 tracking-wide text-sm
          ${submitState === "sent"
            ? "cursor-default bg-emerald-500/80"
            : "cursor-pointer bg-gradient-to-r from-[#8fa2f8] to-[#8fa2f8]"}
          disabled:cursor-not-allowed disabled:opacity-60
        `}
      >
        {submitState === "sending"
          ? "Sending..."
          : submitState === "sent"
            ? "Message Sent ✓"
            : "Send Message"}
      </button>
    </form>
  );
});

const Header = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  useVantaNet(ref);
  return (
    <div
      ref={ref}
      className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white">
          Mohammed Aayan Pathan
        </h1>
        <p className="mt-4 min-h-14 text-lg md:text-xl text-gray-300 max-w-xl">
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
  const [academicsTab, setAcademicsTab] = useState<
    "gcse" | "alevels" | "aslevel"
  >("gcse");

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
    <section
      className="relative w-screen min-h-screen overflow-x-clip text-white"
    >
      <div className="relative z-10 section section-pad section-stack">
        <h2 className="section-title relative z-20">About Me</h2>
        <p className="text-md md:text-xl sm:text-lg text-gray-200 max-w-xl px-6 sm:px:6 lg:px-16 xl:px-0 leading-relaxed relative z-20">
          I'm Mohammed Aayan Pathan. I'm 18 years old and I'm from India, though
          I reside, study and work in the UAE. I've been fascinated by the
          technical ingenunity and capabilities of technology since a young age,
          and ever since, I've been on a journey to understand and leverage
          technology for practically everything! I am currently a freshman majoring in Computer Science at the American University of Sharjah.
          <br />
          <br />I am a full-stack web developer, specializing in Next.js and
          TailwindCSS. I'm flexible with SQL approaches such as MySQL or No-SQL
          approaches like Firebase or Supabase. I place heavy priority on clean
          and user-oriented UIs; I believe form is function. I'm also proficient
          in Python and C++, and have experience working with backends in
          Python, though I typically work with MySQL-ERN or Next.js routes.
        </p>

        <section
          id="experience"
          className="section section-pad"
        >
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
                    <p className="text-sm text-gray-400">
                      October 2025 - April 2026
                    </p>
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
                  Firebase Auth, Firestore, and Storage and now Supabase
                  integration with Next.js Routes.
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
                  Engaging progress system, onboarding flow & performance
                  analytics.
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
                    description:
                      "A semantic search engine built with Next.js and FastAPI, using vector embeddings to query space biology research papers with AI-generated summaries.",
                    note: "Initial load may exceed 1 min due to Render inactivity.",
                    tags: [
                      "Next.js",
                      "FastAPI",
                      "Python",
                      "Vector Embeddings",
                      "AI",
                    ],
                    url: "https://tlsearch.org",
                    image: tlsearch,
                    isLogo: false,
                    border: "border-yellow-400/35",
                    accent: "via-yellow-400/55",
                    bg: "from-yellow-500/15 via-yellow-500/5 to-black/75",
                    tagCls:
                      "bg-yellow-400/10 border-yellow-400/20 text-yellow-200/80",
                    linkCls: "text-yellow-300",
                  },
                  {
                    name: "FormulaMetric",
                    description:
                      "Intelligent F1 performance analytics using z-score, quartile trend analysis, sigmoid transformations and team-mate ratio comparisons for objective driver insight.",
                    note: "Initial load may exceed 1 min due to Render inactivity.",
                    tags: [
                      "MySQL",
                      "Express",
                      "React",
                      "Node.js",
                      "Vercel",
                      "Aiven",
                    ],
                    url: "https://www.formulametric.com",
                    image: FMImg,
                    isLogo: false,
                    border: "border-rose-400/35",
                    accent: "via-rose-400/55",
                    bg: "from-rose-500/15 via-rose-500/5 to-black/75",
                    tagCls:
                      "bg-rose-400/10 border-rose-400/20 text-rose-200/80",
                    linkCls: "text-rose-300",
                  },
                  {
                    name: "Voxa Voice App",
                    description:
                      "An AI-powered public speaking coach built with Next.js and TypeScript. Features real-time voice transcription via AssemblyAI, instant personalised feedback powered by OpenAI, a gamified progress system, and a community platform - backed by Firebase and Supabase.",
                    note: "",
                    tags: [
                      "Next.js",
                      "TypeScript",
                      "Firebase",
                      "Supabase",
                      "AssemblyAI",
                    ],
                    url: "https://voxa.club",
                    image: voxa,
                    isLogo: true,
                    border: "border-purple-400/35",
                    accent: "via-purple-400/55",
                    bg: "from-purple-500/15 via-purple-500/5 to-black/75",
                    tagCls:
                      "bg-purple-400/10 border-purple-400/20 text-purple-200/80",
                    linkCls: "text-purple-300",
                  },
                  {
                    name: "UniMetric",
                    description:
                      "Reweight QS's 10 ranking factors to build your own personalised university ranking across 1,500+ institutions and 5 years of data.",
                    note: "",
                    tags: ["React", "Vite", "TypeScript", "TailwindCSS"],
                    url: "https://syntaxsnipes.github.io/UniMetric/",
                    image: unimetric,
                    isLogo: false,
                    border: "border-[#8fa2f8]/35",
                    accent: "via-[#8fa2f8]/55",
                    bg: "from-[#8fa2f8]/15 via-[#8fa2f8]/5 to-black/75",
                    tagCls:
                      "bg-[#8fa2f8]/10 border-[#8fa2f8]/20 text-[#8fa2f8]/80",
                    linkCls: "text-[#8fa2f8]",
                  },
                ] as const
              ).map((p, i) => (
                <div
                  key={i}
                  className="relative h-80 [perspective:1200px] cursor-pointer select-none"
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches)
                      setFlippedIndex(i);
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches)
                      setFlippedIndex(null);
                  }}
                  onClick={() => {
                    if (!window.matchMedia("(hover: hover)").matches)
                      setFlippedIndex((prev) => (prev === i ? null : i));
                  }}
                >
                  <div
                    className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
                    style={{
                      transform:
                        flippedIndex === i
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                    }}
                  >
                    {/* Front face */}
                    <div
                      className={`absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] border ${p.border}`}
                    >
                      {p.isLogo ? (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${p.bg} flex items-center justify-center`}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-16 object-contain opacity-90"
                          />
                        </div>
                      ) : (
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      )}
                      {!p.isLogo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      )}
                      <div
                        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${p.accent} to-transparent`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">
                          {p.name}
                        </h3>
                        <p className="text-xs text-white/40 mt-0.5">
                          hover · tap to flip
                        </p>
                      </div>
                    </div>

                    {/* Back face */}
                    <div
                      className={`absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] border ${p.border} bg-gradient-to-br ${p.bg} backdrop-blur-md p-6 flex flex-col justify-center gap-5 overflow-hidden`}
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${p.accent} to-transparent`}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {p.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {p.description}
                        </p>
                        {p.note && (
                          <p
                            className={`text-xs mt-2 italic ${p.linkCls} opacity-55`}
                          >
                            {p.note}
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs px-2 py-0.5 rounded-md border ${p.tagCls}`}
                            >
                              {tag}
                            </span>
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

        <section
          id="academics"
          className="section section-pad"
        >
          <div className="section-stack">
            <h2 className="section-title">Academics</h2>
            <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg text-left">
              <div className="grid gap-6 lg:grid-cols-[minmax(360px,1fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white/35 via-white/10 to-transparent" />
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <img
                    src={ausEmblem}
                    alt="American University of Sharjah emblem"
                    className="h-12 w-12 shrink-0 opacity-75 mix-blend-multiply"
                  />
                  <div className="min-w-0">
                    <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.14em]">
                      Bachelor of Science in Computer Science (BSCS)
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-tight text-white sm:whitespace-nowrap">
                      American University of Sharjah
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      Academic Standing: Freshman I
                    </p>
                  </div>
                  <span className="col-span-2 mt-1 w-fit whitespace-nowrap rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/65">
                    2026 - 2030
                  </span>
                </div>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/65">
                  I am currently pursuing a Bachelor of Science in Computer
                  Science at AUS and intend to specialize in Software
                  Engineering (SE). My studies are strengthening my foundations
                  in computing while preparing me to design, build, and
                  maintain reliable software systems.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/65">
                  <span aria-hidden="true" className="text-white/50">✦</span>
                  Distinguished Student Scholarship Recipient
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    Academic journey
                  </p>
                  <div className="relative mt-4 grid grid-cols-4 gap-2">
                    <div className="absolute left-[12.5%] right-[12.5%] top-2.5 h-px bg-gradient-to-r from-white/20 via-[#8fa2f8]/40 to-transparent" />
                    {[
                      {
                        title: "GCSEs",
                        detail: "Completed",
                        caption: "",
                        active: false,
                      },
                      {
                        title: "AS-Levels",
                        detail: "Completed",
                        caption: "",
                        active: false,
                      },
                      {
                        title: "A-Levels",
                        detail: "Completed",
                        caption: "",
                        active: false,
                      },
                      {
                        title: "AUS",
                        detail: "2026 - Now",
                        caption: "",
                        active: true,
                      },
                    ].map(({ title, detail, caption, active }) => (
                      <div key={title} className="relative min-w-0 text-center">
                        <span
                          className={`relative z-10 mx-auto block h-5 w-5 rounded-full border ${
                            active
                              ? "border-[#8fa2f8]/70 bg-[#8fa2f8]/20 shadow-[0_0_10px_rgba(143,162,248,0.3)]"
                              : "border-white/30 bg-[#17171f]"
                          }`}
                        />
                        <p
                          className={`mt-2 truncate text-[11px] font-medium ${
                            active ? "text-white" : "text-white/65"
                          }`}
                        >
                          {title}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-white/40">
                          {detail}
                        </p>
                        {caption && (
                          <p className="mt-0.5 truncate text-[9px] text-white/25">
                            {caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="min-w-0 border-white/10 lg:border-l lg:pl-8">
                <div className="mb-4 text-center lg:text-left">
                  <p className="text-white/55 text-sm font-medium">
                    School qualifications
                  </p>
                  <p className="mt-1 text-white/30 text-xs">
                    GEMS Founders School - Al Barsha
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-4 lg:justify-start">
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
                    {tab === "gcse"
                      ? "GCSEs"
                      : tab === "alevels"
                        ? "A-Levels"
                        : "AS-Levels"}
                  </button>
                ))}
              </div>

                <div className="h-[22rem] min-w-0 overflow-x-hidden overflow-y-auto pr-1 lg:h-auto">
                  {/* GCSEs */}
                  {academicsTab === "gcse" &&
                (
                  [
                    { subject: "Mathematics", grade: "9" },
                    { subject: "Computer Science", grade: "9" },
                    { subject: "Chemistry", grade: "9" },
                    { subject: "Psychology", grade: "9" },
                    { subject: "Physics", grade: "8" },
                    { subject: "Business", grade: "8" },
                    { subject: "English Literature", grade: "8" },
                    { subject: "English Language", grade: "7" },
                    { subject: "Further Pure Mathematics", grade: "7" },
                  ] as const
                ).map(({ subject, grade }, i, arr) => (
                  <div
                    key={subject}
                    className={`flex items-center justify-between py-1.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}
                  >
                    <span className="text-sm text-white/75">{subject}</span>
                    <span
                      className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                        grade === "9"
                          ? "bg-amber-500/20 border-amber-500/35 text-amber-400"
                          : grade === "8"
                            ? "bg-emerald-400/15 border-emerald-400/25 text-emerald-300"
                            : "bg-[#8fa2f8]/10 border-[#8fa2f8]/20 text-[#8fa2f8]"
                      }`}
                    >
                      {grade}
                    </span>
                  </div>
                ))}

                  {/* A-Levels */}
                  {academicsTab === "alevels" &&
                (
                  [
                    { subject: "Mathematics", grade: "A*" },
                    { subject: "Computer Science", grade: "A*" },
                    { subject: "Further Mathematics", grade: "A" },
                    { subject: "Physics", grade: "A" },
                  ] as const
                ).map(({ subject, grade }, i, arr) => (
                  <div
                    key={subject}
                    className={`flex items-center justify-between py-1.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}
                  >
                    <span className="text-sm text-white/75">{subject}</span>
                    <div className="flex items-center gap-2">
                      {
                        <span className="text-[11px] text-white/25 tracking-wide"></span>
                      }
                      <span
                        className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                          grade === "A*"
                            ? "bg-amber-500/20 border-amber-500/35 text-amber-400"
                            : "bg-emerald-400/15 border-emerald-400/25 text-emerald-300"
                        }`}
                      >
                        {grade}
                      </span>
                    </div>
                  </div>
                ))}

                  {/* AS-Levels */}
                  {academicsTab === "aslevel" && (
                <>
                  {(
                    [
                      { subject: "Mathematics", internal: false },
                      { subject: "Further Mathematics", internal: false },
                      { subject: "Physics", internal: false },
                      { subject: "Computer Science", internal: true },
                    ] as const
                  ).map(({ subject, internal }, i, arr) => (
                    <div
                      key={subject}
                      className={`flex items-center justify-between py-1.5 -mx-2 px-2 rounded-lg hover:bg-white/5 transition-colors duration-150 ${i < arr.length - 1 ? "border-b border-white/[0.07]" : ""}`}
                    >
                      <span
                        className={`text-sm ${internal ? "text-white/40" : "text-white/75"}`}
                      >
                        {subject}
                      </span>
                      <div className="flex items-center gap-2">
                        {internal && (
                          <span className="text-[11px] text-white/25 tracking-wide">
                            internal
                          </span>
                        )}
                        <span
                          className={`text-xs font-bold inline-flex items-center justify-center min-w-[2.25rem] py-0.5 rounded-full border ${
                            internal
                              ? "bg-white/5 border-white/10 border-dashed text-white/30"
                              : "bg-amber-500/20 border-amber-500/35 text-amber-400"
                          }`}
                        >
                          A
                        </span>
                      </div>
                    </div>
                  ))}
                  <p className="text-white/25 text-[11px] mt-4 text-center">
                    CS grade is teacher-assessed, not externally examined
                  </p>
                </>
                  )}
                </div>
              </div>
              </div>
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
                const isExpressOrNext = src === EXPRESS;
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
                      className={`h-28 xl:h-48 sm:h-15 mx-8 transition duration-300 ${
                        isExpressOrNext
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

        <section className="section section-pad">
          <div className="section-stack">
            <h2 className="section-title">Contact Me</h2>
            <p className="text-gray-300 text-lg">
              
              Interested in contacting me? Let's build something together!
            
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
      <footer className="w-full py-20 flex flex-col items-center gap-1">
        {(
          [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/mohammed-aayan-pathan/",
              hoverCls: "hover:text-[#8fa2f8]",
              lineCls: "bg-[#8fa2f8]",
            },
            {
              label: "GitHub",
              href: "https://github.com/SyntaxSnipes",
              hoverCls: "hover:text-white",
              lineCls: "bg-white",
            },
            {
              label: "Curriculum Vitae",
              href: "../Aayan_CV_October10A.pdf",
              hoverCls: "hover:text-[#8fa2f8]",
              lineCls: "bg-[#8fa2f8]",
            },
          ] as const
        ).map(({ label, href, hoverCls, lineCls }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-4xl md:text-5xl lg:text-6xl font-bold text-white/25 ${hoverCls} transition-colors duration-300 group leading-tight`}
          >
            {label}
            <span
              className={`absolute -bottom-0.5 left-0 h-px w-0 ${lineCls} transition-[width] duration-500 ease-out group-hover:w-full`}
            />
            <span
              className={`absolute -bottom-0.5 left-0 h-px w-0 ${lineCls} transition-[width] duration-500 ease-out group-hover:w-full`}
            />
          </a>
        ))}
      </footer>
    </section>
  );
});

const Loader: React.FC = () => (
  <div className="site-loader flex items-center justify-center bg-[#0f0f17]">
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
    <div className="site-shell">
      <ConstellationBackground />
      {showLoader && <Loader />}
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
