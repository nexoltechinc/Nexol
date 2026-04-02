import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Server, Cpu, Network, Brain } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();



  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } as any }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-x-hidden bg-[#020205] selection:bg-cyan-500/30">
      
      {/* Abstract Architectural Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdmgtMzhWM2gtMzhWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz4KPC9zdmc+')] opacity-20 mix-blend-screen" />
         
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(34,211,238,0.15)_0%,_transparent_60%)] blur-[120px]" 
         />
         <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,_rgba(111,61,255,0.1)_0%,_transparent_60%)] blur-[120px]" 
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-10 lg:pt-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
             variants={containerVariants}
             initial="hidden"
             animate="show"
             className="col-span-1 lg:col-span-6 xl:col-span-7 flex flex-col"
          >
            
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 sm:mb-10 w-fit backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </div>
              <span className="text-[11px] font-black text-cyan-400 tracking-[0.2em] uppercase drop-shadow-md">AI Automation For Clinics</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-[4rem] font-black text-white mb-6 sm:mb-8 leading-[1.05] tracking-tighter drop-shadow-2xl">
              Custom Software And <br className="hidden md:block"/> 
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">
                 AI Workflows For Clinics.
                 <motion.span 
                   animate={{ x: ["0%", "100%", "0%"] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                   className="absolute bottom-1 left-0 w-1/3 h-[3px] bg-cyan-400 blur-[2px] opacity-60"
                 />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[15px] sm:text-lg lg:text-xl text-slate-300 font-light mb-8 max-w-xl leading-relaxed drop-shadow-md">
              Nexol helps dental, medical, and multi-location practices reduce no-shows, speed up patient response, and remove manual admin with AI calling agents, custom dashboards, and workflow systems built around your staff.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto group relative h-14 sm:h-16 px-8 sm:px-10 rounded-full bg-white text-[#020205] font-black tracking-tight text-base sm:text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F3DFF]/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                   Book Automation Audit
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => navigate('/portfolio')}
                className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-full font-bold text-sm uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-center gap-3 group"
              >
                See Clinic Use Cases
                <span className="w-6 h-px bg-slate-600 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-500 block" />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Brain className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">AI calling and follow-up</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">HIPAA-aware workflow design</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Server className="h-4 w-4 text-blue-400" />
                <span className="text-xs font-semibold text-slate-200">Custom dashboards for staff</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Physics Simulation Data Nodes */}
          <div className="hidden lg:block col-span-1 lg:col-span-6 xl:col-span-5 relative h-full min-h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center translate-x-10">
              
              {/* Outer Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite] scale-110" />
              <div className="absolute inset-10 rounded-full border border-white/[0.05] animate-[spin_40s_linear_infinite_reverse] scale-100" />
              <div className="absolute inset-24 rounded-full border border-cyan-500/10 border-dashed animate-[spin_30s_linear_infinite] scale-90" />
              
              {/* Core Floating Node */}
              <motion.div 
                 animate={{ y: [-15, 15, -15], rotate: [0, 2, -2, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[10%] left-[10%] z-20"
              >
                <div className="w-28 h-28 rounded-3xl bg-[#0a0a0f]/80 backdrop-blur-2xl border border-blue-500/30 shadow-[0_20px_50px_rgba(59,130,246,0.2)] flex items-center justify-center rotate-12 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Cpu className="w-12 h-12 text-blue-400 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
              </motion.div>

              {/* Secondary Floating Node */}
              <motion.div 
                 animate={{ y: [15, -15, 15], rotate: [0, -4, 4, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[10%] right-[10%] z-20"
              >
                <div className="w-36 h-36 rounded-3xl bg-[#0a0a0f]/80 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(52,211,153,0.2)] flex items-center justify-center -rotate-6 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <ShieldCheck className="w-16 h-16 text-emerald-400 filter drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                </div>
              </motion.div>

              {/* Tertiary Floating Node */}
              <motion.div 
                 animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                 className="absolute top-[35%] right-[0%] z-20"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-[#0a0a0f]/80 backdrop-blur-2xl border border-[#6F3DFF]/30 shadow-[0_20px_50px_rgba(111,61,255,0.2)] flex items-center justify-center rotate-45 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[#6F3DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Network className="w-10 h-10 text-[#6F3DFF] -rotate-45 filter drop-shadow-[0_0_15px_rgba(111,61,255,0.5)]" />
                </div>
              </motion.div>

              {/* New AI/ML Node */}
              <motion.div 
                 animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
                 transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-[40%] left-[-5%] z-20"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-[#0a0a0f]/80 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_20px_50px_rgba(34,211,238,0.2)] flex items-center justify-center -rotate-12 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Brain className="w-10 h-10 text-cyan-400 rotate-12 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                </div>
              </motion.div>

              {/* Center Status Nexus */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.5, type: "spring" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                 <div className="px-8 py-4 bg-[#141423]/90 backdrop-blur-3xl border border-cyan-400/40 rounded-full flex items-center gap-4 shadow-[0_0_60px_rgba(34,211,238,0.3)] cursor-default group hover:scale-105 transition-transform">
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                       <Server className="w-3 h-3 text-cyan-400" />
                       <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 group-hover:animate-ping" />
                    </div>
                    <span className="text-xs font-black text-white tracking-[0.2em] uppercase drop-shadow-md">Clinic Ops Online</span>
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                 </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
