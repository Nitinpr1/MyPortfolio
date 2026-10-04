import { github } from "../assets/index";
import { instagram } from "../assets/index";
import { link } from "../assets/index";
import { twitter } from "../assets/index";

const stack = ["MongoDB", "Express", "React", "Node.js", "SQL"];

const socials = [
  { href: "https://www.linkedin.com/in/nitin-prajapati1/", src: link, alt: "LinkedIn" },
  { href: "https://github.com/Nitinpr1", src: github, alt: "GitHub" },
  { href: "https://www.instagram.com/nitin_prajapati15/", src: instagram, alt: "Instagram" },
  { href: "https://twitter.com/NitinPr_01", src: twitter, alt: "X (Twitter)" },
];

// old code
// const Home = ({ openForm }) => {
//   return (
//     <section
//       id="home"
//       className="w-full flex flex-col justify-center items-center max-container md:pt-[100px]"
//     >
//       {/* Avatar */}
//       <div
//         data-aos="zoom-out-up"
//         data-aos-duration="1000"
//         className="relative mb-6"
//       >
//         <div className="bg-gradient-to-r from-orange-300 to-coral-red w-[95px] h-[95px] rounded-full border-2 border-gray-300 dark:border-red-300 flex items-center justify-center">
//           <img
//             src={nitinnew}
//             alt="Nitin Prajapati"
//             className="w-[85px] h-[85px] rounded-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Title */}
//       <h1
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         className="text-3xl md:text-5xl font-bold font-palanquin text-center"
//       >
//         <span className="text-coral-red pr-2">Nitin</span>
//         Prajapati
//       </h1>

//       {/* Role Tagline */}
//       <p
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         className="text-lg text-coral-red font-montserrat mt-2 mb-4"
//       >
//         {"< Full Stack Web Developer />"}
//       </p>

//       {/* Intro Description */}
//       <p
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         className="text-base md:text-lg font-montserrat text-slate-700 dark:text-slate-400 text-center md:w-3/4 lg:w-2/3 mb-6 px-4 leading-relaxed"
//       >
//         I am a passionate Full Stack Web Developer with expertise in{" "}
//         <b>MERN stack</b>. From crafting engaging user interfaces to building
//         robust backends and RESTful APIs, I enjoy bringing ideas to life in the
//         digital world. With creativity and problem-solving skills, I strive to
//         deliver exceptional web experiences.
//       </p>

//       {/* Social Links */}
//       <div
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         className="flex justify-center items-center gap-6 mb-8"
//       >
//         <a href="https://www.linkedin.com/in/nitin-prajapati1/" target="_blank" rel="noreferrer">
//           <img src={link} alt="LinkedIn" width={50} />
//         </a>
//         <a href="https://github.com/Nitinpr1" target="_blank" rel="noreferrer">
//           <img src={github} alt="GitHub" width={40} />
//         </a>
//         <a
//           href="https://www.instagram.com/nitin_prajapati15/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={instagram} alt="Instagram" width={40} />
//         </a>
//         <a href="https://twitter.com/NitinPr_01" target="_blank" rel="noreferrer">
//           <img src={twitter} alt="Twitter" width={40} />
//         </a>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-wrap p-2 md:p-1 md:flex-nowrap justify-center items-center gap-4 w-full max-w-[500px]">
//         <button
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           onClick={openForm}
//           className="bg-gradient-to-r from-coral-red to-red-500 hover:from-red-500 hover:to-red-500 text-white text-lg py-3 px-6 rounded-full w-full shadow-md transition-all duration-300"
//         >
//           Contact Me
//         </button>
//         <a
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           href="#projects"
//           className="border-2 border-coral-red text-coral-red text-lg py-3 px-6 rounded-full w-full text-center hover:bg-coral-red hover:text-white transition-all duration-300 shadow-md"
//         >
//           View Projects
//         </a>
//       </div>
//     </section>
//   );
// };


const Home = ({ openForm }) => {
  return (
    <section
      id="home"
      className="w-full max-container min-h-screen flex items-center px-4 sm:px-5 pt-28 pb-16 md:pt-[100px] overflow-x-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* LEFT: text */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="min-w-0 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-4 py-1.5 mb-6 font-montserrat text-sm text-slate-700 dark:text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available for new projects
          </div>

          <h1 className="font-palanquin font-bold leading-[1.1] text-4xl sm:text-6xl xl:text-7xl tracking-tight break-words">
            Hi, I'm Nitin Prajapati
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-montserrat text-coral-red">
            {"< Full Stack Web Developer />"}
          </p>

          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg font-montserrat text-slate-700 dark:text-slate-400 leading-relaxed">
            I build fast, polished interfaces and the robust backends and REST
            APIs behind them, mostly with the <b>MERN stack</b>. I like turning
            ideas into web experiences people enjoy using.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={openForm}
              className="bg-gradient-to-r from-coral-red to-red-500 hover:from-red-500 hover:to-red-500 text-white text-lg py-3 px-8 rounded-full shadow-lg shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
            <a
              href="#projects"
              className="border-2 border-coral-red text-coral-red text-lg py-3 px-8 rounded-full hover:bg-coral-red hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex justify-center lg:justify-start items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.alt}
                className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <img src={s.src} alt={s.alt} className="w-9 h-9 object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: code editor card */}
        <div
          data-aos="fade-left"
          data-aos-duration="900"
          className="relative min-w-0 mx-auto w-full max-w-lg mt-8 lg:mt-0"
        >
          {/* soft glow behind the card */}
          <div className="absolute -inset-2 sm:-inset-4 rounded-[2rem] bg-gradient-to-br from-coral-red/30 via-orange-300/20 to-blue-500/20 blur-2xl" />

          {/* Avatar, overlapping the card corner */}
          <div className="absolute -top-9 right-3 sm:-right-8 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-br from-orange-300 to-coral-red shadow-xl">
            <svg
              viewBox="0 0 100 100"
              role="img"
              aria-label="Friendly bot avatar"
              className="w-full h-full rounded-full border-2 border-white dark:border-slate-900"
            >
              <rect width="100" height="100" fill="#1e293b" />
              {/* body */}
              <path d="M22 100 C22 79 36 72 50 72 C64 72 78 79 78 100 Z" fill="#ff6452" />
              <text x="50" y="92" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#fff">
                {"</>"}
              </text>
              {/* neck */}
              <rect x="44" y="65" width="12" height="8" rx="2" fill="#94a3b8" />
              {/* antenna */}
              <line x1="50" y1="17" x2="50" y2="27" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="14" r="3.5" fill="#ff6452" className="motion-safe:animate-pulse" />
              {/* ears */}
              <rect x="19" y="40" width="7" height="14" rx="3" fill="#ff6452" />
              <rect x="74" y="40" width="7" height="14" rx="3" fill="#ff6452" />
              {/* head */}
              <rect x="25" y="26" width="50" height="40" rx="13" fill="#f1f5f9" />
              {/* face screen */}
              <rect x="31" y="33" width="38" height="26" rx="9" fill="#0f172a" />
              {/* eyes */}
              <circle cx="42" cy="44" r="4.2" fill="#38bdf8" />
              <circle cx="58" cy="44" r="4.2" fill="#38bdf8" />
              <circle cx="43.2" cy="42.8" r="1.2" fill="#fff" />
              <circle cx="59.2" cy="42.8" r="1.2" fill="#fff" />
              {/* smile */}
              <path d="M43 52 Q50 57.5 57 52" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#0d1220]/95 shadow-2xl">
            {/* window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-900/80">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-mono">
                developer.js
              </span>
            </div>

            {/* code */}
            <pre className="p-4 sm:p-6 text-xs sm:text-sm leading-6 sm:leading-7 font-mono text-slate-300 whitespace-pre-wrap break-words">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span> = {"{"}
                {"\n  "}name: <span className="text-green-300">"Nitin Prajapati"</span>,
                {"\n  "}role: <span className="text-green-300">"Full Stack Developer"</span>,
                {"\n  "}stack: [
                {stack.map((t, i) => (
                  <span key={t}>
                    <span className="text-green-300">"{t}"</span>
                    {i < stack.length - 1 ? ", " : ""}
                  </span>
                ))}
                ],
                {"\n  "}builds: <span className="text-green-300">"UIs, Backends, APIs & ideas"</span>,
                {"\n"}
                {"}"};
                <span className="motion-safe:animate-pulse text-coral-red"> ▍</span>
              </code>
            </pre>
          </div>

          {/* floating stack chips */}
          <div className="relative z-10 mt-5 flex flex-wrap justify-center gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur px-3 py-1 text-xs font-montserrat text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
