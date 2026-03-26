import { useEffect, useState, useRef } from 'react';
import { Bot, ChevronDown, CheckCircle2, ShieldCheck, CalendarHeart, Clock, TrendingDown, Users, Lock, Activity, ArrowRight, ActivitySquare, Sparkles, Cpu, Fingerprint, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';

const AICallingAgent = () => {
  const navigate = useNavigate();
  usePageTitle('AI Calling Agent - Healthcare');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problems = [
    { 
      pain: 'Crippling No-Show Rates', 
      painDesc: 'Lost revenue and disrupted schedules due to unconfirmed appointments.',
      solution: 'Automated Outreach', 
      solutionDesc: 'Intelligent, conversational reminders driving a 99% confirmation rate.',
      icon: TrendingDown
    },
    { 
      pain: 'Staff Burnout', 
      painDesc: 'Front desk teams overwhelmed by endless outbound confirmation calls.',
      solution: '24/7 Virtual Receptionist', 
      solutionDesc: 'Offloads routine calls entirely, freeing staff for high-value patient care.',
      icon: Users
    },
    { 
      pain: 'Missed After-Hours Leads', 
      painDesc: 'New patients calling after 5 PM are lost to voicemail or competitors.',
      solution: 'Always-On Availability', 
      solutionDesc: 'Capture, qualify, and seamlessly schedule new patients at any hour.',
      icon: Clock
    }
  ];

  const features = [
    { title: "24/7 Autonomous Scheduling", desc: "Integrates directly with your calendar to book, reschedule, or cancel appointments without human intervention.", icon: CalendarHeart, size: "col-span-12 lg:col-span-8", color: "from-[#6F3DFF]/20 to-[#6F3DFF]/5" },
    { title: "Multi-parameter Routing", desc: "Instantly categorizes urgency and intent, transferring 911-level inquiries immediately.", icon: Fingerprint, size: "col-span-12 lg:col-span-4", color: "from-cyan-500/20 to-blue-500/5" },
    { title: "EMR / EHR Synchronization", desc: "Bi-directional syncing directly writes appointment data into Open Dental, Dentrix, Epic, and Athena.", icon: ActivitySquare, size: "col-span-12 lg:col-span-5", color: "from-emerald-500/20 to-emerald-900/10" },
    { title: "Empathetic Voice Cloning", desc: "Utterances, breaths, and emotional cadence engineered to sound indistinguishable from your top receptionist.", icon: Sparkles, size: "col-span-12 lg:col-span-7", color: "from-[#141423] to-[#6F3DFF]/10" }
  ];

  const processStages = [
    { step: "01", name: "Audit & Strategy", desc: "Analyzing current call volume and defining precise conversational scripts." },
    { step: "02", name: "Custom Voice Cloning", desc: "Crafting a professional, empathetic agency voice tailored to your brand." },
    { step: "03", name: "EHR Integration", desc: "Establishing secure, HIPAA-compliant bridges to your scheduling software." },
    { step: "04", name: "Deployment & Training", desc: "Shadow-mode testing followed by full autonomous patient outreach." }
  ];

  const faqs = [
    { q: "Is the AI Calling Agent HIPAA Compliant?", a: "Absolutely. Our architecture utilizes end-to-end encryption, BAA agreements, and secure isolated VPCs to ensure all patient health information (PHI) is strictly protected according to federal regulations." },
    { q: "Does it sound like a robot?", a: "No. We utilize state-of-the-art Voice Generation models that include realistic breaths, pauses, and empathetic tonal shifts. Patients rarely realize they are speaking to an AI." },
    { q: "What Practice Management systems do you integrate with?", a: "We feature deep integrations with Dentrix, Open Dental, Eaglesoft, Epic, AthenaHealth, and modern cloud-based schedulers via specialized APIs." },
    { q: "How fast can we deploy this?", a: "A standard integration takes between 2 to 4 weeks, largely depending on the complexity of your EHR system's API access and custom script requirements." }
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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } as any }
  };

  return (
    <div className="bg-[#020205] min-h-screen text-slate-300 font-sans selection:bg-[#6F3DFF]/30 overflow-hidden" ref={targetRef}>
      
      {/* 1. Ultra-Premium Kinetic Hero Section */}
      <section className="relative pt-48 pb-32 border-b border-white/5">
        {/* Deep Field Ambient Particles */}
        <div className="absolute inset-0 z-0">
           {/* Core Glow */}
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(111,61,255,0.15)_0%,_transparent_70%)] blur-[100px]" 
           />
           {/* Secondary Glow */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(34,211,238,0.1)_0%,_transparent_70%)] blur-[80px]" 
           />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(111,61,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] animate-[slide_2s_infinite]" />
            <Bot className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Next-Gen Patient Engagement</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.05] drop-shadow-2xl"
          >
            Automating Healthcare <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#6F3DFF] to-blue-500">With Cognitive Precision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-14"
          >
            Deploy hyper-realistic, HIPAA-compliant voice agents that effortlessly handle 10,000+ inbound calls, eradicate no-shows, and autonomously synchronize with your EHR.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
             <button 
                onClick={() => navigate('/contact')}
                className="group relative h-16 px-12 rounded-full bg-white text-[#020205] font-black tracking-tight text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F3DFF]/20 to-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                   Request a Strategic Briefing 
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
          </motion.div>

          {/* Luxury Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-white/[0.05]"
          >
            {[
              { icon: ShieldCheck, text: "End-to-End Encryption" },
              { icon: Activity, text: "99% Confirmation Rate" },
              { icon: Lock, text: "SOC2 & HIPAA Ready" }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#6F3DFF]/20 group-hover:border-[#6F3DFF]/50 transition-colors duration-500">
                   <trust.icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors">{trust.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Problem / Solution Matrix (Asymmetric Animated Depth) */}
      <section className="py-40 relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">Engineering Friction <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Out of Existence.</span></h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">We identified the massive operational leaks in modern clinics and built an autonomous cognitive layer to plug them permanently.</p>
         </motion.div>

         <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
         >
            {problems.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="grid lg:grid-cols-2 gap-6 items-stretch group relative z-10">
                 {/* The Problem Frame */}
                 <div className="p-10 rounded-3xl bg-rose-950/10 border border-rose-900/20 flex flex-col justify-center relative overflow-hidden group-hover:border-rose-900/40 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/5 blur-3xl rounded-full" />
                    <div className="flex items-start gap-5 relative z-10">
                       <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-rose-400" />
                       </div>
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.pain}</h3>
                         <p className="text-rose-200/50 leading-relaxed font-light text-lg">{item.painDesc}</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* The Solution Frame - Antigravity Float */}
                 <div className="p-10 rounded-3xl bg-gradient-to-br from-[#141423] to-[#0A0A10] border border-[#6F3DFF]/20 flex flex-col justify-center relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-[#6F3DFF]/50 hover:shadow-[0_20px_60px_-15px_rgba(111,61,255,0.3)] will-change-transform z-20">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }}
                      className="absolute top-0 right-0 w-48 h-48 bg-[#6F3DFF]/15 blur-3xl rounded-full" 
                    />
                    <div className="flex items-start gap-5 relative z-10">
                       <div className="w-12 h-12 rounded-2xl bg-[#6F3DFF] shadow-[0_0_30px_rgba(111,61,255,0.5)] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.solution}</h3>
                         <p className="text-indigo-200/70 leading-relaxed font-light text-lg">{item.solutionDesc}</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
         </motion.div>
      </section>

      {/* 3. Deep Architectural Bento Box (Features) */}
      <section className="py-40 bg-[#06060A] border-y border-white/[0.03] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-24 lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">System Architecture</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter">Autonomous Operations. <br/>Unlimited Scale.</h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">A strictly engineered, highly concurrent ecosystem capable of managing your entire front-of-house communications suite.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-6"
          >
            {features.map((block, i) => (
              <motion.div key={i} variants={itemVariants} className={`${block.size} group relative bg-[#0a0a0f] border border-white/[0.05] rounded-3xl p-10 lg:p-12 overflow-hidden hover:border-white/[0.1] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default will-change-transform`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                
                {/* Micro-interaction float elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-colors duration-1000" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl">
                      <block.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">{block.title}</h3>
                  </div>
                  <p className="text-slate-400 text-lg font-light leading-relaxed mt-4 group-hover:text-slate-300 transition-colors">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Security & Compliance Protocol: Zero-Trust Architecture */}
      <section className="py-40 relative overflow-hidden bg-[#020205]">
          {/* Deep Grid & Laser Scanners */}
         <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdmgtMzhWM2gtMzhWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz4KPC9zdmc+')] opacity-50" />
           <motion.div 
             animate={{ y: ["-10%", "110%"] }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.8)]" 
           />
         </div>

         <motion.div 
           style={{ y: yParallax }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(16,185,129,0.08)_0%,_transparent_60%)] pointer-events-none" 
         />
         
         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
            {/* Architectural Security Core Visual */}
            <div className="w-48 h-48 mx-auto mb-12 relative flex items-center justify-center">
               {/* Orbital Rings */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-emerald-500/10 rounded-full border-l-emerald-500/40 border-r-emerald-500/40" 
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-4 border border-emerald-500/20 rounded-full border-t-emerald-400/50 border-b-emerald-400/50" 
               />
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-8 border border-emerald-500/30 rounded-full bg-emerald-900/10 backdrop-blur-sm" 
               />
               
               {/* Core Shield */}
               <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-[#0A0D14] to-[#010103] border border-emerald-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.2)] z-10 backdrop-blur-2xl">
                 <ShieldCheck className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,1)]" />
                 
                 {/* Internal Pulse */}
                 <motion.div 
                   animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                   className="absolute inset-0 rounded-2xl border border-emerald-400/50" 
                 />
               </div>

               {/* Geometric nodes emitting from center */}
               <div className="absolute top-1/2 left-[-40%] w-24 h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent -translate-y-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute left-0 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(52,211,153,1)]" />
               </div>
               <div className="absolute top-1/2 right-[-40%] w-24 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent -translate-y-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute right-0 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(52,211,153,1)]" />
               </div>
            </div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl"
            >
               Zero-Trust Architecture.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Uncompromising PHI Security.</span>
            </motion.h2>
            
            <motion.p 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-xl text-slate-400 font-light max-w-3xl mx-auto mb-24 leading-relaxed"
            >
              Every API call and data packet is heavily guarded by advanced cryptographic protocols inside isolated VPC instances. 
              We bridge natively with top-tier Practice Management systems ensuring strict HIPAA compliance without latency.
            </motion.p>
            
            {/* Complex Data Mesh Interface */}
            <div className="relative mt-12">
               {/* Tech Blueprint Grid Line */}
               <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 -translate-y-1/2 z-0" />
               
               <div className="flex justify-center gap-12 lg:gap-20 max-w-6xl mx-auto relative z-10 flex-wrap lg:flex-nowrap">
                  {[
                    { name: 'Epic Systems', icon: ActivitySquare },
                    { name: 'Dentrix', icon: Network },
                    { name: 'Open Dental', icon: Cpu },
                    { name: 'AthenaHealth', icon: Lock }
                  ].map((partner, i) => (
                     <motion.div 
                       key={partner.name} 
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15, type: "spring", stiffness: 50 }}
                       className="relative group"
                     >
                        {/* Connecting Data Node */}
                        <div className="hidden lg:block absolute -top-8 left-1/2 w-[1px] h-8 bg-emerald-500/30 -translate-x-1/2 group-hover:bg-emerald-400 transition-colors" />
                        <div className="hidden lg:block absolute -top-9 left-1/2 w-2 h-2 rounded-full bg-emerald-900 border border-emerald-500 -translate-x-1/2 group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,1)] transition-all" />

                        <div className="w-56 h-32 rounded-2xl border border-slate-800 bg-[#0A0D14]/80 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-[#0A0D14] transition-all duration-500 overflow-hidden">
                           {/* Hover Scan Effect */}
                           <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
                           
                           <partner.icon className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 transition-colors mb-3" />
                           <span className="text-sm font-black text-slate-500 group-hover:text-white tracking-[0.15em] uppercase transition-colors z-10">{partner.name}</span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. The Integration Pipeline (As designed in About page) */}
      <section className="py-40 relative px-6 lg:px-12 overflow-hidden bg-[#06060A] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
             <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter">Your Path to Production</h2>
             <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">A strategic, zero-downtime deployment process architected specifically for high-volume medical workflows.</p>
          </motion.div>

          <div className="relative mt-20">
            {/* Animated Connector Line */}
            <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-slate-800/50">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#6F3DFF] to-transparent animate-[slide_3s_linear_infinite]" style={{ backgroundSize: '200% 100%' }} />
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid lg:grid-cols-4 gap-16 lg:gap-8 relative z-10"
            >
              {processStages.map((stage, i) => (
                <motion.div key={i} variants={itemVariants} className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-12 w-32 h-32 flex justify-center items-center">
                     <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6F3DFF]/20 to-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                     
                     <div className="w-24 h-24 rounded-3xl bg-[#0a0a0f] border border-white/10 flex items-center justify-center transform group-hover:-translate-y-4 group-hover:rotate-3 group-hover:border-[#6F3DFF]/50 group-hover:shadow-[0_20px_40px_-5px_rgba(111,61,255,0.4)] transition-all duration-500 relative z-10 will-change-transform backdrop-blur-xl">
                        <ActivitySquare className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors duration-300" />
                        
                        <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#6F3DFF] text-white shadow-[0_0_20px_rgba(111,61,255,0.6)] text-sm font-black flex items-center justify-center border-4 border-[#020205] transform group-hover:scale-125 transition-transform duration-500">
                          {stage.step}
                        </div>
                     </div>
                  </div>
                  
                  <div className="transform group-hover:translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{stage.name}</h4>
                    <p className="text-slate-400 font-light text-base z-10 relative group-hover:text-slate-300 leading-relaxed">{stage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Executive FAQ */}
      <section className="py-40 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Executive Briefing</h2>
          <p className="text-xl text-slate-400 font-light">Transparency regarding compliance, architecture, and network scalability.</p>
        </motion.div>
        
        <div className="space-y-4 relative z-10">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border border-white/5 rounded-2xl bg-[#0a0a0f] overflow-hidden transition-all duration-500 ${activeFAQ === i ? 'border-[#6F3DFF]/30 shadow-[0_10px_30px_-10px_rgba(111,61,255,0.2)]' : 'hover:border-white/10'}`}
            >
              <button 
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                className="w-full text-left p-8 flex items-center justify-between focus:outline-none"
              >
                <h4 className="text-lg lg:text-xl font-bold text-white pr-8 tracking-tight">{faq.q}</h4>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ${activeFAQ === i ? 'rotate-180 bg-[#6F3DFF] border-[#6F3DFF]' : 'bg-transparent hover:bg-white/5'}`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${activeFAQ === i ? 'text-white' : 'text-slate-400'}`} />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${activeFAQ === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-slate-400 font-light leading-relaxed text-lg border-t border-white/5 mt-2">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Final Deep Architectural CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 pb-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#0a0a0f] border border-white/10 rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Kinetic background system */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6F3DFF]/20 via-transparent to-cyan-500/10 opacity-40 group-hover:opacity-80 transition-opacity duration-1000" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-x-40 -inset-y-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-30 z-0 mix-blend-overlay"
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
             <div className="w-20 h-20 rounded-2xl bg-[#6F3DFF]/10 flex items-center justify-center mx-auto mb-10 border border-[#6F3DFF]/30 drop-shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
               <Bot className="w-10 h-10 text-white" />
             </div>
             <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">Ready to Transform Your Practice?</h2>
             <p className="text-xl text-slate-300 font-light mb-16 leading-relaxed">Book a zero-obligation strategic briefing with our lead architects to verify Nexol's cognitive capabilities for your exact workflows.</p>
             <button 
               onClick={() => navigate('/contact')}
               className="h-16 inline-flex items-center justify-center gap-4 bg-white text-[#020205] px-14 rounded-full font-black text-lg shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all group-hover:shadow-[0_0_80px_rgba(111,61,255,0.4)]"
             >
               Initiate Deployment <ArrowRight className="w-5 h-5"/>
             </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AICallingAgent;
