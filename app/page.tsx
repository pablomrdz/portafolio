"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Terminal, Globe, Computer, User, Database, Cpu, Search, Cloud, ChevronLeft, ChevronRight, Mail, ArrowDown, WandSparkles, PenTool, UserSearch } from "lucide-react";

const content = {
  en: {
    heroTitle: "Technical SEO Engineer & Next.js Architect.", 
    heroSub: "Based in Monterrey, NL. I bridge the gap between Industrial Design ergonomics and Technical Web Architecture. Specializing in WordPress to Next.js migrations and n8n AI automation for high-performance businesses.",
    badge: "Available for Technical Webmaster roles",
    viewProjects: "View Case Studies", 
    projectsTitle: "Technical SEO & Next.js Engineering Showcase", 
    certTitle: "Certified Technical Authority",
    scrollHint: "Scroll to explore",
    stack: [
      { title: "Frontend & Core Architecture", icon: <Cpu className="text-cyan-500" size={18} />, items: ["Next.js App Router", "Headless WordPress", "PHP / MySQL", "JavaScript (ES6+)"] },
      { title: "Technical SEO & Audits", icon: <Search className="text-cyan-500" size={18} />, items: ["SEMrush / Ahrefs", "Screaming Frog", "Search Console API", "Core Web Vitals"] },
      { title: "n8n & AI Automation", icon: <Database className="text-cyan-500" size={18} />, items: ["n8n Custom Workflows", "MJML Email Systems", "REST API Integrations", "Cron Jobs"] },
      { title: "Server Infrastructure", icon: <Cloud className="text-cyan-500" size={18} />, items: ["Unix / SSH Administration", "AWS S3 / Hetzner", "Git Deployments", "Cybersecurity Protocols"] }
    ],
    projects: [
      { 
        id: 1, 
        title: "Cadizio: AutoCAD Assets Platform", 
        img: "/projects/Cadizio.png", 
        tag: "Next.js SEO", 
        desc: "Digital asset platform optimized for technical SEO, fast content delivery, and server-side rendering.",
        alt: "Cadizio homepage - A high-performance AutoCAD block platform built with Next.js and optimized for Technical SEO" // <-- NUEVO ALT TEXT
      },
      { 
        id: 2, 
        title: "DiseñosGratis: Technical Migration", 
        img: "/projects/DisenosGratis_Nextjs.png", 
        tag: "Migration Success", 
        desc: "Strategic migration from WordPress to Next.js. Achieved 100/100 Core Web Vitals and maximized organic visibility.",
        alt: "DiseñosGratis.com performance metrics and UI after technical migration from WordPress to Next.js" // <-- NUEVO ALT TEXT
      }
    ],
    stackDetail: "Implemented in production environments with a strict focus on server-side scalability and technical SEO compliance."
  },
  es: {
    heroTitle: "Ingeniero SEO Técnico y Arquitecto Next.js.", 
    heroSub: "Basado en Monterrey, NL. Conecto la ergonomía del Diseño Industrial con la Arquitectura Web Técnica. Me especializo en migraciones de WordPress a Next.js y automatización n8n para empresas de alto rendimiento.",
    badge: "Consultor Técnico SEO en Monterrey",
    viewProjects: "Ver Casos de Estudio",
    projectsTitle: "Proyectos de Arquitectura SEO y Next.js", 
    certTitle: "Autoridad Técnica Certificada",
    scrollHint: "Haz scroll",
    stack: [
      { title: "Arquitectura Frontend", icon: <Cpu className="text-cyan-500" size={18} />, items: ["Next.js App Router", "Headless WordPress", "PHP / MySQL", "JavaScript (ES6+)"] },
      { title: "SEO Técnico y Auditorías", icon: <Search className="text-cyan-500" size={18} />, items: ["SEMrush / Ahrefs", "Screaming Frog", "API de Search Console", "Core Web Vitals"] },
      { title: "Automatización n8n e IA", icon: <Database className="text-cyan-500" size={18} />, items: ["Workflows n8n", "Sistemas de Email MJML", "Integración de APIs", "Cron Jobs"] },
      { title: "Infraestructura de Servidores", icon: <Cloud className="text-cyan-500" size={18} />, items: ["Administración Unix / SSH", "AWS S3 / Hetzner", "Despliegues con Git", "Ciberseguridad"] }
    ],
    projects: [
      { 
        id: 1, 
        title: "Cadizio: Plataforma de Assets AutoCAD", 
        img: "/projects/Cadizio.png", 
        tag: "Next.js SEO", 
        desc: "Plataforma optimizada para SEO técnico, entrega rápida de contenido y renderizado del lado del servidor.",
        alt: "Interfaz de Cadizio, plataforma de bloques de AutoCAD desarrollada con arquitectura Next.js por Juan Pablo Márquez" // <-- NUEVO ALT TEXT
      },
      { 
        id: 2, 
        title: "DiseñosGratis: Migración Técnica", 
        img: "/projects/DisenosGratis_Nextjs.png", 
        tag: "Migración Exitosa", 
        desc: "Migración estratégica de WordPress a Next.js. Alcanzando 100/100 en Core Web Vitals para maximizar visibilidad orgánica.",
        alt: "Captura de pantalla de DiseñosGratis.com tras su migración técnica de WordPress a Next.js para mejorar Core Web Vitals" // <-- NUEVO ALT TEXT
      }
    ],
    stackDetail: "Implementado en entornos de producción con un enfoque estricto en la escalabilidad del servidor y el cumplimiento de SEO técnico."
  }
};

const certsData = [
  { id: 1, name: "SEMRUSH", img: "/certs/Semrush_Onpage_SEO.png", alt: "Certificado de Semrush en On-Page y Technical SEO obtenido por Juan Pablo Márquez" },
  { id: 2, name: "HUBSPOT", img: "/certs/Hubspot_Marketing_Digital.png", alt: "Certificación de HubSpot en Marketing Digital e Inbound Marketing" },
  { id: 3, name: "GOOGLE ADS", img: "/certs/Google_Ads_Search_Skillshop.png", alt: "Certificación oficial de Google Ads Search en Skillshop" },
  { id: 4, name: "FREECODECAMP", img: "/certs/FreeCodeCamp_Responsive_Web_Design.png", alt: "Certificado de FreeCodeCamp en Responsive Web Design y arquitectura Frontend" },
  { id: 5, name: "PLATZI", img: "/certs/Platzi_Programacion_Basica.png", alt: "Diploma de Platzi en Fundamentos de Programación y Lógica de Software" },
  { id: 6, name: "SEMRUSH", img: "/certs/Semrush_Keyword_Research.png", alt: "Certificación de Semrush en Keyword Research y Estrategia de Contenidos" }, 
  { id: 7, name: "BIG SCHOOL", img: "/certs/Big_School_Desarrollo_IA.png", alt: "Certificado de BIG School en Desarrollo e Implementación de Inteligencia Artificial" }, 
  { id: 8, name: "BIG SCHOOL", img: "/certs/Big_School_IA_2026.png", alt: "Especialización de BIG School en Arquitecturas de IA Generativa" }, 
  { id: 9, name: "BIG SCHOOL", img: "/certs/Big_School_Ciberseguridad_Hacking_etico.png", alt: "Certificación en Ciberseguridad y Hacking Ético para entornos web" }, 
  { id: 10, name: "BIG SCHOOL", img: "/certs/Big_School_Marketing_Digital_IA.png", alt: "Diploma en Marketing Digital enfocado en automatización con IA" }, 
  { id: 11, name: "GOOGLE", img: "/certs/Fundamentals_Digital Marketing_Google.png", alt: "Certificación de Google en Fundamentos de Marketing Digital" }, 
  { id: 12, name: "DITLAG", img: "/certs/Ditlag_Solidworks.png", alt: "Certificado en SolidWorks, diseño CAD y modelado 3D de piezas industriales" }, 
  { id: 13, name: "PLATZI", img: "/certs/Platzi_Marca_Personal.png", alt: "Diploma de Platzi en Creación y Gestión de Marca Personal para profesionales tecnológicos" }
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const [mounted, setMounted] = useState(false);
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = content[lang];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      if (e.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <main className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50" style={{ scaleX: scrollYProgress }} />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" className="fill-black dark:fill-white transition-colors"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="fill-cyan-500 dark:fill-cyan-600 font-mono font-bold text-[14px]">JP_</text>
            </svg>
          </div>
          <span className="font-bold tracking-tight">Juan Pablo</span>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="text-xs font-mono hover:text-cyan-500 transition-colors flex items-center gap-1">
            <Globe size={14} /> {lang.toUpperCase()}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-500 mb-8 uppercase tracking-widest">
            <Terminal size={12} className="text-cyan-500" /> {t.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">{t.heroSub}</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <a href="#projects" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold shadow-2xl transition-all">
              {t.viewProjects} <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CERTIFICADOS */}
      <section className="py-24 relative group/carousel overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] mb-12 text-center opacity-50">{t.certTitle}</p>
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <button onClick={() => scroll("left")} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-black dark:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex hover:bg-cyan-500">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll("right")} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-black dark:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex hover:bg-cyan-500">
            <ChevronRight size={24} />
          </button>
          <div className="absolute left-0 top-0 bottom-8 w-12 md:w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-12 md:w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div ref={scrollContainerRef} onWheel={handleWheel} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-12 md:px-32 cursor-grab active:cursor-grabbing">
            {certsData.map((cert) => (
              <motion.div key={cert.id} whileHover={{ y: -5, scale: 1.02 }} className="min-w-[280px] md:min-w-[380px] h-48 md:h-64 snap-center shrink-0 relative rounded-2xl shadow-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md group">
                  <img src={cert.img} alt={cert.alt} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12 pb-3 px-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-center font-bold text-white tracking-widest text-[10px] md:text-xs">{cert.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK (MULTILENGUAJE) */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stack.map((group, i) => {
            const isActive = activeStack === group.title;
            return (
              <motion.div
                layout
                key={group.title}
                onClick={() => setActiveStack(isActive ? null : group.title)}
                transition={{ layout: { type: "spring", stiffness: 300, damping: 25 } }}
                className={`p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm transition-colors cursor-pointer hover:border-cyan-500/50 ${isActive ? 'sm:col-span-2 shadow-lg shadow-cyan-500/10' : ''}`}
              >
                <motion.div layout className="flex items-center gap-3 mb-4">
                  {group.icon}
                  <h3 className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">{group.title}</h3>
                </motion.div>
                <motion.ul layout className="space-y-3">
                  {group.items.map(item => (
                    <motion.li layout key={item} className="text-sm font-medium tracking-tight opacity-90 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                {isActive && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-xs text-gray-500 border-t border-black/10 dark:border-white/10 pt-4">
                    {t.stackDetail}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROYECTOS (MULTILENGUAJE CON UX DE SCROLL) */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-24 border-t border-black/5 dark:border-white/5">
        <h2 className="text-xs font-mono text-cyan-500 mb-16 uppercase tracking-[0.3em] text-center">{t.projectsTitle}</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {t.projects.map((project) => (
            <motion.div key={project.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group/card">
              
              {/* WRAPPER PRINCIPAL: Oculta lo que sale de los bordes y mantiene posiciones absolutas */}
              <div className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl bg-gray-100 dark:bg-[#111]">
                
                {/* CONTENEDOR DE SCROLL: Solo este div hace scroll */}
                <div className="w-full h-full overflow-y-auto scrollbar-hide">
                  <img src={project.img} alt={project.alt} className="w-full h-auto object-top opacity-90 group-hover/card:opacity-100 transition-opacity duration-500" />                </div>
                
                {/* TAG SUPERIOR (Se mantiene fijo) */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl text-[10px] font-bold text-white px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-tighter z-10 pointer-events-none">
                  {project.tag}
                </div>

                {/* GRADIENTE INFERIOR PASIVO (Indicador sutil constante) */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-200 dark:from-[#0a0a0a] to-transparent pointer-events-none z-10 opacity-80" />

                {/* PÍLDORA DE SCROLL ACTIVA (Aparece en hover) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 translate-y-2 group-hover/card:translate-y-0 z-20 border border-white/10 shadow-xl">
                  {t.scrollHint} <ArrowDown size={12} className="animate-bounce text-cyan-400" />
                </div>

              </div>
              
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover/card:text-cyan-500 transition-colors cursor-pointer">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">{project.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
{/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-black/5 dark:border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-10">
          {[
            { id: "Email", icon: <Mail size={22} />, url: "mailto:pablo.rdz94@gmail.com", external: false },
            { id: "GitHub", icon: <Computer size={22} />, url: "https://github.com/pablomrdz", external: true },
            { id: "LinkedIn", icon: <User size={22} />, url: "https://linkedin.com/in/juanpamrod", external: true },
            { id: "Behance", icon: <PenTool size={22} />, url: "https://www.behance.net/pablomrod", external: true },
            { id: "Dribbble", icon: <WandSparkles size={22} />, url: "https://dribbble.com/Pablomrod", external: true }, 
            {id: "Google", icon: <UserSearch size={22} />, url: "https://g.dev/juanpablomarquez", external: true  }
          ].map((link) => (
            <a 
              key={link.id}
              href={link.url} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.id} // <-- SEO Técnico y Accesibilidad
              className="group relative text-gray-500 hover:text-cyan-500 transition-colors"
            >
              {link.icon}
              
              {/* TOOLTIP PERSONALIZADO */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 dark:bg-white/90 text-white dark:text-black text-[10px] font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                {link.id}
                {/* Triángulo del tooltip */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90 dark:border-t-white/90" />
              </span>
            </a>
          ))}
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
          © 2026 Juan Pablo Márquez - San Nicolás de los Garza, NL
        </p>
      </footer>
    </main>
  );
}