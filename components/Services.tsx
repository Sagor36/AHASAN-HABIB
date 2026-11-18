import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'YouTube Video SEO',
      desc: 'I will provide YouTube Video SEO services including keyword research, title optimization, description enhancement, tag selection, audience targeting, engagement strategies, analytics tracking, thumbnail design, and video ranking improvements.',
      icon: '📺',
    },
    {
      title: 'Google Ads',
      desc: 'I provide expert Google Ads services to scale your business. From keyword research and campaign setup to audience targeting and budget management, I ensure continuous optimization for maximum ROI and results.',
      icon: '🔍',
    },
    {
      title: 'Meta Ads',
      desc: 'I will manage high-converting Facebook Ads campaigns for your business. From audience targeting and ad creation to budget management and optimization, I ensure your ads reach the right people and deliver the best possible results.',
      icon: '♾️',
    },
    {
      title: 'Website SEO',
      desc: 'I will provide website SEO services: keyword research, campaign setup, audience targeting, ad creation, budget management, performance tracking, and optimization for better results.',
      icon: '🌐',
    },
    {
      title: 'Social Media Mgmt',
      desc: 'I will manage and grow your social media platforms through creative content, targeted scheduling, and active engagement. From profile optimization to analytics tracking, I ensure your brand stays ahead of the competition and reaches the right audience.',
      icon: '📱',
    },
    {
      title: 'Content Strategy',
      desc: 'I provide data-driven Content Strategy services to boost your online authority. From target audience research to content calendars and performance tracking, I create a roadmap that ensures your content is purposeful, consistent, and delivers measurable results.',
      icon: '✍️',
    },
  ];

  return (
    <section
      id="service"
      className="relative overflow-hidden bg-[#050816] px-4 sm:px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,#050816,#070b1a,#050816)]" />
      <div className="absolute top-12 left-[-50px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-50px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
                Services
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                What I Deliver For
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Brands, Businesses & Creators
                </span>
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <p className="text-sm sm:text-[15px] leading-7 text-gray-300">
                I provide performance-focused digital marketing services designed to
                improve brand visibility, strengthen audience reach, and generate
                measurable growth through strategy, optimization, and smart campaign execution.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/35"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)] opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Icon + Index */}
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/20">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-2xl font-black leading-snug text-white mb-4 transition-colors duration-300 group-hover:text-cyan-300">
                  {service.title}
                </h4>

                <p className="text-sm sm:text-[15px] leading-7 text-gray-300 mb-8">
                  {service.desc}
                </p>

                {/* Bottom */}
                <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300">
                    Explore Detail
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 group-hover:text-white group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;