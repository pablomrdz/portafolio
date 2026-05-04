"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Globe, Sun, Moon, CircleCheck, Mail, Computer, User } from "lucide-react";

const content = {
  en: {
    heroTitle: "Building the future of Search.",
    heroSub: "SEO Engineer specialized in technical architecture, AI automation, and high-performance products.",
    badge: "Available for SEO Engineering roles",
    viewProjects: "View Projects",
    projectsTitle: "Engineering Showcase",
    formSubmit: "Send Message",
  },
  es: {
    heroTitle: "Construyendo el futuro de la búsqueda.",
    heroSub: "Ingeniero SEO especializado en arquitectura técnica, automatización con IA y productos de alto rendimiento.",
    badge: "Disponible para roles de SEO Engineering",
    viewProjects: "Ver Proyectos",
    projectsTitle: "Portafolio de Ingeniería",
    formSubmit: "Enviar Mensaje",
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = content[lang];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const projects = [
    { 
      id: 1, 
      title: "Cadizio: Digital Assets", 
      img: "/projects/Cadizio.png", 
      tag: "Next.js Assets", 
      icon: <Computer size={12} />,
      desc: "Plataforma de bloques de AutoCAD y dibujos 2D optimizada para SEO técnico."
    },
    { 
      id: 2, 
      title: "DiseñosGratis.com", 
      img: "/projects/DisenosGratis_Nextjs.png", 
      tag: "Migration Success", 
      icon: <CircleCheck size={12} />,
      desc: "Migración estratégica de WordPress a Next.js para maximizar visibilidad orgánica."
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
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-500 mb-8 uppercase tracking-widest">
            <Terminal size={12} className="text-cyan-500" /> {t.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {t.heroSub}
          </p>
          
          {/* BOTÓN CON TRANSICIÓN SUAVE */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a href="#projects" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all">
              {t.viewProjects} <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-24 border-t border-black/5 dark:border-white/5">
        <h2 className="text-xs font-mono text-cyan-500 mb-16 uppercase tracking-[0.3em] text-center">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-none"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/5">
                <img src={project.img} alt={project.title} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl text-[10px] font-bold text-white px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 uppercase tracking-tighter">
                  {project.icon} {project.tag}
                </div>
              </div>
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
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