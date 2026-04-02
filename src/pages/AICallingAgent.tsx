import { useEffect, useState, useRef } from 'react';
import { Bot, CheckCircle2, ShieldCheck, CalendarHeart, Clock, TrendingDown, Users, Lock, Activity, ArrowRight, ActivitySquare, Sparkles, Cpu, Fingerprint, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';

const AICallingAgent = () => {
  const navigate = useNavigate();
  usePageTitle('AI Calling Agent For Medical Clinics');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problems = [
    { 
      pain: 'High No-Show Rates', 
      painDesc: 'Appointments fall through when confirmations and reminders depend on manual staff follow-up.',
      solution: 'Automated Appointment Confirmation', 
      solutionDesc: 'Confirm visits automatically, send reminders at the right time, and reduce preventable no-shows.',
      icon: TrendingDown
    },
    { 
      pain: 'Overloaded Front Desk Teams', 
      painDesc: 'Staff lose hours every week answering repeat questions, confirming appointments, and returning calls.',
      solution: '24/7 Call Handling', 
      solutionDesc: 'Handle routine patient calls automatically so your team can stay focused on the people in the clinic.',
      icon: Users
    },
    { 
      pain: 'Missed Calls After Hours', 
      painDesc: 'Voicemails and dropped calls turn into missed bookings, delayed follow-up, and lost revenue.',
      solution: 'Missed-Call Recovery', 
      solutionDesc: 'Capture demand after hours, respond faster, and help more callers turn into scheduled appointments.',
      icon: Clock
    }
  ];

  const features = [
    { title: "24/7 Appointment Handling", desc: "Answer calls, confirm visits, reschedule appointments, and manage common patient requests even when your front desk is busy.", icon: CalendarHeart, color: "from-[#6F3DFF]/20 to-[#6F3DFF]/5" },
    { title: "Smart Call Routing", desc: "Route urgent calls, new patient inquiries, and scheduling requests to the right workflow or staff member faster.", icon: Fingerprint, color: "from-cyan-500/20 to-blue-500/5" },
    { title: "EHR / PMS Integration", desc: "Connect with systems like Open Dental, Dentrix, Epic, Athena, and modern schedulers to keep appointment data aligned.", icon: ActivitySquare, color: "from-emerald-500/20 to-emerald-900/10" },
    { title: "Natural Human-Like Voice", desc: "Deliver clear, empathetic patient conversations that sound professional, easy to follow, and aligned with your clinic experience.", icon: Sparkles, color: "from-[#141423] to-[#6F3DFF]/10" }
  ];

  const processStages = [
    { step: "01", name: "Workflow Review", desc: "We review your call flow, scheduling process, missed-call gaps, and front-desk workload." },
    { step: "02", name: "Call Flow Setup", desc: "We build the scripts, routing logic, and patient call experience around how your clinic operates." },
    { step: "03", name: "Integration & Testing", desc: "We connect your scheduling or EHR tools, test handoffs, and validate HIPAA-ready workflows." },
    { step: "04", name: "Go Live & Improve", desc: "We launch, monitor call performance, and keep improving confirmations, routing, and call outcomes." }
  ];

  const faqs = [
    {
      category: "Compliance",
      q: "Is this HIPAA compliant?",
      a: "The system is designed with HIPAA-ready workflows, encrypted data handling, controlled access, and secure integration practices to support healthcare operations safely."
    },
    {
      category: "Integrations",
      q: "Can it connect with our existing EHR or scheduling system?",
      a: "Yes. We can integrate with common systems such as Dentrix, Open Dental, Epic, AthenaHealth, and other scheduling platforms depending on access and workflow requirements."
    },
    {
      category: "Patient Experience",
      q: "Will patients know they are speaking with AI?",
      a: "The voice experience is designed to sound natural, clear, and professional. The goal is to make patient communication easy to follow and comfortable, not robotic."
    },
    {
      category: "Escalation",
      q: "Can calls transfer to a human receptionist?",
      a: "Yes. Calls can be routed to staff based on urgency, call type, time of day, or any workflow rules your clinic needs."
    },
    {
      category: "Timeline",
      q: "How long does implementation take?",
      a: "Most deployments take about 2 to 4 weeks depending on integrations, call complexity, and how much customization your clinic needs."
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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } as any }
  };

  return (
    <div className="bg-[#020205] min-h-screen text-slate-300 font-sans selection:bg-[#6F3DFF]/30 overflow-hidden" ref={targetRef}>
      
      {/* 1. Hero Section */}
      <section className="relative border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
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
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">AI Calling Agents For Medical Clinics</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[1.05] drop-shadow-2xl"
          >
            Reduce No-Shows, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#6F3DFF] to-blue-500">Handle More Patient Calls.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            Automate appointment confirmations, recover missed calls, answer routine patient requests, and reduce front-desk pressure with an AI calling system built for healthcare operations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 sm:mb-24"
          >
             <button 
                onClick={() => navigate('/contact')}
                className="group relative w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-12 rounded-full bg-white text-[#020205] font-black tracking-tight text-base sm:text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F3DFF]/20 to-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                   Book a Demo
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
              { icon: Activity, text: "10,000+ Calls Managed Monthly" },
              { icon: CalendarHeart, text: "Appointment Confirmations" },
              { icon: Lock, text: "HIPAA-Ready Workflows" }
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

      {/* 2. Problem / Solution Matrix */}
      <section className="py-16 sm:py-20 lg:py-28 relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">Fix the Call Bottlenecks <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Slowing Your Practice.</span></h2>
            <p className="text-base sm:text-xl text-slate-400 font-light max-w-2xl mx-auto">This system is built to solve the everyday call problems that create extra admin work, missed bookings, and slower patient response.</p>
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
                 <div className="p-6 sm:p-10 rounded-3xl bg-rose-950/10 border border-rose-900/20 flex flex-col justify-center relative overflow-hidden group-hover:border-rose-900/40 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/5 blur-3xl rounded-full" />
                    <div className="flex items-start gap-5 relative z-10">
                       <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-rose-400" />
                       </div>
                       <div>
                         <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">{item.pain}</h3>
                         <p className="text-rose-200/50 leading-relaxed font-light text-base sm:text-lg">{item.painDesc}</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* The Solution Frame */}
                 <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#141423] to-[#0A0A10] border border-[#6F3DFF]/20 flex flex-col justify-center relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-[#6F3DFF]/50 hover:shadow-[0_20px_60px_-15px_rgba(111,61,255,0.3)] will-change-transform z-20">
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
                         <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">{item.solution}</h3>
                         <p className="text-indigo-200/70 leading-relaxed font-light text-base sm:text-lg">{item.solutionDesc}</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
         </motion.div>
      </section>

      {/* 3. Capabilities */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#06060A] border-y border-white/[0.03] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-14 sm:mb-16 lg:mb-18 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">Calling System Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-5 sm:mb-6 tracking-tighter leading-[1.05]">Built for High-Volume <br/>Patient Communication.</h2>
            <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 font-light leading-relaxed">From appointment confirmations to call routing and scheduling support, the system is designed to help clinics respond faster without growing front-desk workload.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-5 sm:gap-6 md:grid-cols-2"
          >
            {features.map((block, i) => (
              <motion.div key={i} variants={itemVariants} className="group relative h-full min-h-[240px] sm:min-h-[260px] bg-[#0a0a0f] border border-white/[0.05] rounded-3xl p-6 sm:p-8 lg:p-9 overflow-hidden hover:border-white/[0.1] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default will-change-transform">
                <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                
                {/* Micro-interaction float elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-colors duration-1000" />
                
                <div className="relative z-10 flex h-full flex-col items-start">
                  <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl">
                      <block.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white mb-4 tracking-tight leading-tight">{block.title}</h3>
                  <p className="max-w-[34rem] text-sm sm:text-base lg:text-[1.02rem] text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Security & Compliance */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#020205]">
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
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-10 sm:mb-12 relative flex items-center justify-center">
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
               className="text-3xl sm:text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl"
            >
               HIPAA-Ready Security <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">For Patient Calls.</span>
            </motion.h2>
            
            <motion.p 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-base sm:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-12 sm:mb-24 leading-relaxed"
            >
              We support encrypted data handling, secure integrations, controlled access, and audit-ready workflows so clinics can adopt automation with more confidence.
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

                        <div className="w-full max-w-[260px] sm:w-56 h-28 sm:h-32 rounded-2xl border border-slate-800 bg-[#0A0D14]/80 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-[#0A0D14] transition-all duration-500 overflow-hidden">
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

      {/* 5. Setup Process */}
      <section className="py-16 sm:py-20 lg:py-28 relative px-6 lg:px-12 overflow-hidden bg-[#06060A] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 sm:mb-24"
          >
             <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter">Simple Setup for Your Clinic</h2>
             <p className="text-base sm:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">We keep implementation practical: review the workflow, connect the right systems, test the calls, and launch with a clear rollout plan.</p>
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

      {/* 6. FAQ */}
      <section className="py-16 sm:py-20 lg:py-28 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(111,61,255,0.08),_transparent_70%)] blur-[70px]" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[320px] bg-[radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.05),_transparent_70%)] blur-[90px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F3DFF]/10 border border-[#6F3DFF]/20 mb-8 backdrop-blur-xl">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#6F3DFF] animate-pulse" />
            <span className="text-[10px] font-black text-[#9f7aea] tracking-[0.35em] uppercase">Common Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter drop-shadow-xl relative inline-block">
            Common Questions.
            <motion.span 
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-1/3 h-[3px] bg-[#6F3DFF] blur-[2px] opacity-70"
            />
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto">Straight answers about compliance, integrations, rollout, patient experience, and call handling.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative border rounded-2xl overflow-hidden transition-all duration-500 ${
                activeFAQ === i
                  ? 'border-[#6F3DFF]/50 bg-gradient-to-br from-[#0e0b1f] to-[#0a0a0f] shadow-[0_0_50px_-10px_rgba(111,61,255,0.35)]'
                  : 'border-white/[0.06] bg-[#0a0a0f] hover:border-white/[0.12] hover:bg-[#0d0d14]'
              }`}
            >
              {activeFAQ === i && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#6F3DFF]/20 blur-[60px] rounded-full pointer-events-none" />
              )}

              <button 
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-start gap-4">
                  <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black tracking-wider transition-all duration-300 ${
                    activeFAQ === i ? 'bg-[#6F3DFF] text-white shadow-[0_0_20px_rgba(111,61,255,0.5)]' : 'bg-white/5 text-slate-500'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className={`text-[9px] font-black uppercase tracking-[0.3em] block mb-2 transition-colors duration-300 ${
                      activeFAQ === i ? 'text-[#9f7aea]' : 'text-slate-600'
                    }`}>
                      {faq.category}
                    </span>
                    <h4 className={`text-sm sm:text-base font-bold pr-4 tracking-tight leading-snug transition-colors duration-300 ${
                      activeFAQ === i ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {faq.q}
                    </h4>
                  </div>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500 mt-1 ${
                  activeFAQ === i
                    ? 'bg-[#6F3DFF] border-[#6F3DFF] rotate-45 shadow-[0_0_15px_rgba(111,61,255,0.5)]'
                    : 'bg-[#141423] border-white/10 hover:border-white/20'
                }`}>
                  <svg className={`w-3.5 h-3.5 transition-colors ${activeFAQ === i ? 'text-white' : 'text-slate-400'}`} viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeFAQ === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-12 border-l-2 border-[#6F3DFF]/30">
                    <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
        >
          <div>
            <p className="text-white font-bold text-lg tracking-tight mb-1">Need help reviewing your clinic workflow?</p>
            <p className="text-slate-500 text-sm font-light">We can walk through your call flow and show where automation will help first.</p>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="shrink-0 h-12 inline-flex items-center gap-3 bg-[#6F3DFF] hover:bg-[#7C52FF] text-white px-8 rounded-full font-black text-[12px] uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(111,61,255,0.4)] hover:scale-105"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12 pb-16 sm:pb-24 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(111,61,255,0.12)_0%,_transparent_70%)] blur-[90px]" />
          <div className="absolute bottom-0 right-[18%] h-[280px] w-[280px] bg-[radial-gradient(circle,_rgba(34,211,238,0.08)_0%,_transparent_70%)] blur-[90px]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-12 lg:py-16 text-center group"
        >
          {/* Kinetic background system */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6F3DFF]/12 via-transparent to-cyan-500/8 opacity-60 group-hover:opacity-90 transition-opacity duration-1000" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-x-24 -inset-y-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-20 z-0 mix-blend-overlay"
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
             <div className="w-20 h-20 rounded-2xl bg-[#6F3DFF]/10 flex items-center justify-center mx-auto mb-10 border border-[#6F3DFF]/30 drop-shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
               <Bot className="w-10 h-10 text-white" />
             </div>
             <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl">Ready to Reduce Missed Calls and No-Shows?</h2>
             <p className="text-base sm:text-xl text-slate-300 font-light mb-10 sm:mb-16 leading-relaxed">Book a demo and we will show how the calling system can fit your clinic, handle patient calls, and reduce manual follow-up work.</p>
             <button 
               onClick={() => navigate('/contact')}
                className="w-full sm:w-auto h-14 sm:h-16 inline-flex items-center justify-center gap-4 bg-white text-[#020205] px-8 sm:px-14 rounded-full font-black text-base sm:text-lg shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all group-hover:shadow-[0_0_80px_rgba(111,61,255,0.4)]"
             >
               Book a Demo <ArrowRight className="w-5 h-5"/>
             </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AICallingAgent;
