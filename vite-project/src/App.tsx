import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SyncLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";
import FMImg from "./assets/FM.png";
import voxa from "./assets/voxa.png";
import Marquee from "react-fast-marquee";
import AayanWeb from "./assets/aayanweb.png";
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
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function ContactForm() {
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
        max-w-2xl mx-6
        bg-white/10 backdrop-blur-md
        border border-white/20
        rounded-2xl
        shadow-lg
        p-6 space-y-5

        /* 🚀 stronger hover glow */
        transition-shadow duration-300
        hover:shadow-cyan-400/40 hover:shadow-xl
      "
    >
      <h2 className="text-2xl font-semibold text-white text-center">
        Send me an email
      </h2>

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <button
        type="submit"
        className="
          w-full bg-cyan-500
          text-white font-semibold py-3 rounded-lg
          transition transform duration-300
          hover:scale-101 hover:shadow-lg hover:shadow-cyan-500/50
        "
      >
        Send Message
      </button>
    </form>
  );
}

export function Header({ setLoading }: { setLoading: (loading: boolean) => void }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let idleId: number;

    const initVanta = () => {
      if (vantaRef.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x080809,
          points: window.innerWidth < 640 ? 10 : 20,
          maxDistance: window.innerWidth < 640 ? 15 : 23,
          spacing: 20.0,
        });
        setLoading(false);
      }
    };

    if (window.requestIdleCallback) {
      idleId = window.requestIdleCallback(initVanta);
    } else {
      idleId = window.setTimeout(initVanta, 500);
    }

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      vantaEffect.current?.destroy();
    };
  }, [setLoading]);

  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta background */}
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-25" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold">
          Mohammed Aayan
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          <Typewriter
            words={[
              "Crafting intelligent, minimal, cohesive code",
              "Full-Stack Web Developer",
              "Infusing Artificial Intelligence with user-ended applications",
              "MySQL-ERN technology stack",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1250}
          />
        </p>
      </div>
    </div>
  );
}

function MainContent() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const setupVanta = () => {
      if (!vantaEffect && window.VANTA?.TOPOLOGY && vantaRef.current) {
        setVantaEffect(
          window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            backgroundColor: 0x080809,
          })
        );
      }
    };

    // Delay initialization to ensure layout is stable
    const timeout = setTimeout(setupVanta, 500);

    return () => {
      clearTimeout(timeout);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
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
    <section className="relative w-screen min-h-screen overflow-x-hidden text-white">
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none backdrop-blur-md"
      />

      <div className="relative z-10 flex flex-col items-center justify-center py-40 text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="text-sm md:text-xl sm:text-lg text-gray-300 max-w-xl px-16 xl:px-0">
          I'm Mohammed Aayan Pathan. I am 16 years old, and I am from India
          though currently residing and studying in the UAE. I have been
          fascinated by technology since I was a toddler, and ever since, I've
          been on a journey to understand and leverage technology for
          practically everything! I am currently in Year 12, on my first year of
          the A Level course in GEMS Founders School Al Barsha.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">My Experience</h2>
        <div className="flex flex-col items-center mt-4 px-4">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-[#34d399]/30 transition-shadow duration-300 relative overflow-hidden group">
            {/* Gradient left accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#34d399] via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Inner content */}
            <div className="p-6 sm:p-8 space-y-4">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={voxa}
                    alt="VOXA logo"
                    className="w-10 h-10 rounded-md object-contain bg-[#a7f3d0]/10 p-1 border border-[#34d399]/30"
                  />
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-none">
                      Product & App Development Intern
                    </h3>
                    <span className="text-sm sm:text-base text-gray-500 leading-none mt-[2px]">
                      2025
                    </span>
                  </div>
                </div>
                <a
                  href="https://voxa.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#34d399] hover:underline"
                >
                  Visit →
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                As part of a cross-functional development team, I contributed to
                building <strong>Voxa</strong> — a full-stack, AI-powered web
                application designed to enhance public speaking skills. I worked
                on everything from voice processing to user experience,
                integrating real-time transcription, feedback mechanisms, and
                gamified user progress.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                I deployed the application using <strong>Vercel</strong> and
                maintained version control via <strong>GitHub</strong>,
                collaborating with developers to review code, manage issues, and
                deliver scalable solutions. My role demanded adaptability,
                attention to detail, and clear communication with both technical
                and non-technical stakeholders. Learn more in the My Projects
                section.
              </p>

              {/* Feature Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 text-sm mt-4">
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200 hover:bg-[#34d399]/10 transition flex items-center justify-center text-center">
                  AssemblyAI WebSocket live transcription and OpenAI API rapid
                  personalized feedback.
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200 hover:bg-[#34d399]/10 transition flex items-center justify-center text-center">
                  Firebase Auth, Firestore, and Storage integration with NextJS
                  Routes.
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200 hover:bg-[#34d399]/10 transition flex items-center justify-center text-center">
                  Engaging XP system, onboarding flow & performance analytics
                  for seammless user-experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">My Projects</h2>
        <div>
          {/* FormulaMetric – Red */}
          <div className="flex flex-col items-center mt-10 px-4">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-rose-500 hover:bg-gradient-to-br hover:from-rose-500/10 hover:to-white/5 transition-all duration-300 ease-in-out rounded-2xl shadow-xl flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
              <div className="text-center sm:text-left text-white flex-1">
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                  FormulaMetric
                </h2>
                <p className="text-gray-300 text-md sm:text-sm">
                  An intelligent F1 performance analytics tool built using
                  MySQL-ERN stack and advanced statistical models. In
                  Progress...
                </p>
              </div>
              <img
                src={FMImg}
                alt="FormulaMetric Screenshot"
                className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Voxa – Green */}
          <div className="flex flex-col items-center mt-10 px-4">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-400/10 hover:to-white/5 transition-all duration-300 ease-in-out rounded-2xl shadow-xl flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
              <div className="text-center sm:text-left text-white flex-1">
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                  Voxa Voice App
                </h2>
                <p className="text-gray-300 text-md sm:text-sm">
                  Voxa is an AI-powered public speaking coach that helps users
                  improve their communication through real-time transcription,
                  instant feedback, and a supportive community. Built with
                  Next.js, React, Firebase, and AssemblyAI, it also includes
                  gamified XP and level tracking to encourage regular practice.
                </p>
                <a
                  href="https://voxa.club"
                  className="text-emerald-400 hover:underline"
                  target="_blank"
                >
                  View Website
                </a>
              </div>
              <img
                src={voxa}
                alt="Voxa Screenshot"
                className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Portfolio – Blue */}
          <div className="flex flex-col items-center mt-10 px-4">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-sky-500 hover:bg-gradient-to-br hover:from-sky-500/10 hover:to-white/5 transition-all duration-300 ease-in-out rounded-2xl shadow-xl flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
              <div className="text-center sm:text-left text-white flex-1">
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                  aayanpathan.com
                </h2>
                <p className="text-gray-300 text-md sm:text-sm">
                  Yes, this website is also a project, and you're viewing it
                  right now! Built with React + TypeScript with TailwindCSS.
                  Currently in development.
                </p>
                <a
                  href="http://www.aayanpathan.com"
                  className="text-sky-400 hover:underline"
                  target="_blank"
                >
                  View Website
                </a>
              </div>
              <img
                src={AayanWeb}
                alt="Portfolio Screenshot"
                className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">Technologies</h2>
        <Marquee autoFill className="gap-8 px-2">
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

        <section
          id="academics"
          className="w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto py-20"
        >
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-white">
            Academics
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* GCSEs */}
            <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                GCSEs
              </h3>
              <p className="text-white/80 text-center mb-2">
                <strong>School:</strong> GEMS Founders School — Al Barsha
              </p>
              <p className="text-white/70 text-center mb-6 text-sm leading-relaxed">
                <strong className="text-white">Subjects:</strong> Mathematics,
                Computer Science, Chemistry, Psychology, Physics, Business,
                English Literature, English Language, Further Pure Mathematics.
              </p>
              <div className="flex justify-center">
                <span className="inline-block text-cyan-400 border border-cyan-400 px-5 py-2 text-sm rounded-full bg-white/5 backdrop-blur-sm hover:bg-cyan-400 hover:text-black transition-colors duration-300">
                  Grades: 999988877
                </span>
              </div>
            </div>

            {/* A-Levels */}
            <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-500/20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-center text-white mb-4">
                  A-Levels
                </h3>
                <p className="text-white/80 text-center mb-2">
                  <strong>School:</strong> GEMS Founders School — Al Barsha
                </p>
                <p className="text-white/70 text-center mb-6 text-sm leading-relaxed">
                  <strong className="text-white">Subjects:</strong> Mathematics,
                  Further Mathematics, Physics, Computer Science.
                </p>
              </div>
              <div className="flex justify-center">
                <span className="inline-block text-emerald-400 border border-emerald-400 px-5 py-2 text-sm rounded-full bg-white/5 backdrop-blur-sm hover:bg-emerald-400 hover:text-black transition-colors duration-300">
                  Predicted: A* in Math, A in Physics & CS
                </span>
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-3xl md:text-4xl font-bold mt-10">Contact Me</h2>
        <ContactForm />
      </div>
      <footer className="w-full h-50 gap-7 flex flex-col">
        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          My CV and Platforms
        </h3>
        <span className="flex flex-row gap-10 items-center justify-center">
          <a
            className="hover:underline text-cyan-400"
            target="_blank"
            href="https://www.linkedin.com/in/mohammed-aayan-pathan/"
          >
            LinkedIn Profile
          </a>
          <a
            className="hover:underline text-cyan-400"
            target="_blank"
            href="../mycv.pdf"
          >
            CV
          </a>
          <a
            className="hover:underline text-cyan-400"
            target="_blank"
            href="https://github.com/SyntaxSnipes"
          >
            GitHub Profile
          </a>
        </span>
      </footer>
    </section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <SyncLoader
            color="#ffffff"
            loading={true}
            cssOverride={override}
            size={150}
          />
        </div>
      )}

      <Header setLoading={setLoading} />
      <MainContent />
    </>
  );
}

export default App;
