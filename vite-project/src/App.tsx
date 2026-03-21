import { useEffect, useRef, useState, memo } from "react";
import { SyncLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";
import FMImg from "./assets/FM.png";
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
        console.log("Message sent to me ✅");

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
      <h2 className="text-2xl font-semibold text-white text-center">
        Let's Connect
      </h2>
      <p className="text-gray-300 text-center text-sm">I'd love to hear from you. Send me a message!</p>

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
          tracking-wide text-sm
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
              "Crafting intelligent, efficient, cohesive code",
              "Junior Engineering Associate (Full-Stack) @ Voxa",
              "Infusing Artificial Intelligence with user-ended applications",
              "MySQL-ERN technology stack",
              "Next.js and Tailwind Expertise",
              "International CS Competition Bronze Honor Finalist (top 8% internationally)",
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
          I am a full-stack web developer, specializing in Next.js and Tailwind. I'm flexible with SQL approaches such as MySQL or No-SQL approaches like Firebase. I place heavy priority on clean and user-oriented UIs. I believe form is function. I'm also proficient in Python, and have experience working with backends in Python, though I typically work with MySQL-ERN or Next.js routes.
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
                    2025 - Present
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
                      <span className="px-2 xl:py-0.5 sm:py-0 text-xs font-semibold rounded-full bg-[#b592ff]/15 text-[#b592ff] border border-[#b592ff]/40">
                        Current
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">October 2025 — Present</p>
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
                  <strong> Voxa </strong>— a full-stack, AI-powered web
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
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  AssemblyAI WebSocket live transcription and OpenAI API rapid
                  personalized feedback.
                </div>
                <div
                  className="
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  Firebase Auth, Firestore, and Storage integration with Next.js
                  Routes.
                </div>
                <div
                  className="
  bg-gradient-to-br from-zinc-900/65 via-neutral-900/50 to-black/35 border border-white/20 rounded-lg px-4 py-3 text-gray-200 text-center
  transition duration-300
  hover:bg-[#b592ff]/10 hover:border-[#b592ff]/40 hover:shadow-md hover:shadow-[#b592ff]/20
  hover:-translate-y-0.5
"
                >
                  Engaging XP system, onboarding flow & performance analytics.
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-pad">

          <div className="section-stack">
            <h2 className="section-title">My Projects</h2>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl bg-gradient-to-br from-yellow-500/5 via-white/5 to-transparent backdrop-blur-md border border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 ease-in-out rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
                <div className="text-center sm:text-left text-white flex-1">
                  <h3 className="subtitle">TLSearch</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    A semantic search engine for NASA Space Apps Challenge built with Next.js and FastAPI, using vector embeddings to query space biology research papers with AI-generated summaries.
                  </p>
                  <a
                    href="https://tlsearch.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f8ff48] hover:underline"
                  >
                    View Website
                  </a>
                </div>
                <img
                  loading="lazy"
                  src={tlsearch}
                  alt="TLSearch Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl bg-gradient-to-br from-rose-500/5 via-white/5 to-transparent backdrop-blur-md border border-rose-400/30 hover:border-rose-400/60 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 ease-in-out rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
                <div className="text-center sm:text-left text-white flex-1">
                  <h3 className="subtitle">
                    FormulaMetric
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    An intelligent F1 performance analytics tool built with MySQL, Express, React, and Node.js, featuring advanced statistical models for formula-level performance insights. In Progress...
                  </p>
                </div>
                <img
                  loading="lazy"
                  src={FMImg}
                  alt="FormulaMetric Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl bg-gradient-to-br from-purple-500/5 via-white/5 to-transparent backdrop-blur-md border border-purple-400/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
                <div className="text-center sm:text-left text-white flex-1">
                  <h3 className="subtitle">Voxa Voice App</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Voxa is an AI-powered public speaking coach built with Next.js, TypeScript, Firebase, and Supabase, featuring real-time transcription, instant feedback, and a supportive community.
                  </p>
                  <a
                    href="https://voxa.club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b592ff] hover:underline"
                  >
                    View Website
                  </a>
                </div>
                <img
                  loading="lazy"
                  src={voxa}
                  alt="Voxa Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl bg-gradient-to-br from-cyan-500/5 via-white/5 to-transparent backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ease-in-out rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
                <div className="text-center sm:text-left text-white flex-1">
                  <h3 className="subtitle">aayanpathan.com</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    My personal portfolio and blog, built with Vite, React, TypeScript, and Tailwind CSS with interactive Vanta.js animations.
                  </p>
                  <a
                    href="http://www.aayanpathan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    View Website
                  </a>
                </div>
                <img
                  loading="lazy"
                  src={AayanWeb}
                  alt="Portfolio Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
                />
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

            <Marquee autoFill pauseOnHover speed={55} className="py-2">
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

            <div className="flex flex-col lg:flex-row gap-8">
              {/* GCSEs */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
                <h3 className="subtitle mb-4">GCSEs</h3>
                <p className="text-white/80 text-center mb-2">
                  <strong>School:</strong> GEMS Founders School — Al Barsha
                </p>
                <p className="text-white/70 text-center text-sm leading-relaxed mb-6">
                  <strong className="text-white">Subjects:</strong> Mathematics,
                  Computer Science, Chemistry, Psychology, Physics, Business,
                  English Literature, English Language, Further Pure
                  Mathematics.
                </p>
                <div className="flex justify-center">
                  <span className="inline-block text-cyan-400 border border-cyan-400 px-5 py-2 text-sm rounded-full bg-white/5 backdrop-blur-sm hover:bg-cyan-400 hover:text-black transition-colors duration-300">
                    Grades: 999988877 (equivalent to A*A*A*A*A*A*A*AA)
                  </span>
                </div>
              </div>

              {/* A-Levels */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-zinc-900/60 via-neutral-900/45 to-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-500/20 flex flex-col justify-between">
                <h3 className="subtitle mb-4">A-Levels</h3>
                <p className="text-white/80 text-center mb-2">
                  <strong>School:</strong> GEMS Founders School — Al Barsha
                </p>
                <p className="text-white/70 text-center text-sm leading-relaxed mb-6">
                  <strong className="text-white">Subjects:</strong> Mathematics,
                  Further Mathematics, Physics, Computer Science.
                </p>
                <div className="flex justify-center">
                  <span className="inline-block text-emerald-400 border border-emerald-400 px-5 py-2 text-sm rounded-full bg-white/5 backdrop-blur-sm hover:bg-emerald-400 hover:text-black transition-colors duration-300">
                    A* in Math, A in AS Physics and Further Math, Predicted A* in Further Math,
                    and A in Physics and CS
                  </span>
                </div>
              </div>
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
      <footer className="w-full h-50 gap-7 flex flex-col py-10">
        <h3 className="text-3xl md:text-4xl font-bold mt-2 z-1">
          My CV and Platforms
        </h3>
        <span className="flex flex-row gap-10 items-center justify-center z-1">
          <a
            className="hover:underline text-cyan-400 z-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohammed-aayan-pathan/"
          >
            LinkedIn Profile
          </a>
          <a
            className="hover:underline text-cyan-400 z-1"
            target="_blank"
            rel="noopener noreferrer"
            href="../Aayan_CV_March15.pdf"
          >
            CV
          </a>
          <a
            className="hover:underline text-cyan-400 z-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SyntaxSnipes"
          >
            GitHub Profile
          </a>
        </span>
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
