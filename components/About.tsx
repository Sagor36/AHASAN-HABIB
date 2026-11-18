
import React from 'react';

const About: React.FC = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'AHASAN HABIB' },
    { label: 'Location', value: 'Rangpur, Bangladesh' },
    { label: 'Age', value: '20 Years Old' },
    { label: 'Email', value: 'zxahasanhabib@gmail.com' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'Expertise', value: 'YouTube Promotion & SEO' },
  ];

  const highlights = [
    { number: '4+', text: 'Years of Experience' },
    { number: '1500+', text: 'Completed Projects' },
    { number: '24/7', text: 'Support & Strategy' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050816]">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_30%),linear-gradient(to_bottom,#040510,#070b1a,#040510)]" />

      <div className="absolute top-20 left-10 w-52 h-52 bg-cyan-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 blur-[60px] opacity-30 group-hover:opacity-60 transition" />

              {/* Profile Image */}
              <div className="relative w-[320px] sm:w-[400px] md:w-[450px] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_25px_100px_rgba(0,0,0,0.5)]">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiDQKsoQUo19HH86Thdu7ImQoX-tps4wUkDlMgk-ex_kAz3cjXQdHPAvMjBpwbejP7ZmBThaByof7Wf67wvgMX06LJDvfY7MZ7Vzy5Wv-Xz8Z8cZtOX2W0QAU1cY7DXwbdy9KfKH0HnjOhBEPChvsZjsYDbCGpH9UdoVPytxdhmo_TT8B5bjB1obqzGQ/s1600/image.png"
                  alt="AHASAN HABIB"
                  className="w-full h-[420px] sm:h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Role Badge */}
              <div className="absolute -top-6 -left-6 bg-black/50 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
                <p className="text-[10px] text-cyan-300 uppercase font-bold tracking-widest">
                  Role
                </p>
                <p className="text-white font-bold">Digital Marketer</p>
              </div>

              {/* Bottom Card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-4 rounded-2xl text-white shadow-xl max-w-[220px]">
                <p className="text-[10px] uppercase tracking-widest opacity-80">
                  Focus
                </p>
                <p className="text-sm font-bold">
                  YouTube SEO & Growth
                </p>
              </div>

            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            <span className="inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-[0.3em]">
              About Me
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] text-white">
              Building digital growth with
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                strategy &amp; precision
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              I’m{' '}
              <span className="text-white font-semibold">
                AHASAN HABIB
              </span>
              , a professional digital marketer focused on YouTube SEO,
              audience growth, and performance-based digital strategies.
              I help brands and creators grow faster with smart positioning,
              optimized content, and high-impact execution.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl hover:-translate-y-1 transition"
                >
                  <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    {item.number}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Information */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300 font-bold mb-2">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-lg break-words">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white font-black uppercase text-xs tracking-[0.25em] hover:scale-105 transition shadow-lg"
              >
                Let's Talk
              </a>

              <a
                href="/AHASAN HABIB-CV.pdf"
                download
                className="px-8 py-4 rounded-full border border-white/15 text-white font-bold uppercase text-xs tracking-[0.25em] hover:bg-white hover:text-black transition hover:scale-105"
              >
                Download CV
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
