import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Standard SEO',
      price: '200',
      features: [
        'Five Video SEO',
        'Keyword Optimized Titles',
        'Description Optimization',
        'High Ranking Tag Research',
        'Basic Analytics Report',
      ],
      popular: false,
    },
    {
      name: 'Monthly Growth',
      price: '500',
      features: [
        'Monthly YouTube Management',
        'Unlimited Video SEO',
        'Advanced Audience Targeting',
        'Competitor Analysis',
        'Weekly Growth Sessions',
        '24/7 Priority Support',
      ],
      popular: true,
    },
    {
      name: 'Pro Web SEO',
      price: '550',
      features: [
        'Full Website SEO Audit',
        'On-Page & Technical SEO',
        '30 Targeted Keywords',
        'High-DA Backlinks',
        'GSC & Analytics Setup',
        'Local SEO Implementation',
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050816] px-4 sm:px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,#050816,#070b1a,#050816)]" />
      <div className="absolute top-12 left-[-50px] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-50px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
            Investment
          </div>

          <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            Choose the Right
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Pricing Plan
            </span>
          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-7 sm:leading-8">
            Flexible pricing options designed for creators, brands, and businesses
            looking to grow faster with SEO, digital strategy, and performance marketing.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-500 flex flex-col ${
                plan.popular
                  ? 'border-cyan-400/40 bg-white/[0.07] shadow-[0_25px_80px_rgba(59,130,246,0.24)] xl:-translate-y-3'
                  : 'border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:border-cyan-400/25'
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)] opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-[0_12px_35px_rgba(59,130,246,0.3)]">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div
                  className={`p-8 sm:p-10 text-center border-b ${
                    plan.popular ? 'border-cyan-400/20' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] border ${
                        plan.popular
                          ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300'
                          : 'border-white/10 bg-white/[0.04] text-gray-300'
                      }`}
                    >
                      {plan.name}
                    </span>

                    <span className="text-white/20 text-xs font-black uppercase tracking-[0.25em]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-start justify-center">
                    <span className="mt-3 text-xl sm:text-2xl font-bold text-cyan-300">$</span>
                    <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-gray-400">
                    Per Month / Project
                  </p>
                </div>

                {/* Features */}
                <div className="p-8 sm:p-10 flex-grow">
                  <div className="space-y-4 sm:space-y-5">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-4 text-sm sm:text-[15px] leading-7 text-gray-300"
                      >
                        <span
                          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-black ${
                            plan.popular
                              ? 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300'
                              : 'border-white/10 bg-white/[0.05] text-cyan-300'
                          }`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-8 sm:p-10 pt-0">
                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-[11px] font-black uppercase tracking-[0.24em] transition-all duration-300 active:scale-95 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white shadow-[0_15px_40px_rgba(59,130,246,0.3)] hover:scale-[1.02]'
                        : 'border border-white/10 bg-white/[0.05] text-white hover:border-cyan-400/30 hover:bg-white/[0.08] hover:scale-[1.02]'
                    }`}
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;