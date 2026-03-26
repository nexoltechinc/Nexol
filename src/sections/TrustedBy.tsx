import { useRef, useEffect, useState } from 'react';
import { 
  Database, 
  Cloud, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Server,
  Terminal,
  Layers,
  Sparkles,
  LayoutDashboard,
  Package,
  Calendar,
  Share2,
  Users,
  GitBranch,
  Settings2,
  Target,
  Bot
} from 'lucide-react';

const techStack = [
  { name: 'GPT-4o AI', icon: Sparkles, color: 'emerald' },
  { name: 'AWS Cloud', icon: Cloud, color: 'orange' },
  { name: 'React Native', icon: Code2, color: 'blue' },
  { name: 'Python Server', icon: Terminal, color: 'yellow' },
  { name: 'PostgreSQL', icon: Database, color: 'indigo' },
  { name: 'Docker / K8s', icon: Layers, color: 'blue' },
  { name: 'Azure DevOps', icon: Server, color: 'blue' },
  { name: 'Node.js Engine', icon: Zap, color: 'emerald' },
];

const integrationStack = [
  { name: 'QuickBooks Auto', icon: Zap, color: 'emerald' },
  { name: 'Make Workflows', icon: Settings2, color: 'blue' },
  { name: 'n8n Engineering', icon: GitBranch, color: 'orange' },
  { name: 'Power Automate', icon: Bot, color: 'blue' },
  { name: 'GoHighLevel CRM', icon: Target, color: 'cyan' },
  { name: 'Monday.com', icon: LayoutDashboard, color: 'violet' },
  { name: 'Odoo Enterprise', icon: Package, color: 'indigo' },
  { name: 'Agenda Pro', icon: Calendar, color: 'blue' },
  { name: 'HubSpot Sync', icon: Users, color: 'orange' },
  { name: 'Quivo Cloud', icon: Share2, color: 'blue' },
  { name: 'Zapier Logic', icon: Zap, color: 'orange' },
];

const TrustedBy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-[#020205] border-y border-white/5"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-800 to-transparent hidden md:block" />
            <p className={`text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-1000 ${isVisible ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Enterprise Tech Stack & Infrastructure
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-800 to-transparent hidden md:block" />
        </div>
      </div>

      {/* Marquee Container */}
      <div className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Row 1: Core Infrastructure */}
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#020205] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#020205] to-transparent z-10" />
          
          <div className="flex logo-marquee gap-20">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => {
               const Icon = tech.icon;
               return (
                <div key={index} className="flex-shrink-0 flex items-center gap-4 group/item cursor-default transition-all duration-500 hover:scale-105">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${tech.color}-500/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity`} />
                    <Icon className="w-7 h-7 text-slate-400 group-hover/item:text-white transition-colors duration-500 relative" />
                  </div>
                  <span className="text-slate-400 font-bold text-sm tracking-tight group-hover/item:text-white transition-colors duration-500">{tech.name}</span>
                  <div className="ml-16 w-1 h-1 rounded-full bg-slate-800" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Integration Ecosystem (Reverse Scroll) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#020205] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#020205] to-transparent z-10" />
          
          <div className="flex logo-marquee-reverse gap-20">
            {[...integrationStack, ...integrationStack, ...integrationStack, ...integrationStack].map((int, index) => {
               const Icon = int.icon;
               return (
                <div key={index} className="flex-shrink-0 flex items-center gap-4 group/item cursor-default transition-all duration-500 hover:scale-105">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${int.color}-500/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity`} />
                    <Icon className="w-7 h-7 text-slate-400 group-hover/item:text-white transition-colors duration-500 relative" />
                  </div>
                  <span className="text-slate-400 font-bold text-sm tracking-tight group-hover/item:text-white transition-colors duration-500">{int.name}</span>
                  <div className="ml-16 w-1 h-1 rounded-full bg-slate-800" />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Trust Badges Summary (Subtle) */}
      <div className={`mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 px-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-30 hover:opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-colors hover:text-emerald-400">
             <ShieldCheck className="w-4 h-4" /> SOC-2 Compliant
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-colors hover:text-orange-400">
             <Zap className="w-4 h-4" /> High Performance
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest transition-colors hover:text-blue-400">
             <Code2 className="w-4 h-4" /> Clean Architecture
          </div>
      </div>
    </section>
  );
};

export default TrustedBy;
