import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Happy Clients', value: '1000+' },
    { label: 'Completed Projects', value: '1500+' },
  ];

  return (
    <section className="relative px-4 sm:px-6 -mt-16 sm:-mt-20 z-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_40%)]" />

      <div className="max-w-5xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 sm:p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_30%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-center">

            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="group flex flex-col items-center justify-center px-4">

                  {/* Number */}
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
                    <span className="relative text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent tracking-tight group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.28em] text-gray-400 group-hover:text-white transition-colors">
                    {stat.label}
                  </span>

                </div>

                {/* Divider */}
                {index < stats.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  </div>
                )}
              </React.Fragment>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;