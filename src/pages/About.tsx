import usePageTitle from '../hooks/usePageTitle';
import { Target, Rocket, CheckCircle2, ChevronRight, ShieldCheck, BrainCircuit, ArrowRight, Code2, Lightbulb, Layers } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrustedBy from '../sections/TrustedBy';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const navigate = useNavigate();
  usePageTitle('About Nexol');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Absolute Precision",
      desc: "Good enough is never an option. We operate with an engineering-first mindset, ensuring every structural decision is backed by rigorous validation and built for unparalleled stability.",
      icon: Target,
      color: "from-cyan-500/20",
      border: "hover:border-cyan-500/50",
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      glow: "shadow-[0_0_50px_rgba(34,211,238,0.1)]"
    },
    {
      title: "Strategic Impact",
      desc: "Technical excellence is only valuable when it drives business growth. We prioritize ROI, scaling capabilities, and strategic market advantages in every single engagement.",
      icon: Rocket,
      color: "from-[#6F3DFF]/20",
      border: "hover:border-[#6F3DFF]/50",
      iconColor: "text-[#a98cff]",
      iconBg: "bg-[#6F3DFF]/10",
      glow: "shadow-[0_0_50px_rgba(111,61,255,0.1)]"
    },
    {
      title: "Shared Ownership",
      desc: "We don't view ourselves merely as vendors, but as an extension of your own leadership team. Your mission-critical goals become our primary directive and shared reality.",
      icon: ShieldCheck,
      color: "from-emerald-500/20",
      border: "hover:border-emerald-500/50",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      glow: "shadow-[0_0_50px_rgba(16,185,129,0.1)]"
    }
  ];

  const processPhases = [
    { name: "Discovery & Strategy", icon: Lightbulb, desc: "Deep-dive analysis of your business logic, market position, and technical bottlenecks." },
    { name: "Design & Prototyping", icon: Layers, desc: "Architecting the solution blueprint with a focus on scalable UI/UX and system topology." },
    { name: "Development & Iteration", icon: Code2, desc: "Agile, high-velocity engineering with continuous CI/CD pipelines and rigorous QA." },
    { name: "Deployment & Scale", icon: Rocket, desc: "Seamless launch, cloud infrastructure provisioning, and performance optimization." }
  ];

  const milestones = [
    { number: "250+", label: "Enterprise Deployments" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "$120M+", label: "Client ROI Generated" },
    { number: "15+", label: "Global Awards" },
  ];

  return (
    <div className="bg-[#0B0B12] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. Hero Section: The Nexol Story */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-office.jpg')] bg-cover bg-center opacity-10 blur-sm mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12]/80 via-[#0B0B12]/95 to-[#0B0B12]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] mb-3 block">WHY NEXOL</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]"
          >
            Architecting Tomorrow's <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-cyan-400">Digital Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-10"
          >
            We build the mission-critical software and AI infrastructure that powers the world's most ambitious enterprises. Precision engineering for a digital-first reality.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button onClick={() => window.scrollBy({ top: 800, behavior: 'smooth' })} className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-[#6F3DFF] hover:bg-[#7C52FF] text-white font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(111,61,255,0.4)] flex items-center justify-center gap-2 text-sm sm:text-base">
              Explore Our Journey <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Values & Principles */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight"
          >
            Our Guiding Principles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed opacity-60"
          >
            The foundational ethos that drives our operations, strategic partnerships, and structural architecture.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-[#141423]/80 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-slate-800 ${v.border} transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full shadow-2xl`}
            >
              {/* Background Flare */}
              <div className={`absolute -inset-20 bg-gradient-to-br ${v.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${v.iconBg} border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <v.icon className={`w-8 h-8 ${v.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 4. Our Approach & Methodology: Ultra-Premium Redesign */}
      <section className="py-20 relative px-6 lg:px-12 overflow-hidden bg-[#0a0a0f]">
        {/* Deep ambient background animations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6F3DFF]/10 via-transparent to-transparent opacity-80 blur-[100px] pointer-events-none animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase">The Implementation Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 tracking-tight drop-shadow-lg">Engineering Success Together</h2>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">A transparent, rigorous methodology designed to eliminate risk and guarantee scalable enterprise outcomes.</p>
          </div>

          <div className="relative mt-12 sm:mt-20">
            {/* Animated Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-slate-800/50">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#6F3DFF] to-transparent animate-[slide_3s_linear_infinite]" style={{ backgroundSize: '200% 100%' }} />
            </div>
            
            <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {processPhases.map((phase, i) => (
                <div 
                  key={i} 
                  className={`relative flex flex-col items-center text-center group animate-fade-in-up`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="relative mb-8 sm:mb-10 w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center">
                     {/* Floating Glowing Aura */}
                     <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6F3DFF]/20 to-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     
                     {/* Floating Box Container with custom bounce/float simulation */}
                     <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-b from-[#1a1a2e] to-[#0B0B12] border border-slate-700/50 flex items-center justify-center transform group-hover:-translate-y-4 group-hover:rotate-3 group-hover:border-[#6F3DFF]/50 group-hover:shadow-[0_20px_40px_-5px_rgba(111,61,255,0.4)] transition-all duration-500 relative z-10 backdrop-blur-xl">
                        <phase.icon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-500 group-hover:text-white transition-colors duration-300 drop-shadow-md" />
                        
                        {/* High-end Number Badge */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#6F3DFF] to-blue-600 text-white shadow-[0_0_20px_rgba(111,61,255,0.6)] text-sm font-black flex items-center justify-center border-2 border-[#0B0B12] transform group-hover:scale-125 transition-transform duration-500">
                          {i + 1}
                        </div>
                     </div>
                  </div>
                  
                  <div className="transform group-hover:translate-y-2 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight drop-shadow-md">{phase.name}</h3>
                    <p className="text-slate-400 text-base font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Impact & Milestones */}
      <section className="py-20 relative px-6 lg:px-12 overflow-hidden bg-[#020205]">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#6F3DFF]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Validated Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl">Our Journey of Impact</h2>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Numbers that speak to our commitment to absolute precision and continuous growth.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {milestones.map((m, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative text-center p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-[#0a0a0f] border border-white/5 shadow-2xl overflow-hidden"
              >
                {/* Internal Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <p className="text-3xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-500 mb-4 tracking-tighter drop-shadow-lg">{m.number}</p>
                  <div className="h-px w-12 bg-cyan-500/30 mx-auto mb-6 group-hover:w-24 transition-all duration-500" />
                  <p className="text-xs lg:text-sm font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Automation & Architecture Stack */}
      <section className="py-16 bg-[#020205] relative overflow-hidden border-t border-white/[0.04]">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#6F3DFF]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black text-slate-400 tracking-[0.35em] uppercase">Live Enterprise Stack</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
                <span className="text-white">Automation & </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-[#6F3DFF]">Architecture Stack.</span>
              </h2>
              <p className="text-slate-400 font-light mt-4 max-w-xl leading-relaxed">
                The complete ecosystem of tools, frameworks, and platforms we deploy across enterprise engagements globally.
              </p>
            </div>

            {/* Trust stat chips */}
            <div className="flex flex-wrap gap-3 lg:justify-end shrink-0">
              {[
                { val: "40+", label: "Technologies" },
                { val: "SOC-2", label: "Aligned" },
                { val: "99.9%", label: "Uptime SLA" },
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center"
                >
                  <p className="text-white font-black text-xl tracking-tight">{s.val}</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
          
        <TrustedBy />
      </section>


      {/* 7. Careers / Culture */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
            className="bg-[#0a0a0f] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-20 overflow-hidden relative group shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6F3DFF]/10 to-cyan-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="absolute -top-20 -right-20 p-32 opacity-10 mix-blend-screen pointer-events-none">
            <motion.div
               animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
               <BrainCircuit className="w-96 h-96 text-cyan-400 drop-shadow-[0_0_50px_rgba(34,211,238,0.8)]" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.h2 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-xl"
            >
               Innovate. Grow. Thrive.
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="text-lg text-slate-300 font-light mb-10 leading-relaxed"
            >
              We are a collective of obsessed engineers, designers, and strategists. We believe in continuous learning, deep technical challenges, and a culture that rewards merit over hierarchy.
            </motion.p>
            
            <ul className="space-y-4 mb-12">
              {['Continuous R&D Budgets', 'Global Remote-First Flexibility', 'Equity & Profit-Sharing Tracks'].map((item, i) => (
                <motion.li 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                   className="flex items-center gap-4 text-slate-300 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                     <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.7, duration: 0.5 }}
               onClick={() => navigate('/contact')}
               className="h-14 inline-flex items-center justify-center gap-3 bg-white text-[#020205] px-8 rounded-full font-bold text-[13px] tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 border border-transparent transition-all duration-300 group/btn"
            >
              Book Strategic Consultation <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;
