import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import FMImg from "./assets/FM.png";
import MIBgif from "./assets/mib.gif";
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
import emailjs from "@emailjs/browser";
import "./App.css";

declare global {
  interface Window {
    VANTA: any;
  }
}

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
      className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 space-y-5"
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
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}

function Header() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x80809,
        points: 20.0,
        maxDistance: 23.0,
        spacing: 20.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-25" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <header>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold">
            Mohammed Aayan
          </h1>
          <p className="mt-4 text-m md:text-xl text-gray-300 font-body">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1250}
              deleteSpeed={40}
              loop={0}
              typeSpeed={80}
              words={[
                "Crafting intelligent, minimal, cohesive code",
                "Full-Stack Web Developer",
                "Infusing Artificial Intelligence with user-ended applications",
                "MySQL-ERN technology stack",
              ]}
            />
          </p>
        </header>
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

  return (
    <section className="relative w-screen min-h-screen overflow-x-hidden text-white">
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none backdrop-blur-md"
      />

      <div className="relative z-10 flex flex-col items-center justify-center py-40 text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          I'm Mohammed Aayan Pathan. I am 16 years old, and I am from India
          though currently residing and studying in the UAE. I have been
          fascinated by technology since I was a toddler, and ever since, I've
          been on a journey to understand and leverage technology for
          practically everything! I am currently in Year 12, on my first year of
          the A Level course in GEMS Founders School Al Barsha.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">My Projects</h2>
        <div>
          <Parallax speed={5}>
            <div className="flex flex-col items-center mt-10 px-4">
              <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
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
          </Parallax>
          <Parallax speed={5}>
            <div className="flex flex-col items-center mt-10 px-4">
              <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6 object-contain">
                <div className="text-center sm:text-left text-white flex-1">
                  <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                    MIB:08{" "}
                  </h2>
                  <p className="text-gray-300 text-md sm:text-sm">
                    A website built with HTML, SCSS and JavaScript that emulates
                    industry styling and elements in an attempt to replicate
                    popular product webpages, marketing a hypothetical robot
                    product.
                  </p>
                  <a href="https://syntaxsnipes.github.io/Splash-Page/index.html">
                    View Website
                  </a>
                </div>

                <img
                  src={MIBgif}
                  alt="FormulaMetric Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg object-contain"
                />
              </div>
            </div>
          </Parallax>

          <Parallax speed={5}>
            <div className="flex flex-col items-center mt-10 px-4">
              <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-4">
                <div className="text-center sm:text-left text-white flex-1">
                  <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                    aayanpathan.com
                  </h2>
                  <p className="text-gray-300 text-md sm:text-sm">
                    Yes, this website is also a project, and you're viewing it
                    right now! Built with React + TypeScript with TailwindCSS.
                    Currently in development.
                  </p>
                  <a href="http://www.aayanpathan.com">View Website</a>
                </div>

                <img
                  src={AayanWeb}
                  alt="FormulaMetric Screenshot"
                  className="w-full sm:w-auto max-h-40 rounded-lg sm:rounded-md object-contain"
                />
              </div>
            </div>
          </Parallax>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">Technologies</h2>
        <span className="py-3">
          <Marquee autoFill className="gap-8 px-2">
            {[
              REACT,
              JS,
              TAILWIND,
              CSS,
              HTML5,
              NODE,
              MySQL,
              PYTHON,
              EXPRESS,
            ].map((src, i) => {
              const isExpress = src === EXPRESS;
              return (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className={`h-28 xl:h-48 sm:h-15 mx-8 grayscale opacity-80 hover:grayscale-0 focus:grayscale-0 transition duration-300
                  ${isExpress ? "invert" : ""}
                `}
                />
              );
            })}
          </Marquee>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">Academics</h2>
        <span className="flex xl:flex-row sm:flex-col gap-6 px-20">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-4">
            <div className="text-center sm:text-left text-white flex-1">
              <h2 className="text-2xl sm:text-xl font-semibold mb-2">GCSEs</h2>
              <p className="text-gray-300 text-md sm:text-sm">
                School: GEMS Founders School - Al Barsha <br /> I studied the
                following subjects: <br /> Mathematics, Computer Science,
                Chemistry, Psychology, Physics, Business, English Literature,
                English Language, Further Pure Mathematics
              </p>
              <h3>Grades: 999988877</h3>
            </div>
          </div>
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between p-6 gap-6">
            <div className="text-center sm:text-left text-white flex-1">
              <h2 className="text-2xl sm:text-xl font-semibold mb-2">
                A-Levels
              </h2>
              <p className="text-gray-300 text-md sm:text-sm">
                School: GEMS Founders School - Al Barsha <br /> I studied the
                following subjects: <br /> Mathematics, Further Mathematics,
                Physics, Computer Science
              </p>
              <h3>Grades: Predicted A* in Math, Predicted A in Physics and Computer Science</h3>
            </div>
          </div>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-10">Contact Me</h2>
        <ContactForm />
      </div>
          <footer className="w-full h-50 gap-7 flex flex-col">
      <h3 className="text-3xl md:text-4xl font-bold mt-2">My CV and Platforms</h3>
      <span className="flex flex-row gap-10 items-center justify-center"><a className="hover:underline text-cyan-400" target="_blank"href="https://www.linkedin.com/notifications/?filter=all">LinkedIn Profile</a><a className="hover:underline text-cyan-400" target="_blank"href="../mycv.pdf">CV</a><a className="hover:underline text-cyan-400" target="_blank" href="https://github.com/SyntaxSnipes">GitHub Profile</a></span>
    </footer>
    </section>
  );
}


function App() {
  return (
    <ParallaxProvider>
      <Header />
      <MainContent />
    </ParallaxProvider>
  );
}

export default App;
