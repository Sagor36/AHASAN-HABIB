import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61595580085307' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://www.instagram.com/xn.ahasanhabib/?hl=en' },
    { name: 'Twitter', icon: 'fab fa-x-twitter', href: 'https://twitter.com/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/md-ahasan-habib-39b8a3418' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com/' },
  ];

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />

      <footer className="relative bg-[#050816] text-white pt-24 pb-10 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%)]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 mb-20">

          {/* CTA */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let’s build your next
              <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                digital success
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-md leading-8">
              Ready to grow your brand, YouTube channel, or online presence?
              Let’s connect and make something powerful together.
            </p>

            <a
              href="mailto:zxahasanhabib@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_40px_rgba(99,102,241,0.3)]"
            >
              Start Project
              <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 text-gray-400">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6">Contact</h3>

            <div className="space-y-5 mb-8">

              <div className="flex items-center gap-4 text-gray-400">
                <i className="fas fa-envelope text-blue-400"></i>
                <a
                  href="mailto:zxahasanhabib@gmail.com"
                  className="hover:text-white transition"
                >
                  zxahasanhabib@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <i className="fab fa-whatsapp text-green-400 text-xl"></i>
                <a
                  href="https://wa.me/8801793461537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +8801793461537
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-5 text-xl text-gray-400">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-6 max-w-7xl mx-auto">
          <p className="text-gray-500 text-xs">
            © 2026 AHASAN HABIB. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-400">Privacy</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
          </div>
        </div>

        {/* Scroll Up */}
        <div className="absolute bottom-8 right-8">
          <a
            href="#home"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:scale-110 transition-all"
          >
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;