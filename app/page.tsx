// Trigger deployment on master
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xs">JP</span>
          </div>
          <span className="font-medium tracking-tight">Juan Pablo</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="mailto:pablo.rdz94@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-8">
            <Terminal size={14} className="text-cyan-500" />
            <span>Available for SEO Engineering roles</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Building the future of Search.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            SEO Engineer specialized in technical architecture, AI-driven automation, 
            and high-performance digital products. Elevating visibility through code.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-all">
              Get in touch
            </button>
          </div>
        </div>
      </section>
      {/* Projects Section */}
<section id="projects" className="max-w-7xl mx-auto px-8 py-24">
  <h2 className="text-sm font-mono text-cyan-500 mb-12 uppercase tracking-widest text-center">Selected Projects</h2>
  
  <div className="grid md:grid-cols-2 gap-8">
    {/* Proyecto 1: Cadizio */}
    <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-black p-12 flex items-center justify-center">
        {/* Aquí irá un mockup de Cadizio */}
        <div className="text-4xl font-bold opacity-20">CADIZIO</div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">Cadizio</h3>
        <p className="text-gray-400 mb-6">AI-Powered Platform built with Next.js and Supabase. Optimized for speed and scalability.</p>
        <div className="flex gap-2">
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Next.js</span>
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Vibe Coding</span>
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">SEO Technical</span>
        </div>
      </div>
    </div>

    {/* Proyecto 2: DiseñosGratis */}
    <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
      <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-black p-12 flex items-center justify-center">
         {/* Aquí irá un mockup de DiseñosGratis */}
         <div className="text-4xl font-bold opacity-20 italic">DG.com</div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">DiseñosGratis.com</h3>
        <p className="text-gray-400 mb-6">Full migration to Next.js resulting in +50% organic growth and 100/100 performance scores.</p>
        <div className="flex gap-2">
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Technical SEO</span>
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">n8n Automation</span>
          <span className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Core Web Vitals</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}