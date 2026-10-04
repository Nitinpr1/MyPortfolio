import { skills } from "../constants/index";
// import SkillCard from "../components/SkillCard";
import { useEffect, useMemo, useRef, useState } from "react";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="flex justify-center items-center w-full rounded-2xl p-4 drop-shadow-xl"
//     >
//       <div
//         data-aos="flip-up"
//         data-aos-duration="1000"
//         className="md:w-3/4 xl:w-2/4 w-full"
//       >
//         <h1 className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10">
//           SKILLS
//         </h1>
//         <div>
//           {skills.map((skill) => (
//             <SkillCard key={skill.name} {...skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

const COMMAND = "npm list --skills";

// Skills are grouped automatically by name. Add keywords here if one lands in "Other".
const RULES = [
  ["Frontend", /react|next|vue|angular|html|css|tailwind|bootstrap|javascript|typescript|redux|sass|material|aos/i],
  ["Database", /mongo|sql|firebase|redis|postgres|database/i],
  ["Backend", /node|express|api|rest|jwt|socket|graphql|auth|server/i],
  ["Tools", /git|postman|vs ?code|docker|vercel|netlify|figma|npm|linux|aws/i],
];
const COLORS = {
  Frontend: "text-sky-300",
  Database: "text-emerald-300",
  Backend: "text-purple-300",
  Tools: "text-amber-300",
  Other: "text-orange-300",
};

const categorize = (name) => (RULES.find(([, re]) => re.test(name)) || ["Other"])[0];

const Skills = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState(0); // characters of the command typed
  const [shown, setShown] = useState(0); // output lines revealed

  // Build the tree lines from your skills data
  const lines = useMemo(() => {
    const map = {};
    skills.forEach((s) => {
      const c = categorize(s.name);
      if (!map[c]) map[c] = [];
      map[c].push(s.name);
    });
    const cats = Object.entries(map);
    const out = [{ kind: "root", text: "portfolio@1.0.0 ~/nitin" }];
    cats.forEach(([cat, items], ci) => {
      const lastCat = ci === cats.length - 1;
      out.push({ kind: "cat", prefix: lastCat ? "└── " : "├── ", text: cat });
      items.forEach((name, si) => {
        const lastItem = si === items.length - 1;
        out.push({
          kind: "skill",
          cat,
          prefix: (lastCat ? "    " : "│   ") + (lastItem ? "└── " : "├── "),
          text: name,
        });
      });
    });
    out.push({ kind: "done", text: `✔ ${skills.length} skills in ${cats.length} groups` });
    return out;
  }, []);

  // Start once when scrolled into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Type the command, then reveal lines one by one
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(COMMAND.length);
      setShown(lines.length);
      return;
    }
    let lineTimer;
    const typeTimer = setInterval(() => {
      setTyped((t) => {
        if (t + 1 >= COMMAND.length) {
          clearInterval(typeTimer);
          lineTimer = setInterval(() => {
            setShown((s) => {
              if (s + 1 >= lines.length) clearInterval(lineTimer);
              return s + 1;
            });
          }, 80);
        }
        return t + 1;
      });
    }, 70);
    return () => {
      clearInterval(typeTimer);
      clearInterval(lineTimer);
    };
  }, [started, lines.length]);

  const finished = shown >= lines.length;

  return (
    <section id="skills" ref={ref} className="w-full max-container px-4 overflow-x-clip">
      <div className="text-center mb-10">
        <h2 className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10">Skills</h2>
        {/* <p className="mt-3 font-montserrat text-slate-600 dark:text-slate-400">
          Everything I work with, straight from the terminal.
        </p> */}
      </div>

      <div 
      data-aos="fade-left"
      data-aos-duration="900"
      className="relative mx-auto w-full max-w-2xl min-w-0">
        <div className="absolute -inset-2 sm:-inset-4 rounded-[2rem] bg-gradient-to-br from-coral-red/25 via-orange-300/15 to-blue-500/20 blur-2xl" />

        <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#0d1220]/95 shadow-2xl">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-900/80">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-slate-400 font-mono">skills</span>
          </div>

          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
            {/* command line */}
            <div className="whitespace-pre-wrap break-words">
              <span className="text-coral-red">$ </span>
              <span className="text-slate-100">{COMMAND.slice(0, typed)}</span>
              {!finished && <span className="motion-safe:animate-pulse text-coral-red">▍</span>}
            </div>

            {/* output (all lines rendered so the card height never jumps) */}
            <div className="mt-2 whitespace-pre overflow-x-auto">
              {lines.map((l, i) => (
                <div key={i} className={i < shown ? "" : "invisible"}>
                  {l.kind === "root" && <span className="text-slate-500">{l.text}</span>}
                  {l.kind === "cat" && (
                    <>
                      <span className="text-slate-600">{l.prefix}</span>
                      <span className={`font-semibold ${COLORS[l.text] || COLORS.Other}`}>{l.text}</span>
                    </>
                  )}
                  {l.kind === "skill" && (
                    <>
                      <span className="text-slate-600">{l.prefix}</span>
                      <span className="text-slate-200">{l.text}</span>
                    </>
                  )}
                  {l.kind === "done" && <span className="text-green-400">{l.text}</span>}
                </div>
              ))}
            </div>

            {/* idle prompt */}
            <div className={`mt-2 ${finished ? "" : "invisible"}`}>
              <span className="text-coral-red">$ </span>
              <span className="motion-safe:animate-pulse text-coral-red">▍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;