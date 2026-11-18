import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Service', href: '#service' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'py-4 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-[110] text-2xl md:text-3xl font-black tracking-tight text-white hover:scale-105 transition-transform"
          >
            AHASAN{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              HABIB
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-300 hover:text-blue-300 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(99,102,241,0.35)]"
          >
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[110] w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-1/2 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050816,#09090f,#050816)]" />
        <div className="absolute top-24 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-16 right-10 w-52 h-52 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-sm rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center text-white font-bold uppercase tracking-[0.22em] transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] hover:text-blue-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;