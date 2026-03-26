import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Shield, Terminal, Network, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Testimonials from '../sections/Testimonials';
import TrustedBy from '../sections/TrustedBy';
import usePageTitle from '../hooks/usePageTitle';

const ContactPage = () => {
  usePageTitle('Initiate Protocol - Nexol Tech Solutions');
  
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      label: "Strategic Inquiries",
      val: "solutions@nexol.tech",
      icon: Mail,
      sub: "Average response: < 2 hours",
      color: "from-cyan-500",
      activeBorder: "border-cyan-500/50",
      activeBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      shadow: "shadow-[0_0_30px_rgba(34,211,238,0.2)]"
    },
    {
      label: "Direct Briefing",
      val: "+1 (516) 400-XXXX",
      icon: Phone,
      sub: "Mon - Fri, 9am - 6pm EST",
      color: "from-blue-500",
      activeBorder: "border-blue-500/50",
      activeBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    },
    {
      label: "Global HQ",
      val: "Islandia, NY, United States",
      icon: MapPin,
      sub: "Corporate Hub",
      color: "from-[#6F3DFF]",
      activeBorder: "border-[#6F3DFF]/50",
      activeBg: "bg-[#6F3DFF]/10",
      iconColor: "text-[#6F3DFF]",
      shadow: "shadow-[0_0_30px_rgba(111,61,255,0.2)]"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } as any }
  };

  return (
    <div className="bg-[#020205] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden" ref={targetRef}>
      
      {/* Dynamic Grid Background Core */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdmgtMzhWM2gtMzhWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz4KPC9zdmc+')] opacity-40" />
      </div>

      <div className="pt-28 sm:pt-40 pb-16 sm:pb-24 max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="mb-24 relative">
          {/* Deep Ambient Glow */}
          <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(34,211,238,0.15)_0%,_transparent_70%)] blur-[80px] -z-10 pointer-events-none" 
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-xl"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <span className="text-[11px] font-black text-cyan-400 tracking-[0.2em] uppercase">Discovery Hub</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl"
          >
            Initiate Your <br className="hidden lg:block"/> 
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">Architectural Audit.</span>
              {/* Scanline effect on text */}
              <motion.span 
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-1/4 h-[4px] bg-cyan-400 blur-[2px] opacity-70"
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed font-light"
          >
            Ready to harden your infrastructure or scale your AI ecosystem? Our senior directors personally 
            oversee every initial discovery briefing to ensure exact technical alignment.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
          {/* Left Column: Contact Methods */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 space-y-6"
          >
            {contactMethods.map((m, i) => {
              const isActive = activeCard === i;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  onClick={() => setActiveCard(i)}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${isActive ? `${m.activeBorder} ${m.shadow} bg-[#141423]` : 'bg-[#0a0a0f] border-white/[0.05] hover:border-cyan-500/30'}`}
                >
                  {/* Background Active/Hover Flare */}
                  <div className={`absolute -inset-20 bg-gradient-to-br ${m.color} to-transparent blur-3xl transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                  <div className="flex items-center gap-5 relative z-10">
                     <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 shadow-xl ${isActive ? `${m.activeBg} border-transparent scale-110 -rotate-3` : 'bg-[#141423] border-white/10 group-hover:scale-110 group-hover:-rotate-3'}`}>
                       <m.icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? m.iconColor : 'text-slate-400 group-hover:text-white'}`} />
                     </div>
                     <div>
                       <p className={`text-[10px] font-black uppercase tracking-[0.25em] mb-1 transition-colors ${isActive ? m.iconColor : 'text-slate-500'}`}>{m.label}</p>
                       <p className="text-lg sm:text-xl font-bold text-white tracking-tight">{m.val}</p>
                       <p className={`text-sm font-light mt-1 transition-all duration-300 ${isActive ? 'text-slate-300 opacity-100 h-auto mt-2' : 'text-slate-400 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:mt-2'}`}>{m.sub}</p>
                     </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Support Metrics Widget */}
            <motion.div variants={itemVariants} className="relative bg-gradient-to-b from-[#141423] to-[#0a0a0f] border border-slate-800 rounded-3xl p-8 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
              <div className="flex items-center gap-3 text-white font-bold mb-8 relative z-10">
                 <Network className="w-5 h-5 text-blue-400 group-hover:animate-spin" style={{ animationDuration: '4s' }} />
                 <span className="tracking-wide">Global Connectivity</span>
              </div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                 <div className="p-5 bg-black/40 rounded-2xl border border-white/5 text-center group-hover:border-blue-500/20 transition-colors duration-500">
                    <p className="text-blue-400 font-black text-2xl mb-1 drop-shadow-md">24/7</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Emergency</p>
                 </div>
                 <div className="p-5 bg-black/40 rounded-2xl border border-white/5 text-center group-hover:border-cyan-500/20 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl animate-[pulse_2s_infinite]" />
                    <p className="text-cyan-400 font-black text-2xl mb-1 flex items-center justify-center gap-1 drop-shadow-md">
                      Live
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute top-4 right-4" />
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Presence</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Complex Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 40 }}
            className="lg:col-span-8"
          >
            <div className="bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
               
               {/* Architectural Form Background */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#6F3DFF]/10 to-transparent blur-[120px] -z-10 pointer-events-none transform -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[100px] -z-10 pointer-events-none transform translate-y-1/2 -translate-x-1/2" />
               
               <form className="space-y-8 relative z-10">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                        <Terminal className="w-3.5 h-3.5" />
                        Lead Architect Name
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="e.g. Dr. Alexander Pierce" 
                          className="w-full h-14 bg-[#141423]/50 border-b-2 border-slate-700/50 px-6 text-white text-lg font-medium focus:outline-none focus:border-cyan-400 focus:bg-[#141423] transition-all duration-300 placeholder:text-slate-500 rounded-t-xl"
                        />
                      </div>
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-2 group-focus-within:text-cyan-400 transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        Enterprise Email
                      </label>
                      <input 
                        type="email" 
                        placeholder="a.pierce@enterprise.com" 
                        className="w-full h-14 bg-[#141423]/50 border-b-2 border-slate-700/50 px-6 text-white text-lg font-medium focus:outline-none focus:border-cyan-400 focus:bg-[#141423] transition-all duration-300 placeholder:text-slate-500 rounded-t-xl"
                      />
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-2 group-focus-within:text-[#6F3DFF] transition-colors">
                        <Shield className="w-3.5 h-3.5" />
                        Primary Objective
                      </label>
                      <div className="relative">
                        <input 
                          type="text"
                          list="services-list"
                          placeholder="Search or entry custom service..."
                          className="w-full h-14 bg-[#141423]/50 border-b-2 border-slate-700/50 px-6 text-white text-lg font-medium focus:outline-none focus:border-[#6F3DFF] focus:bg-[#141423] transition-all duration-300 placeholder:text-slate-500 rounded-t-xl"
                        />
                        <datalist id="services-list">
                          <option value="AI Workflow Automation" />
                          <option value="Enterprise Software Engineering" />
                          <option value="Cloud Architecture & Scalability" />
                          <option value="AI Voice Agent Deployment" />
                          <option value="E-Commerce Ecosystems" />
                          <option value="Mobile App Strategy & Engineering" />
                          <option value="Cognitive Automation Audit" />
                        </datalist>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none opacity-50" />
                      </div>
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-2 group-focus-within:text-[#6F3DFF] transition-colors">
                        <Clock className="w-3.5 h-3.5" />
                        Deployment Timeline
                      </label>
                      <div className="relative">
                        <select className="w-full h-14 bg-[#141423]/50 border-b-2 border-slate-700/50 px-6 text-white text-lg font-medium focus:outline-none focus:border-[#6F3DFF] focus:bg-[#141423] transition-all duration-300 appearance-none cursor-pointer rounded-t-xl">
                          <option>Immediate Execution (&lt; 1 Month)</option>
                          <option>Strategic Roadmap (1-3 Months)</option>
                          <option>Planned Architecture (3+ Months)</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      </div>
                    </div>
                 </div>

                 <div className="space-y-3 group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-2 group-focus-within:text-blue-400 transition-colors">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Project Brief & ROI Targets
                    </label>
                    <textarea 
                      rows={5}
                      placeholder="Describe your current technical bottleneck, intended operational scale, and target metrics..."
                      className="w-full bg-[#141423]/50 border-b-2 border-slate-700/50 p-6 text-white text-lg font-medium focus:outline-none focus:border-blue-400 focus:bg-[#141423] transition-all duration-300 placeholder:text-slate-500 rounded-t-xl resize-none"
                    />
                 </div>

                 <button 
                   type="button"
                   className="relative w-full h-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-black text-lg overflow-hidden group shadow-[0_15px_40px_rgba(34,211,238,0.2)] hover:shadow-[0_20px_50px_rgba(34,211,238,0.4)] transition-all duration-300 outline-none focus:ring-4 focus:ring-cyan-500/50"
                 >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-[#6F3DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 -inset-full h-full w-1/2 block z-5 [transform:skewX(-20deg)] bg-white/20 group-hover:animate-[slide_1.5s_ease-in-out_infinite]" />
                    <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-md">
                       <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                       Initiate Secure Transmission
                    </span>
                 </button>

                 <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/5">
                    <Shield className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                      All Transmissions heavily encrypted via 256-bit architectural SLA.
                    </p>
                 </div>
               </form>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.03] bg-[#06060A]">
        <TrustedBy />
      </div>
      
      <div className="relative z-10 bg-[#020205] border-t border-white/[0.03]">
        <div className="py-8 sm:py-16">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
