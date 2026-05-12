"use client";

import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'de'>('de');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [showCookies, setShowCookies] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = translations[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setTimeout(() => setShowCookies(true), 1000);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLang = () => setLang(lang === 'en' ? 'de' : 'en');

  const handleFreeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const ambiance = formData.get('ambiance') as string;
    const mt = t.mailtoFree;
    const subject = `${mt.subject} - ${email}`;
    const body = `${mt.bodyHeader}\n\n${mt.bodyEmail}: ${email}\n${mt.bodyAmbiance}: ${ambiance}\n\n${mt.bodyAction}`;
    window.location.href = `mailto:info.flavorlens@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const restaurant = formData.get('restaurant') as string;
    const email = formData.get('email') as string;
    const pkg = formData.get('package') as string;
    const message = formData.get('message') as string;
    const mt = t.mailtoContact;
    const subject = `${mt.subject} - ${name}`;
    let body = `${mt.bodyHeader}\n\n${mt.bodyName}: ${name}\n`;
    if (restaurant) body += `${mt.bodyRestaurant}: ${restaurant}\n`;
    body += `${mt.bodyEmail}: ${email}\n${mt.bodyPackage}: ${pkg}\n${mt.bodyBriefing}:\n${message}\n\n${mt.bodyAction}\n\n${mt.bodyFooter}`;
    window.location.href = `mailto:info.flavorlens@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-background-light dark:bg-background-dark text-sage dark:text-white/90">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-sage/10 h-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 cursor-pointer group">
            <img src="/Bilder/00. FlavorLens Logo/Logo_Camera_only.svg" className="h-10 w-auto" alt="Logo" />
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-terracotta uppercase transition-colors group-hover:text-terracotta-hover">Flavor Lens</span>
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a className="hover:text-terracotta transition-colors" href="#vision-section">{t.nav.vision}</a>
            <a className="hover:text-terracotta transition-colors" href="#gallery">{t.nav.gallery}</a>
            <a className="hover:text-terracotta transition-colors" href="#excellence">{t.nav.excellence}</a>
            <a className="bg-terracotta text-white px-6 py-2 rounded transition-transform hover:scale-105 shadow-lg shadow-terracotta/20" href="#pricing">{t.nav.cta}</a>
            <button onClick={toggleLang} className="flex items-center space-x-2">
              <span>{lang.toUpperCase()}</span>
              {lang === 'de' ? <FlagDE /> : <FlagEN />}
            </button>
            <button onClick={toggleTheme} className="material-icons">{theme === 'light' ? 'dark_mode' : 'light_mode'}</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden material-icons text-3xl">{isMenuOpen ? 'close' : 'menu'}</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta rounded-full text-xs font-bold uppercase tracking-widest mb-6">{t.hero.tag}</span>
          <h1 className="font-heading text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
            <span className="text-emerald-600 dark:text-emerald-400">{t.hero.title.realFood}</span> <br />
            <span className="text-terracotta">{t.hero.title.realVibrance}</span>
          </h1>
          <p className="text-lg lg:text-xl opacity-80 max-w-lg mb-10 leading-relaxed">{t.hero.description}</p>
          <div className="flex flex-col sm:row gap-4">
            <a href="#pricing" className="bg-terracotta text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-terracotta/20 flex items-center justify-center transform hover:-translate-y-1 transition-all">{t.hero.cta.enhance}</a>
            <a href="#gallery" className="border-2 border-sage/20 dark:border-white/20 font-bold py-4 px-8 rounded-lg flex items-center justify-center transform hover:-translate-y-1 transition-all">{t.hero.cta.showcase}</a>
          </div>
        </div>
        <div className="flex justify-center">
          <BeforeAfterSlider before="/Bilder/01. Burger/ComfyUI_00004_.png" after="/Bilder/01. Burger/a03a6f6cf6883f119ee9699b44137892.webp" beforeLabel={t.hero.slider.before} afterLabel={t.hero.slider.after} />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-sage text-white py-24 border-y border-white/5" id="vision-section">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-terracotta/20 rounded-full text-xs font-bold uppercase mb-4">{t.vision.tag}</span>
          <h2 className="font-heading text-4xl lg:text-6xl font-extrabold mb-8">{t.vision.intro_title}</h2>
          <p className="text-white/70 text-xl max-w-4xl mx-auto mb-20">{t.vision.intro_desc}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(t.vision.points).map(([key, val]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4"><span className="material-icons text-terracotta text-3xl">star</span></div>
                <span className="font-heading font-bold text-xs uppercase tracking-widest">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="excellence">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-extrabold mb-6">{t.excellence.title}</h2>
          <p className="max-w-2xl mx-auto opacity-70">{t.excellence.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[t.excellence.simplicity, t.excellence.integrity, t.excellence.color_science].map((item, i) => (
            <div key={i} className="p-8 bg-white dark:bg-sage/10 rounded-2xl border border-sage/10 shadow-xl">
              <span className="material-icons text-terracotta text-4xl mb-6">{i === 0 ? 'electric_bolt' : i === 1 ? 'verified' : 'palette'}</span>
              <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sage text-white py-24" id="gallery">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="font-heading text-4xl font-extrabold mb-6">{t.gallery.title}</h2>
          <p className="opacity-70 max-w-2xl mx-auto">{t.gallery.description}</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
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
      </section>

      {/* Pricing */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="pricing">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-terracotta font-bold uppercase tracking-widest text-xs">{t.pricing.tag}</span>
          <h2 className="font-heading text-4xl font-extrabold mt-4 mb-8">{t.pricing.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.pricing.packages).map(([key, pkg]) => (
              <div key={key} className={`p-8 rounded-3xl border transition-all flex flex-col h-full ${key === 'main' ? 'bg-sage text-white border-terracotta scale-105 shadow-2xl z-10' : 'bg-white dark:bg-sage/5 border-sage/10'}`}>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-terracotta text-white rounded-full text-[10px] font-bold uppercase mb-2">{pkg.badge}</span>
                  <h3 className="font-heading text-xl font-bold">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold my-4">{pkg.price}</div>
                  <p className="text-sm opacity-70 italic">{pkg.focus}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow text-left">
                  {Object.entries(pkg).filter(([k]) => k.startsWith('feature')).map(([k, f]) => (
                    <li key={k} className="flex items-start text-xs"><span className="material-icons text-terracotta text-sm mr-2">check_circle</span>{f as string}</li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full py-3 rounded-xl font-bold text-center transition-all ${key === 'main' ? 'bg-terracotta text-white' : 'border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white'}`}>{pkg.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6" id="faq">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-extrabold mb-6">{t.faq.title}</h2>
          <p className="opacity-70">{t.faq.subtitle}</p>
        </div>
        <div className="space-y-4">
          {Object.entries(t.faq).filter(([k]) => k.startsWith('q')).map(([key, item], i) => (
            <div key={key} className="bg-white dark:bg-sage/10 border border-sage/10 rounded-xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex justify-between items-center text-left">
                <span className="font-heading font-bold">{(item as any).q}</span>
                <span className={`material-icons transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {openFaq === i && <div className="px-6 pb-5 opacity-70 text-sm leading-relaxed">{(item as any).a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Free Upload Form */}
      <section className="py-24 bg-sage/5 px-6" id="free-upload">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold mb-4">{t.freeUpload.title}</h2>
          <p className="opacity-60">{t.freeUpload.slogan}</p>
        </div>
        <form onSubmit={handleFreeSubmit} className="max-w-2xl mx-auto bg-white dark:bg-sage/10 p-8 rounded-3xl border-2 border-dashed border-terracotta/30 shadow-2xl space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">{t.freeUpload.form.email}</label>
            <input name="email" type="email" required placeholder={t.freeUpload.form.emailPlaceholder} className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-xl px-4 py-3 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">{t.freeUpload.form.ambiance}</label>
            <select name="ambiance" required className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-xl px-4 py-3 outline-none appearance-none">
              <option value="" disabled selected>{t.freeUpload.form.ambiancePlaceholder}</option>
              <option value="rustic">{t.freeUpload.form.rustic}</option>
              <option value="modern">{t.freeUpload.form.modern}</option>
              <option value="fastfood">{t.freeUpload.form.fastfood}</option>
            </select>
          </div>
          <div className="bg-terracotta/10 p-4 rounded-xl text-center text-sm font-bold text-terracotta">{t.freeUpload.form.note}</div>
          <button type="submit" className="w-full bg-terracotta text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2"><span className="material-icons">send</span><span>{t.freeUpload.form.submit}</span></button>
        </form>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 bg-background-light dark:bg-sage/5 p-8 lg:p-16 rounded-3xl border border-sage/10 shadow-2xl">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">{t.contact.info.title}</h2>
            <p className="opacity-70 mb-10">{t.contact.info.desc}</p>
            <div className="space-y-4">
              <a href="mailto:info.flavorlens@gmail.com" className="flex items-center space-x-4 p-4 bg-white dark:bg-background-dark rounded-xl border border-sage/10"><span className="material-icons text-terracotta">email</span><span>info.flavorlens@gmail.com</span></a>
            </div>
            <div className="mt-10 space-y-3">
              <p className="text-xs font-bold uppercase opacity-50">{t.contact.info.packagesLabel}</p>
              {[t.contact.info.p0, t.contact.info.p1, t.contact.info.p2, t.contact.info.p3].map((p, i) => <div key={i} className="flex items-center space-x-2 text-sm"><span className="material-icons text-terracotta text-sm">check</span><span>{p}</span></div>)}
            </div>
          </div>
          <form onSubmit={handleContactSubmit} className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-sage/10 shadow-xl space-y-5 text-sage dark:text-white">
            <input name="name" required placeholder={t.contact.form.namePlaceholder} className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-lg px-4 py-3" />
            <input name="restaurant" placeholder={t.contact.form.restaurantPlaceholder} className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-lg px-4 py-3" />
            <input name="email" type="email" required placeholder={t.contact.form.emailPlaceholder} className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-lg px-4 py-3" />
            <select name="package" required className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-lg px-4 py-3 appearance-none">
              <option value="" disabled selected>{t.contact.form.packagePlaceholder}</option>
              <option value="greeting">{t.contact.form.pkg0}</option>
              <option value="tasting">{t.contact.form.pkg1}</option>
              <option value="menu">{t.contact.form.pkg2}</option>
              <option value="flatrate">{t.contact.form.pkg3}</option>
            </select>
            <textarea name="message" required rows={4} placeholder={t.contact.form.briefingPlaceholder} className="w-full bg-background-light dark:bg-sage/10 border border-sage/20 rounded-lg px-4 py-3 resize-none" />
            <button type="submit" className="w-full bg-terracotta text-white font-bold py-4 rounded-lg shadow-xl shadow-terracotta/20 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"><span>{t.contact.form.submit}</span><span className="material-icons">send</span></button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-sage/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6"><img src="/Bilder/00. FlavorLens Logo/Logo_Camera_only.svg" className="h-8" alt="Logo" /><span className="font-heading font-extrabold text-terracotta uppercase">Flavor Lens</span></div>
            <p className="text-sm opacity-60 max-w-xs">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><a href="#vision-section">{t.footer.companyList.vision}</a></li>
              <li><button onClick={() => setModalType('imprint')}>{t.footer.companyList.imprint}</button></li>
              <li><button onClick={() => setModalType('privacy')}>{t.footer.companyList.privacy}</button></li>
              <li><a href="#contact">{t.footer.companyList.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs mb-6">{t.footer.newsletter}</h4>
            <div className="flex"><input className="bg-white dark:bg-sage/10 border border-sage/10 rounded-l-lg px-4 py-2" placeholder={t.footer.newsletterPlaceholder} /><button className="bg-sage text-white px-4 rounded-r-lg"><span className="material-icons">send</span></button></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-sage/5 text-center text-[10px] opacity-40 uppercase tracking-widest">{t.footer.rights}</div>
      </footer>

      {/* Modals & Overlays */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-background-light dark:bg-background-dark w-full max-w-2xl rounded-2xl shadow-2xl border border-sage/10 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-sage/10 flex justify-between items-center">
              <h3 className="font-heading font-bold text-xl uppercase tracking-wider">{(t.legal as any)[modalType]?.title}</h3>
              <button onClick={() => setModalType(null)} className="material-icons">close</button>
            </div>
            <div className="p-8 overflow-y-auto opacity-80 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: (t.legal as any)[modalType]?.content }} />
            <div className="p-6 border-t border-sage/10 flex justify-end">
              <button onClick={() => setModalType(null)} className="bg-terracotta text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

      {showCookies && (
        <div className="fixed bottom-6 right-6 w-full max-w-sm z-[90] p-6 bg-white dark:bg-sage/95 backdrop-blur-md rounded-2xl shadow-2xl border border-sage/10">
          <h4 className="font-heading font-bold mb-4">{t.cookies.title}</h4>
          <p className="text-sm opacity-70 mb-6">{t.cookies.desc}</p>
          <div className="flex gap-3">
            <button onClick={() => { localStorage.setItem('cookies-accepted', 'true'); setShowCookies(false); }} className="bg-terracotta text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex-1">Accept</button>
            <button onClick={() => { localStorage.setItem('cookies-accepted', 'false'); setShowCookies(false); }} className="border border-sage/20 px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex-1">{t.cookies.decline}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FlagDE() {
  return (
    <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 5 3">
      <rect width="5" height="3" y="0" fill="#000" />
      <rect width="5" height="2" y="1" fill="#D00" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 60 30">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function BeforeAfterSlider({ before, after, small = false, beforeLabel = "Original", afterLabel = "Optimiert" }: { before: string, after: string, small?: boolean, beforeLabel?: string, afterLabel?: string }) {
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
      className={`ba-container ${small ? 'ba-container-sm' : ''} shadow-2xl border-4 border-terracotta relative overflow-hidden group cursor-ew-resize aspect-square w-full max-w-xl mx-auto rounded-3xl`}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* Swap labels: Optimiert on the left, Original on the right */}
      <div className="ba-label ba-label-before absolute top-4 left-4 z-20 px-3 py-1 bg-terracotta/80 text-white text-[10px] font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{afterLabel}</div>
      <div className="ba-label ba-label-after absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 text-white text-[10px] font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">{beforeLabel}</div>

      {/* Background is the BEFORE (Original) image - fixed at the bottom (revealed on the right) */}
      <div className="ba-background absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('${before}')` }}></div>

      {/* Foreground is the AFTER (Optimiert) image - sliding overlay on the left */}
      <div className="ba-foreground absolute inset-0 overflow-hidden z-10 pointer-events-none" style={{ width: `${position}%` }}>
        <div className="absolute top-0 left-0 h-full bg-cover bg-center" style={{ backgroundImage: `url('${after}')`, width: '100cqw' }}></div>
      </div>

      {/* Slider Handle */}
      <div className="ba-slider absolute top-0 bottom-0 w-1 bg-terracotta z-20 pointer-events-none" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white shadow-xl">
          <span className="material-icons">unfold_more</span>
        </div>
      </div>
    </div>
  );
}
