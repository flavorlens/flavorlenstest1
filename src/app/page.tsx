"use client";

import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'de'>('de');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'de' : 'en');
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-sage/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 cursor-pointer group">
            <img src="/Bilder/00. FlavorLens Logo/Logo_Camera_only.svg" className="h-10 w-auto logo-responsive" alt="Flavor Lens Logo" />
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-terracotta uppercase transition-colors group-hover:text-terracotta-hover">
              Flavor Lens
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest">
            <a className="hover:text-terracotta transition-colors text-sage dark:text-white/90" href="#vision-section">{t.nav.vision}</a>
            <a className="hover:text-terracotta transition-colors text-sage dark:text-white/90" href="#gallery">{t.nav.gallery}</a>
            <a className="hover:text-terracotta transition-colors text-sage dark:text-white/90" href="#vision">{t.nav.excellence}</a>
            <a className="bg-terracotta text-white px-6 py-2 rounded transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-terracotta/20" href="#pricing">
              {t.nav.cta}
            </a>
            <button onClick={toggleLang} className="hover:text-terracotta transition-colors text-sage dark:text-white/90 font-medium uppercase tracking-widest ml-4 flex items-center">
              <span>{lang === 'en' ? 'EN' : 'DE'}</span>
              <span className="ml-2 flex items-center">
                {lang === 'de' ? (
                  <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 5 3">
                    <rect width="5" height="3" y="0" fill="#000" />
                    <rect width="5" height="2" y="1" fill="#D00" />
                    <rect width="5" height="1" y="2" fill="#FFCE00" />
                  </svg>
                ) : (
                  <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 60 30">
                    <rect width="60" height="30" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                  </svg>
                )}
              </span>
            </button>
            <button onClick={toggleTheme} className="material-icons hover:text-terracotta transition-colors text-sage dark:text-white/90 text-2xl ml-4">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="material-icons text-sage dark:text-white text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-sage/10 shadow-xl p-6 flex flex-col space-y-4 text-center text-sm font-medium uppercase tracking-widest">
            <a onClick={() => setIsMenuOpen(false)} href="#vision-section">{t.nav.vision}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#gallery">{t.nav.gallery}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#vision">{t.nav.excellence}</a>
            <a onClick={() => setIsMenuOpen(false)} className="bg-terracotta text-white px-6 py-3 rounded shadow-lg shadow-terracotta/20" href="#pricing">{t.nav.cta}</a>
            <button onClick={toggleLang} className="py-2 flex items-center justify-center">
              {lang === 'en' ? 'EN' : 'DE'}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section py-12 lg:py-24 overflow-hidden" id="examples">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta dark:text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {t.hero.tag}
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-extrabold text-sage dark:text-white leading-[1.1] mb-8">
              <span>{t.hero.title.realFood}</span> <br /><span className="text-terracotta">{t.hero.title.realVibrance}</span>
            </h1>
            <p className="text-lg lg:text-xl text-sage/80 dark:text-white/70 max-w-lg mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="bg-terracotta hover:bg-terracotta/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-terracotta/20 transition-all flex items-center justify-center transform hover:-translate-y-1">
                <span>{t.hero.cta.enhance}</span>
                <span className="material-icons ml-2">arrow_forward</span>
              </a>
              <a href="#gallery" className="border-2 border-sage/20 dark:border-white/20 hover:border-terracotta text-sage dark:text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center transform hover:-translate-y-1">
                {t.hero.cta.showcase}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <BeforeAfterSlider 
              before="/Bilder/01. Burger/ComfyUI_00004_.png" 
              after="/Bilder/01. Burger/a03a6f6cf6883f119ee9699b44137892.webp" 
              beforeLabel={t.hero.slider.before}
              afterLabel={t.hero.slider.after}
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-sage py-24 border-y border-white/5 relative overflow-hidden" id="vision-section">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-background-light">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 bg-terracotta/20 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-terracotta/20">
              {t.vision.tag}
            </span>
            <h2 className="font-heading text-4xl lg:text-6xl font-extrabold mb-8">{t.vision.intro_title}</h2>
            <div className="w-20 h-1 bg-terracotta mx-auto rounded-full mb-8"></div>
            <p className="text-white/80 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">{t.vision.intro_desc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 border-t border-white/10 pt-16">
            <p className="text-white/90 text-lg leading-relaxed italic border-l-4 border-terracotta pl-6">{t.vision.mission_statement}</p>
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">{t.vision.impact_heading}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{t.vision.impact_desc}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(t.vision.points).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-terracotta transition-all duration-500">
                  <span className="material-icons text-terracotta group-hover:text-white text-4xl">
                    {key === 'excellence' ? 'star' : key === 'presentation' ? 'insights' : key === 'conversion' ? 'trending_up' : key === 'enhancement' ? 'auto_fix_high' : key === 'systems' ? 'layers' : 'speed'}
                  </span>
                </div>
                <span className="font-heading font-bold text-sm uppercase tracking-widest leading-tight">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="problem">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-terracotta/20 text-terracotta dark:text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-terracotta/20">
              {t.problem.tag}
            </span>
            <h2 className="font-heading text-4xl font-extrabold mb-6 text-sage dark:text-white">{t.problem.title}</h2>
            <div className="w-20 h-1 bg-terracotta mx-auto rounded-full mb-6"></div>
            <p className="text-sage/70 dark:text-white/60 text-lg">{t.problem.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-white dark:bg-sage/10 border border-sage/5 hover:border-terracotta/30 transition-all hover:shadow-2xl hover:shadow-terracotta/10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300 text-terracotta">
                <span className="material-icons text-3xl">trending_down</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-sage dark:text-white">{t.problem.card1.title}</h3>
              <p className="text-sage/70 dark:text-white/70 leading-relaxed">{t.problem.card1.desc}</p>
            </div>
            <div className="group p-8 rounded-xl bg-white dark:bg-sage/10 border border-sage/5 hover:border-terracotta/30 transition-all hover:shadow-2xl hover:shadow-terracotta/10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300 text-terracotta">
                <span className="material-icons text-3xl">gpp_bad</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-sage dark:text-white">{t.problem.card2.title}</h3>
              <p className="text-sage/70 dark:text-white/70 leading-relaxed">{t.problem.card2.desc}</p>
            </div>
            <div className="group p-8 rounded-xl bg-white dark:bg-sage/10 border border-sage/5 hover:border-terracotta/30 transition-all hover:shadow-2xl hover:shadow-terracotta/10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300 text-terracotta">
                <span className="material-icons text-3xl">shopping_basket</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-sage dark:text-white">{t.problem.card3.title}</h3>
              <p className="text-sage/70 dark:text-white/70 leading-relaxed">{t.problem.card3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-sage py-24 text-background-light" id="gallery">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-terracotta/20 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-terracotta/20">
              {t.gallery.tag}
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold mb-6">{t.gallery.title}</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-white/70 text-lg">{t.gallery.description}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BeforeAfterSlider 
                small 
                before="/Bilder/01. Burger/ComfyUI_00014_.png" 
                after="/Bilder/01. Burger/9a1665a7f96af1784301573c10f7749a.webp" 
                beforeLabel={t.hero.slider.before}
                afterLabel={t.hero.slider.after}
              />
              <BeforeAfterSlider 
                small 
                before="/Bilder/10. Schnitzel/ComfyUI_00006_.png" 
                after="/Bilder/10. Schnitzel/ae5645f9e169079abe48c27905b377d7.webp" 
                beforeLabel={t.hero.slider.before}
                afterLabel={t.hero.slider.after}
              />
              <BeforeAfterSlider 
                small 
                before="/Bilder/03. Pizza/Salami/ComfyUI_00334_.png" 
                after="/Bilder/03. Pizza/Salami/4b09eec69085b65ca49f30a5ef8e0543.webp" 
                beforeLabel={t.hero.slider.before}
                afterLabel={t.hero.slider.after}
              />
              <BeforeAfterSlider 
                small 
                before="/Bilder/05. Sushi/ComfyUI_00015_.png" 
                after="/Bilder/05. Sushi/7783d6ef9218bdcf1f52479ea830f1b3.webp" 
                beforeLabel={t.hero.slider.before}
                afterLabel={t.hero.slider.after}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-light dark:bg-background-dark border-t border-sage/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sage/60 dark:text-white/60 mb-4">{t.footer.tagline}</p>
          <p className="text-sage/40 dark:text-white/40 text-sm">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function BeforeAfterSlider({ before, after, small = false, beforeLabel = "Before", afterLabel = "After" }: { before: string, after: string, small?: boolean, beforeLabel?: string, afterLabel?: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(x, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className={`ba-container ${small ? 'ba-container-sm' : ''} shadow-2xl border-4 border-terracotta`}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onClick={(e) => handleMove(e.clientX)}
    >
      <div className="ba-label ba-label-before">{beforeLabel}</div>
      <div className="ba-label ba-label-after">{afterLabel}</div>
      <div className="ba-background" style={{ backgroundImage: `url('${before}')` }}></div>
      <div className="ba-foreground" style={{ width: `${position}%` }}>
        <div style={{ backgroundImage: `url('${after}')` }}></div>
      </div>
      <div className="ba-slider" style={{ left: `${position}%` }}></div>
    </div>
  );
}
