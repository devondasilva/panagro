import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import Logico from '../assets/img/Logico.png'; // Optionnel si tu utilises le logo texte stylisé ci-dessous
// import logo from '../assets/img/logo_fr.png'; // Optionnel si tu utilises le logo texte stylisé ci-dessous

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const panagroGreen = "#8DC63F";
  const forestDark = "#1A2F15"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "L'Exploitation", href: 'exploitation' },
    { name: 'Hébergements', href: 'hebergement' },
    { name: 'Stages & Emplois', href: 'careers' },
    { name: 'Invest', href: 'invest' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isOpen 
            ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* BRANDING */}
          <div className="flex items-center gap-3 z-[110]">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10  flex items-center justify-center transition-transform group-hover:rotate-12 ">
                
                <img src={Logico} alt="Logico" />
              </div>
              <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled || isOpen ? 'text-[#1A2F15]' : 'text-[#1A2F15]'}`}>
                PAN<span style={{ color: panagroGreen }}>AGRO</span>
              </span>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6 bg-[#1A2F15]/5 px-8 py-2.5 rounded-full border border-black/5 backdrop-blur-sm">
            {links.map((link) => (
              <a 
                key={link.name}
                href={`/${link.href}`}
                className={`text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 ${
                  link.name === 'Invest' 
                    ? 'text-[#8DC63F] flex items-center gap-1.5' 
                    : 'text-[#1A2F15] hover:opacity-50'
                }`}
              >
                {link.name === 'Invest' && <TrendingUp size={12} strokeWidth={3} />}
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 z-[110]">
            <a 
              href="/login" 
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-[#1A2F15]/20"
              style={{ backgroundColor: forestDark }}
            >
              Espace Interne
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                isOpen ? 'bg-[#8DC63F] text-white' : 'bg-gray-100 text-[#1A2F15]'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE OVERLAY --- */}
        <div className={`
          fixed inset-0 bg-[#1A2F15] z-[105] flex flex-col transition-all duration-700 ease-in-out lg:hidden
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}>
          <div className="flex flex-col h-full justify-center px-10 gap-6">
            <span className="text-[#8DC63F] text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Navigation</span>
            {links.map((link, i) => (
              <a 
                key={link.name}
                href={`/${link.href}`}
                onClick={() => setIsOpen(false)}
                className={`text-5xl font-black text-white tracking-tighter hover:text-[#8DC63F] transition-all transform flex items-center gap-4 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
                {link.name === 'Invest' && <TrendingUp size={32} className="text-[#8DC63F]" />}
              </a>
            ))}
            
            <div className="h-px w-full bg-white/10 my-8"></div>
            
            <a 
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-[#8DC63F] flex items-center gap-3 group"
            >
              Réserver maintenant <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          {/* Footer Mobile Menu */}
          <div className="p-10 border-t border-white/5 flex justify-between items-center bg-black/20">
             <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">© 2026 PANAGRO FARM</p>
                <p className="text-[9px] text-[#8DC63F] font-black uppercase tracking-widest">Financement Durable</p>
             </div>
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#8DC63F] border border-white/10">
                    <TrendingUp size={18} />
                </div>
             </div>
          </div>
        </div>
      </nav>

      {/* Spacer pour éviter le chevauchement au chargement */}
      <div className={`${isScrolled ? 'h-20' : 'h-24'} transition-all`}></div>
    </>
  );
};

export default Nav;