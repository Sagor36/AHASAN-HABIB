import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  desc?: string;
}

const TimelineCard: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  desc,
}) => (
  <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/35">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)] opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="relative z-10">
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.28em] text-white shadow-[0_10px_30px_rgba(59,130,246,0.28)]">
          {year}
        </span>

        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-500 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
          </svg>
        </div>
      </div>

      <h4 className="text-xl sm:text-2xl font-black text-white leading-snug mb-2">
        {title}
      </h4>

      <p className="text-cyan-300 font-bold text-sm sm:text-[15px] mb-4">
        {subtitle}
      </p>

      {desc && (
        <p className="text-gray-300 text-sm sm:text-[15px] leading-7">
          {desc}
        </p>
      )}
    </div>
  </div>
);

const Resume: React.FC = () => {
  const education = [
    {
      year: '2017- 2019',
      title: 'Study of Collage',
      institution: 'Kurigram Government Collage',
      desc: 'I completed my Higher Secondary Certificate (HSC) in the Science stream from Kurigram Government College. My academic focus on Physics, Chemistry, and Biology not only provided a strong scientific foundation but also significantly sharpened my analytical thinking and problem-solving abilities.',
    },
    {
      year: '2016 - 2020',
      title: 'Bachelor of Business Administration',
      institution: 'Rangpur Collectorate College',
      desc: 'I earned my BBA from Rangpur Collectorate College, where I specialized in the core principles of Digital Marketing, E-commerce, and SEO. This academic background provided me with a solid foundation in modern marketing strategies, enabling me to drive business growth through data-driven digital platforms.',
    },
  ];

  const experience = [
    {
      year: '2022 - Now',
      title: 'Professional Digital Marketer',
      company: 'CEO, AHASAN HABIB.',
      desc: 'As the CEO of Sagor-IT-Expert for the past 4 years, I have been driving business growth through expert YouTube SEO, Video Promotion, Google/Facebook Ads, and Website SEO. I specialize in delivering high-impact digital strategies that maximize brand visibility and ROI.',
    },
    {
      year: '2021 - 2022',
      title: 'YouTube Video SEO Trainer',
      company: 'TTC,Rangpure.',
      desc: 'From 2021 to 2022, I served as a skilled "YouTube SEO" Trainer under the Bangladesh governments Learning and Earning Development Project TTC. Rangpure, helping freelancers improve their digital marketing skills through training.',
    },
  ];

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#050816] px-4 sm:px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(99,102,241,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,#050816,#070b1a,#050816)]" />
      <div className="absolute top-12 left-[-50px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-50px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
            Resume
          </div>

          <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            My Background &
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-7 sm:leading-8">
            A detailed overview of my academic journey and work experience in digital marketing,
            SEO, YouTube growth, and performance-based online strategy.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          {/* Education Panel */}
          <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_35%)] pointer-events-none" />

            <div className="relative z-10 mb-8 sm:mb-10 flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex mb-3 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Qualification
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  Education
                </h4>
              </div>

              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <TimelineCard
                  key={idx}
                  year={item.year}
                  title={item.title}
                  subtitle={item.institution}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

          {/* Experience Panel */}
          <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_35%)] pointer-events-none" />

            <div className="relative z-10 mb-8 sm:mb-10 flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex mb-3 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Work History
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  Experience
                </h4>
              </div>

              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a4 4 0 018 0v2" />
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <TimelineCard
                  key={idx}
                  year={item.year}
                  title={item.title}
                  subtitle={item.company}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;