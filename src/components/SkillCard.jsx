const SkillCard = ({ name, value }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="w-full max-w-xl mx-auto my-3"
    >
      <div className="flex items-center gap-4">
        
        <div className="min-w-[120px] px-2 py-1 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-slate-300 text-xs md:text-base text-center shadow-sm">
          {name}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-5 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-coral-red to-red-500 text-white text-xs flex items-center justify-end px-2 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: value }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

// const RADIUS = 36;
// const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// const levelFor = (pct) => {
//   if (pct >= 85) return "Expert";
//   if (pct >= 70) return "Advanced";
//   if (pct >= 50) return "Intermediate";
//   return "Learning";
// };

// const SkillCard = ({ name, value, index = 0, animate = false }) => {
//   const pct = Math.min(parseInt(value, 10) || 0, 100);
//   const offset = animate ? CIRCUMFERENCE * (1 - pct / 100) : CIRCUMFERENCE;
//   const gradId = `skill-grad-${index}`;

//   return (
//     <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-coral-red/60 hover:shadow-lg hover:shadow-red-500/10">
//       <div className="relative w-24 h-24">
//         <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90" aria-hidden="true">
//           <defs>
//             <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#fdba74" />
//               <stop offset="100%" stopColor="#ef4444" />
//             </linearGradient>
//           </defs>
//           <circle
//             cx="44"
//             cy="44"
//             r={RADIUS}
//             fill="none"
//             strokeWidth="7"
//             className="stroke-slate-200 dark:stroke-slate-700"
//           />
//           <circle
//             cx="44"
//             cy="44"
//             r={RADIUS}
//             fill="none"
//             strokeWidth="7"
//             strokeLinecap="round"
//             stroke={`url(#${gradId})`}
//             strokeDasharray={CIRCUMFERENCE}
//             strokeDashoffset={offset}
//             className="transition-[stroke-dashoffset] duration-[1100ms] ease-out motion-reduce:transition-none"
//             style={{ transitionDelay: `${index * 60}ms` }}
//           />
//         </svg>
//         <span className="absolute inset-0 flex items-center justify-center font-palanquin font-bold text-lg">
//           {pct}%
//         </span>
//       </div>

//       <div>
//         <h3 className="font-palanquin font-semibold text-base md:text-lg leading-tight">
//           {name}
//         </h3>
//         <p className="mt-1 font-montserrat text-xs text-slate-500 dark:text-slate-400">
//           {levelFor(pct)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;