import { useEffect, useState, useRef } from 'react';
import { Bot, ArrowRight, ShieldCheck, Zap, Server, Activity, Database, Cloud, Network, Search, Layers, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';

const Solutions = () => {
  const navigate = useNavigate();
  usePageTitle('Clinic Automation Services | AI Calling Agents, Dashboards & Workflow Automation');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number>(0);

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreArchitectures = [
    { title: "AI Calling Agents", desc: "Handle inbound calls, confirm appointments, recover missed calls, and reduce front-desk workload.", icon: Bot, span: "col-span-12 lg:col-span-8", color: "from-[#6F3DFF]/20 to-indigo-900/10" },
    { title: "Clinic Dashboards", desc: "Track bookings, no-shows, call response, and team workload in one custom view.", icon: Server, span: "col-span-12 lg:col-span-4", color: "from-cyan-500/20 to-blue-900/10" },
    { title: "Custom CRM & Intake", desc: "Connect forms, follow-up, lead routing, and patient intake so requests stop getting lost.", icon: Database, span: "col-span-12 lg:col-span-4", color: "from-emerald-500/20 to-emerald-900/10" },
    { title: "Workflow Automation", desc: "Connect scheduling, EHR, phone, email, and internal operations to reduce manual admin work.", icon: Cloud, span: "col-span-12 lg:col-span-8", color: "from-rose-500/20 to-purple-900/10" }
  ];

  const specificServices = [
    { name: "Appointment Confirmation Automation", detail: "Reduce no-shows with reminder logic, confirmations, rescheduling flows, and follow-up built around your clinic schedule." },
    { name: "Missed-Call Recovery", detail: "Capture after-hours calls, route follow-up automatically, and recover opportunities that would otherwise sit in voicemail." },
    { name: "Patient Intake & Routing", detail: "Send inquiries to the right workflow, team member, or next step without manual triage slowing everything down." },
    { name: "Custom Reporting Dashboards", detail: "Give clinic owners and managers visibility into calls, bookings, no-shows, follow-up speed, and staff workload." }
  ];

  const differentiators = [
    { title: "Built Around Clinic Workflows", text: "We focus on the real bottlenecks clinics deal with every week: missed calls, scheduling friction, no-shows, manual follow-up, and reporting gaps." },
    { title: "Clear Delivery Process", text: "You get a practical rollout plan, defined workflow scope, and clear communication from audit through launch." },
    { title: "Outcome-Driven", text: "The goal is simple: reduce manual work, improve patient response time, and help your team book and manage appointments more efficiently." }
  ];

  const timeline = [
    { phase: "01. Audit", desc: "Review call handling, no-show patterns, scheduling flow, and manual admin work." },
    { phase: "02. Plan", desc: "Map the right workflow, integrations, and rollout plan for your clinic." },
    { phase: "03. Build", desc: "Set up the calling logic, dashboards, routing, or custom workflow system." },
    { phase: "04. Test", desc: "Validate calls, handoffs, integrations, and staff workflows before launch." },
    { phase: "05. Improve", desc: "Measure results and keep refining the system based on clinic performance." }
  ];

  const faqs = [
    { 
      category: "Best Fit",
      q: "What kinds of clinics do you work with?", 
      a: "We work best with dental, medical, specialty, and multi-location clinics that need better call handling, scheduling support, intake workflows, or operations visibility."
    },
    { 
      category: "Integrations",
      q: "Can you connect with our existing scheduling or EHR system?", 
      a: "Yes. We can work with common scheduling and healthcare systems depending on access, workflow requirements, and the specific tools your clinic already uses."
    },
    { 
      category: "Calls",
      q: "Can calls transfer to our staff?", 
      a: "Yes. Calls can be routed based on urgency, time of day, caller intent, or any workflow rules your clinic needs."
    },
    { 
      category: "Timeline",
      q: "How long does implementation take?", 
      a: "Most projects take a few weeks to scope, connect, test, and launch. The exact timeline depends on the workflow complexity and how many systems need to be integrated."
    },
    { 
      category: "Scope",
      q: "Do you only build AI calling systems?", 
      a: "No. We also build custom dashboards, CRM workflows, intake systems, reporting tools, and automation around scheduling and follow-up."
    },
    { 
      category: "Pricing",
      q: "How is pricing structured?", 
      a: "Pricing depends on the workflow scope, integrations, and whether you need a focused automation or a broader custom system. We usually start with an audit so we can recommend the right level of build."
    },
    { 
      category: "Support",
      q: "What support do you provide after launch?", 
      a: "We support rollout, bug fixes, workflow adjustments, and ongoing improvements so the system keeps working well as your clinic changes."
    },
    { 
      category: "Ownership",
      q: "Do we own the workflow and software after delivery?", 
      a: "Yes. We build custom systems for your business needs, and ownership terms are defined clearly in the project agreement."
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } as any }
  };

  return (
    <div className="bg-[#020205] min-h-screen text-slate-300 font-sans selection:bg-[#6F3DFF]/30 overflow-hidden" ref={targetRef}>
      
      {/* 1. Services Hero: The Architectural Gateway */}
      <section className="relative border-b border-white/5 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(111,61,255,0.1)_0%,_transparent_60%)] blur-[100px]" 
           />
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6F3DFF]/20 to-transparent -translate-x-[100%] animate-[slide_3s_infinite]" />
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6F3DFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6F3DFF]"></span>
            </div>
            <span className="text-[11px] font-black text-slate-300 tracking-[0.2em] uppercase">Clinic Automation Services</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05] drop-shadow-2xl"
          >
            AI Automation, Calling Agents, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] via-cyan-400 to-blue-500">And Custom Software For Clinics.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed"
          >
            We help clinics reduce no-shows, recover missed calls, automate follow-up, and give staff better systems for scheduling, intake, reporting, and daily operations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
             <button 
                onClick={() => navigate('/contact')}
                className="group relative w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-10 rounded-full bg-white text-[#020205] font-black tracking-tight text-base sm:text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 hover:pr-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F3DFF]/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                   Book Clinic Automation Audit
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Signature Solutions Overview */}
      <section className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-xl">What We Build For Clinics</h2>
          <p className="text-base sm:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">The systems clinics usually need when calls, follow-up, intake, and reporting start slowing the business down.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-6"
        >
          {coreArchitectures.map((block, i) => (
            <motion.div key={i} variants={itemVariants} className={`${block.span} group relative bg-[#0a0a0f] border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 overflow-hidden hover:border-[#6F3DFF]/30 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-default`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl group-hover:bg-[#6F3DFF]/10 transition-colors duration-1000" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                   <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#141423] border border-white/10 flex items-center justify-center mb-6 sm:mb-10 backdrop-blur-xl group-hover:-translate-y-2 group-hover:scale-110 shadow-2xl transition-all duration-500">
                     <block.icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                   </div>
                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">{block.title}</h3>
                 </div>
                 <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed group-hover:text-slate-300 transition-colors">{block.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Interactive Service Showcase */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#06060A] border-y border-white/[0.03] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
             <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
             >
               <div className="sticky top-28">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tight drop-shadow-lg">Common Automation Needs</h2>
                 <p className="text-base sm:text-xl text-slate-400 font-light mb-8 sm:mb-12 leading-relaxed">These are the workflow problems clinic owners and managers usually want solved first.</p>
                 <div className="space-y-4">
                   {specificServices.map((service, i) => (
                     <button 
                       key={i}
                       onClick={() => setActiveService(i)}
                        className={`w-full text-left p-4 sm:p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${activeService === i ? 'bg-[#141423] border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.15)]' : 'bg-transparent border-transparent hover:border-slate-800 hover:bg-white/5'}`}
                     >
                       {activeService === i && (
                         <motion.div 
                           layoutId="activeIndicator" 
                           className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" 
                         />
                       )}
                        <h4 className={`text-lg sm:text-xl font-bold ml-2 ${activeService === i ? 'text-white' : 'text-slate-500'} group-hover:text-white transition-colors`}>{service.name}</h4>
                     </button>
                   ))}
                 </div>
               </div>
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 flex items-center"
             >
               <div className="bg-gradient-to-br from-[#141423] to-[#0a0a0f] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 min-h-[360px] sm:min-h-[440px] w-full flex flex-col justify-center relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                  {/* Floating Graphic Array */}
                  <div className="absolute top-0 right-0 p-10 opacity-10 blur-[2px]">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                       <Layers className="w-80 h-80 text-cyan-400" />
                     </motion.div>
                  </div>
                  
                  <motion.div 
                     key={activeService}
                     initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                     animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                     transition={{ duration: 0.5 }}
                     className="relative z-10"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-8 backdrop-blur-md">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">Workflow Focus</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-tight drop-shadow-2xl">{specificServices[activeService].name}</h3>
                    <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8 sm:mb-12">{specificServices[activeService].detail}</p>
                    <button 
                       onClick={() => navigate('/contact')}
                       className="group flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest w-fit border-b border-white/30 pb-2 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      Talk about this workflow <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform"/>
                    </button>
                  </motion.div>
               </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* 4. Why Nexol */}
      <section className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 relative overflow-hidden">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20 sm:mb-24"
        >
           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">Why Clinics Hire Nexol</h2>
           <p className="text-base sm:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">Clear workflows, practical implementation, and custom systems built around how your team actually works.</p>
        </motion.div>

        <div className="space-y-32 relative">
          {/* Animated Connecting Backbone Line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-slate-800/80 -translate-x-1/2 overflow-hidden z-0">
             <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-[slide_4s_linear_infinite]" style={{ backgroundSize: '100% 300%' }} />
          </div>
          
          <div className="relative z-10">
            {differentiators.map((diff, i) => (
              <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24 last:mb-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end group cursor-default">
                  <div className={`p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-white/5 bg-[#0a0a0f] shadow-2xl relative w-full lg:max-w-lg transition-all duration-700 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.1)] ${i % 2 !== 0 ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 relative z-10 tracking-tight">{diff.title}</h3>
                    <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">{diff.text}</p>
                  </div>
                </div>
                
                {/* Visual Node */}
                <div className={`w-full lg:w-1/2 flex items-center ${i % 2 !== 0 ? 'justify-start' : 'justify-end lg:justify-start'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border border-slate-800 flex items-center justify-center bg-[#141423]/80 backdrop-blur-3xl relative shadow-[0_30px_80px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-cyan-400/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {i === 0 ? <Search className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors z-10 relative" /> : i === 1 ? <Network className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors z-10 relative" /> : <Activity className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors z-10 relative" />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Delivery Pipeline */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#06060A] border-y border-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-24 lg:w-2/3"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-xl">How Implementation Works</h2>
            <p className="text-base sm:text-xl text-slate-400 font-light leading-relaxed">We keep rollout practical: review the workflow, map the right system, test it with your team, and improve it after launch.</p>
          </motion.div>

          <div className="relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#06060a] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#06060a] after:to-transparent after:z-10">
            <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, ease: "linear", repeat: Infinity }}
               className="flex gap-6 w-max pb-12"
            >
              {[...timeline, ...timeline].map((step, i) => (
                <div 
                   key={i} 
                   className="min-w-[260px] sm:min-w-[320px] md:min-w-[420px] bg-[#0a0a0f] border border-white/5 p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] hover:border-[#6F3DFF]/40 transition-all duration-500 relative hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(111,61,255,0.15)] group/card"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_rgba(111,61,255,0.15),_transparent)] rounded-bl-full transition-colors duration-500" />
                  <div className="mb-10 w-14 h-14 rounded-2xl bg-[#141423] border border-slate-800 flex items-center justify-center shadow-lg group-hover/card:bg-[#6F3DFF] border-transparent transition-colors duration-500">
                    <span className="text-sm font-black text-slate-400 group-hover/card:text-white transition-colors tracking-widest">{step.phase.split('.')[0]}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight drop-shadow-md">{step.phase.split('.')[1]}</h4>
                  <p className="text-slate-400 leading-relaxed font-light text-base sm:text-lg group-hover/card:text-slate-300 transition-colors">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Common Use Cases */}
      <section className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">Common Clinic Use Cases</h2>
          <p className="text-base sm:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">Examples of the systems clinics usually ask us to improve first.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate('/portfolio')}
              className="group relative bg-[#0a0a0f] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/3] flex flex-col justify-end p-6 sm:p-12 cursor-pointer shadow-2xl"
           >
            <div className="absolute inset-0 bg-[#0a0a0f] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all ease-out" style={{ backgroundImage: "url('/case-ecommerce.png')", transitionDuration: '1.5s' }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent"></div>
             <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block backdrop-blur-md">AI Calling Agent</span>
               <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">Medical Clinic Call Handling</h3>
               <p className="text-slate-300 font-light mb-6 sm:mb-8 text-base sm:text-lg">Handle inbound calls, automate appointment confirmations, and reduce manual front-desk follow-up.</p>
               <div className="inline-flex items-center gap-4 bg-black/50 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">
                 <Zap className="w-6 h-6 text-cyan-400" />
                 <div>
                    <span className="block text-3xl font-black text-white leading-none mb-1">40%</span>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Fewer No-Shows</span>
                 </div>
               </div>
             </div>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/portfolio')}
              className="group relative bg-[#0a0a0f] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/3] flex flex-col justify-end p-6 sm:p-12 cursor-pointer shadow-2xl"
           >
            <div className="absolute inset-0 bg-[#0a0a0f] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all ease-out" style={{ backgroundImage: "url('/case-trading.png')", transitionDuration: '1.5s' }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent"></div>
             <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block backdrop-blur-md">Custom Dashboard</span>
               <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">Clinic Operations Visibility</h3>
               <p className="text-slate-300 font-light mb-6 sm:mb-8 text-base sm:text-lg">Track missed calls, response time, bookings, and front-desk workload in one reporting dashboard.</p>
               <div className="inline-flex items-center gap-4 bg-black/50 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">
                 <ShieldCheck className="w-6 h-6 text-emerald-400" />
                 <div>
                    <span className="block text-3xl font-black text-white leading-none mb-1">99.9%</span>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Clearer Reporting</span>
                 </div>
               </div>
             </div>
            </motion.div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex justify-center relative z-20"
         >
            <button 
              onClick={() => navigate('/portfolio')}
              className="h-14 inline-flex items-center justify-center gap-3 border border-white/10 hover:border-white/30 bg-[#141423] text-white px-10 rounded-full font-bold text-[13px] uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:bg-white hover:text-[#020205] transition-all duration-300 group cursor-pointer"
            >
              See More Use Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </motion.div>
      </section>

      {/* 8. FAQ: Technical Briefing — Premium Redesign */}
      <section className="py-20 relative z-10 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(111,61,255,0.08),_transparent_70%)] blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.05),_transparent_70%)] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
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
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Straight answers about fit, integrations, rollout, support, and ownership.
            </p>
          </motion.div>

          {/* FAQ Accordion Grid */}
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
                {/* Glow orb on active */}
                {activeFAQ === i && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#6F3DFF]/20 blur-[60px] rounded-full pointer-events-none" />
                )}
                
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black tracking-wider transition-all duration-300 ${
                      activeFAQ === i ? 'bg-[#6F3DFF] text-white shadow-[0_0_20px_rgba(111,61,255,0.5)]' : 'bg-white/5 text-slate-500'
                    }`}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className={`text-[9px] font-black uppercase tracking-[0.3em] block mb-2 transition-colors duration-300 ${
                        activeFAQ === i ? 'text-[#9f7aea]' : 'text-slate-600'
                      }`}>{faq.category}</span>
                      <h4 className={`text-sm sm:text-base font-bold pr-4 tracking-tight leading-snug transition-colors duration-300 ${
                        activeFAQ === i ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>{faq.q}</h4>
                    </div>
                  </div>
                  {/* Toggle icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500 mt-1 ${
                    activeFAQ === i 
                      ? 'bg-[#6F3DFF] border-[#6F3DFF] rotate-45 shadow-[0_0_15px_rgba(111,61,255,0.5)]' 
                      : 'bg-[#141423] border-white/10 hover:border-white/20'
                  }`}>
                    <svg className={`w-3.5 h-3.5 transition-colors ${activeFAQ === i ? 'text-white' : 'text-slate-400'}`} viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer panel */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeFAQ === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-12 border-l-2 border-[#6F3DFF]/30">
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <div>
              <p className="text-white font-bold text-lg tracking-tight mb-1">Need help choosing the right starting point?</p>
              <p className="text-slate-500 text-sm font-light">We can review your workflow and recommend what to automate first.</p>
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



    </div>
  );
};

export default Solutions;
