import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Sagor will contact you soon.',
      });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: '📍',
      title: 'Location',
      value: 'Rangpur, Bangladesh',
      href: null,
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+8801793461537',
      href: 'https://wa.me/8801793461537',
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'zxahasanhabib@gmail.com',
      href: 'zxahasanhabib@gmail.com',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%),linear-gradient(to_bottom,#050816,#09090f,#050816)]" />

      <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-blue-300">
            Contact Me
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-white">
            Let&apos;s build something
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              powerful together
            </span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-8">
            Have a project in mind or want to grow your brand with smart digital
            marketing? Send a message and let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14 md:mb-20">
          {contactCards.map((item, i) => {
            const content = (
              <div className="group rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.08]">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.32em] text-blue-300 mb-3">
                  {item.title}
                </h4>
                <p className="text-white font-semibold text-base md:text-lg break-words">
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 md:p-10 lg:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Start your next project with confidence.
              </h3>
              <p className="mt-4 text-gray-300 leading-8">
                Whether you need YouTube SEO, promotion strategy, or full digital
                marketing support, send your details here and I&apos;ll get back to
                you as soon as possible.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-300 font-bold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:zxahasanhabib@gmail.com"
                    className="text-white font-semibold hover:text-blue-300 transition-colors"
                  >
                    zxahasanhabib@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-blue-300 font-bold mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/8801793461537"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-semibold hover:text-blue-300 transition-colors"
                  >
                    +8801793461537
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.04]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.04]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.04]"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-blue-400/50 focus:bg-white/[0.04] resize-none"
              />

              {status.message && (
                <div
                  className={`rounded-2xl px-5 py-4 text-sm font-semibold text-center ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 md:px-10 py-4 text-xs font-black uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_15px_40px_rgba(99,102,241,0.35)]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;