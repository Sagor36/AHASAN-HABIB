import React from 'react';

const Hero: React.FC = () => {
  const stats = [
    { value: '4+', label: 'Years of Experience' },
    { value: '1500+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support Availability' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-4 sm:px-6 pt-28 sm:pt-32 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(to_bottom,#040510,#070b1a,#040510)]" />

      {/* Glow blobs */}
      <div className="absolute top-20 left-[-60px] w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-[-60px] w-80 h-80 bg-violet-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto grid xl:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

        {/* LEFT */}
        <div className="relative z-10 text-center xl:text-left">

          <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-[10px] font-bold uppercase tracking-[0.3em]">
            <span className="w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse" />
            Digital Growth Expert
          </span>

          <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-white">
            Turning Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Scalable Digital Success
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto xl:mx-0 text-gray-300 text-sm sm:text-base md:text-lg leading-7">
            I'm <span className="text-white font-semibold">AHASAN HABIB</span> — a results-driven digital marketer focused on
            YouTube SEO, paid ads, and audience growth strategies that convert attention into measurable results.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white font-black uppercase text-xs tracking-[0.25em] hover:scale-105 transition shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/15 text-white font-bold uppercase text-xs tracking-[0.25em] hover:bg-white hover:text-black transition hover:scale-105"
            >
              Hire Me
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto xl:mx-0">
            {stats.map((item, i) => (
              <div key={i} className="group rounded-2xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 transition">

                <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  {item.label}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center xl:justify-end">

          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 blur-[60px] opacity-30 group-hover:opacity-60 transition" />

            {/* Image */}
            <div className="relative w-[280px] sm:w-[350px] md:w-[420px] rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_25px_100px_rgba(0,0,0,0.5)]">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiDQKsoQUo19HH86Thdu7ImQoX-tps4wUkDlMgk-ex_kAz3cjXQdHPAvMjBpwbejP7ZmBThaByof7Wf67wvgMX06LJDvfY7MZ7Vzy5Wv-Xz8Z8cZtOX2W0QAU1cY7DXwbdy9KfKH0HnjOhBEPChvsZjsYDbCGpH9UdoVPytxdhmo_TT8B5bjB1obqzGQ/s1600/image.png"
                alt="AHASAN HABIB"
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -left-6 bg-black/50 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] text-cyan-300 uppercase font-bold tracking-widest">
                Expertise
              </p>
              <p className="text-white text-sm font-bold">
                YouTube SEO
              </p>
            </div>

            {/* Availability */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-4 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold">Available</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;