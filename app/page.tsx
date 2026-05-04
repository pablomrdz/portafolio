"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Globe, Sun, Moon, CircleCheck, Mail, Computer, User, Database, Cpu, Search, Cloud } from "lucide-react";

// 1. DEFINICIÓN DEL OBJETO CONTENT (El que causaba el error)
const content = {
  en: {
    heroTitle: "Building the future of Search.",
    heroSub: "SEO Engineer specialized in technical architecture, AI automation, and high-performance products.",
    badge: "Available for SEO Engineering roles",
    viewProjects: "View Projects",
    projectsTitle: "Engineering Showcase",
    certTitle: "Certified Technical Authority",
  },
  es: {
    heroTitle: "Construyendo el futuro de la búsqueda.",
    heroSub: "Ingeniero SEO especializado en arquitectura técnica, automatización con IA y productos de alto rendimiento.",
    badge: "Disponible para roles de SEO Engineering",
    viewProjects: "Ver Proyectos",
    projectsTitle: "Portafolio de Ingeniería",
    certTitle: "Autoridad Técnica Certificada",
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // 2. ACCESO SEGURO AL CONTENIDO
  const t = content[lang];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const stack = [
    { title: "Core Tech", icon: <Cpu className="text-cyan-500" size={18} />, items: ["Next.js / React", "WordPress (Custom)", "PHP / MySQL", "JavaScript (ES6+)"] },
    { title: "SEO Tools", icon: <Search className="text-cyan-500" size={18} />, items: ["SEMrush / Ahrefs", "Screaming Frog", "Search Console", "Technical Audits"] },
    { title: "Automation", icon: <Database className="text-cyan-500" size={18} />, items: ["n8n Workflows", "MJML (Email Systems)", "API Integrations", "Cron Jobs"] },
    { title: "Infrastructure", icon: <Cloud className="text-cyan-500" size={18} />, items: ["Unix / SSH", "AWS S3 / Hetzner", "Git / Deployments", "Cybersecurity"] }
  ];

  const projects = [
    { 
      id: 1, 
      title: "Cadizio: Digital Assets", 
      img: "/projects/Cadizio.png", 
      tag: "Next.js Assets", 
      desc: "Plataforma de bloques de AutoCAD optimizada para SEO técnico." 
    },
    { 
      id: 2, 
      title: "DiseñosGratis.com", 
      img: "/projects/DisenosGratis_Nextjs.png", 
      tag: "Migration Success", 
      desc: "Migración de WordPress a Next.js con enfoque en Core Web Vitals." 
    }
  ];

  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <User size={16} className="text-white dark:text-black" />
          </div>
          <span className="font-bold tracking-tight">Juan Pablo</span>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="text-xs font-mono hover:text-cyan-500 transition-colors flex items-center gap-1">
            <Globe size={14} /> {lang.toUpperCase()}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-500 mb-8 uppercase tracking-widest">
            <Terminal size={12} className="text-cyan-500" /> {t.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {t.heroSub}
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a href="#projects" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold shadow-2xl transition-all">
              {t.viewProjects} <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] mb-12 text-center opacity-50">{t.certTitle}</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
          {["SEMRUSH", "HUBSPOT", "GOOGLE ADS", "BIG SCHOOL"].map((cert) => (
            <motion.span
              key={cert}
              whileHover={{ scale: 1.15, filter: "grayscale(0%)", opacity: 1 }}
              className="text-lg md:text-2xl font-black tracking-tighter opacity-30 grayscale cursor-default transition-all duration-300"
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </section>

      {/* STACK CARDS */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.5)" }}
              className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li key={item} className="text-sm font-medium tracking-tight opacity-80">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-24 border-t border-black/5 dark:border-white/5">
        <h2 className="text-xs font-mono text-cyan-500 mb-16 uppercase tracking-[0.3em] text-center">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/5 shadow-2xl transition-shadow group-hover:shadow-cyan-500/10">
                <img src={project.img} alt={project.title} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl text-[10px] font-bold text-white px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-tighter">
                  {project.tag}
                </div>
              </div>
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-cyan-500 transition-colors">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-black/5 dark:border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-10 opacity-50 hover:opacity-100 transition-opacity">
          <a href="https://github.com/pablomrdz" target="_blank" className="hover:text-cyan-500 transition-colors"><Computer size={22} /></a>
          <a href="https://linkedin.com/in/juanpamrod" target="_blank" className="hover:text-cyan-500 transition-colors"><User size={22} /></a>
          <a href="mailto:pablo.rdz94@gmail.com" className="hover:text-cyan-500 transition-colors"><Mail size={22} /></a>
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
          © 2026 Juan Pablo Márquez — San Nicolás de los Garza, NL
        </p>
      </footer>
    </main>
  );
}