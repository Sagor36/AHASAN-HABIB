import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'YouTube Video Promotion', level: 100 },
    { name: 'YouTube Video SEO', level: 99 },
    { name: 'Google Ads', level: 92 },
    { name: 'Meta Ads', level: 88 },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-white"
    >
      <style>
        {`
          @keyframes skillFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          @keyframes pulseRing {
            0% { transform: scale(0.95); opacity: 0.35; }
            70% { transform: scale(1.08); opacity: 0.08; }
            100% { transform: scale(1.12); opacity: 0; }
          }

          .skill-float {
            animation: skillFloat 4s ease-in-out infinite;
          }

          .pulse-ring {
            animation: pulseRing 2.4s ease-out infinite;
          }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,#050816,#070b1a,#050816)]" />
      <div className="absolute top-10 left-[-50px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-50px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
            Skills
          </div>

          <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            My Core
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Marketing Skills
            </span>
          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-7 sm:leading-8">
            A quick overview of the key digital marketing services and performance
            areas where I deliver strong results for brands and creators.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/35"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)] opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 flex items-center justify-between gap-5 sm:gap-6">
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h4 className="text-sm sm:text-base font-black uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white leading-6">
                      {skill.name}
                    </h4>
                    <span className="text-cyan-300 text-xs sm:text-sm font-black">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative w-full h-[10px] rounded-full bg-white/5 overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02),transparent)]" />
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_20px_rgba(59,130,246,0.45)] transition-all duration-[2000ms] ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    <span>Performance Level</span>
                    <span className="text-cyan-300">Verified Skill</span>
                  </div>
                </div>

                {/* Right Circle */}
                <div className="relative flex-shrink-0 skill-float">
                  <div className="pulse-ring absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-cyan-400/30 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center shadow-[inset_0_0_25px_rgba(56,189,248,0.08),0_10px_30px_rgba(0,0,0,0.2)]">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-white/10 flex items-center justify-center">
                      <span className="text-white font-black text-sm sm:text-base tracking-tight">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                  Skill Category
                </span>
                <span className="text-white/30 font-black text-xs">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;