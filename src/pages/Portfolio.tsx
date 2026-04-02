import { useEffect, useState } from 'react';
import { ExternalLink, Zap, Database, Globe, ChevronRight, type LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

type Project = {
  title: string;
  category: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
  metric?: string;
  eyebrow?: string;
  resultLabel?: string;
  results?: string[];
  link?: string;
};

const PortfolioPage = () => {
  const navigate = useNavigate();
  usePageTitle('Business Technology Use Cases | Websites, Automation & Dashboards');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'E-Commerce', 'Finance', 'Healthcare', 'Small Business', 'Automation'];

  const projects: Project[] = [
    {
      eyebrow: "AI Voice Calling System for Medical Clinics",
      title: "Automate Patient Calls and Reduce No-Shows at Scale",
      category: "Healthcare",
      desc: "Help clinics manage inbound calls, confirm appointments, recover missed calls, and reduce front-desk workload with an AI-powered calling system built for healthcare operations.",
      resultLabel: "Result Snapshot",
      results: [
        "30% Fewer No-Shows",
        "10,000+ Calls Managed Monthly",
        "Faster Appointment Confirmations",
      ],
      icon: Zap,
      image: "/case-healthcare.png",
      tags: [
        "24/7 Call Handling",
        "Appointment Confirmation",
        "Healthcare Integration",
        "HIPAA-Ready Workflow",
      ],
      link: "/ai-calling-agent"
    },
    {
      eyebrow: "E-Commerce Operations Dashboard",
      title: "Track Orders, Sales, and Team Performance in One View",
      category: "E-Commerce",
      desc: "Give e-commerce teams clearer visibility into orders, customer flow, sales activity, and operational bottlenecks with a dashboard built around daily business performance.",
      metric: "Faster Operational Decisions",
      icon: Globe,
      image: "/case-ecommerce.png",
      tags: ["Order reporting", "Sales visibility", "Ops dashboard", "Custom views"]
    },
    {
      eyebrow: "Finance Reporting Platform",
      title: "Turn Complex Financial Data Into Clear Daily Reporting",
      category: "Finance",
      desc: "Build dashboards and internal tools that help finance teams track KPIs, approvals, reporting, and operations with less spreadsheet chaos.",
      metric: "Clearer Reporting Visibility",
      icon: Zap,
      image: "/case-trading.png",
      tags: ["Reporting tools", "Internal dashboard", "Finance workflows", "Performance visibility"]
    },
    {
      eyebrow: "Customer Inquiry Workflow Automation",
      title: "Move New Leads and Requests to the Right Next Step Faster",
      category: "Automation",
      desc: "Automate form routing, follow-up, team notifications, and internal handoffs so opportunities stop stalling in inboxes or spreadsheets.",
      metric: "Less Manual Follow-Up",
      icon: Globe,
      image: "/case-ml.png",
      tags: ["Lead routing", "Workflow automation", "Team handoffs", "Follow-up logic"]
    },
    {
      eyebrow: "Custom CRM for Growing Businesses",
      title: "Manage Sales, Support, and Reporting From One Custom System",
      category: "Small Business",
      desc: "Centralize customer data, pipeline status, internal tasks, and reporting for businesses that have outgrown simple off-the-shelf tools.",
      metric: "Better Team Visibility",
      icon: Database,
      image: "/case-crm.png",
      tags: ["Custom CRM", "Sales tracking", "Support workflows", "Business reporting"]
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#0B0B12] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. Impactful Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-[#0a0a0f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0B12] to-[#0B0B12]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter animate-fade-in-up">
            Business Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-cyan-400">Use Cases.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-10 animate-fade-in-up [animation-delay:100ms]">
            See the kinds of websites, dashboards, automations, CRM systems, and industry-specific software Nexol builds for healthcare, finance, e-commerce, and growing businesses.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up [animation-delay:200ms]">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === c 
                  ? 'bg-[#6F3DFF] text-white shadow-[0_0_20px_rgba(111,61,255,0.4)] scale-105' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stunning Alternating Project Layout */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-6 lg:px-12 space-y-16 sm:space-y-28">
        {filteredProjects.map((p, i) => (
          <div 
            key={i} 
            className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6F3DFF] to-cyan-400 rounded-[2.5rem] transform group-hover:-rotate-2 group-hover:scale-105 transition-transform duration-700 opacity-20"></div>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-square border border-slate-800 bg-[#141423]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12] via-[#0B0B12]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-xs font-bold text-white uppercase tracking-widest">
                    {p.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#6F3DFF]/10 border border-[#6F3DFF]/30 flex items-center justify-center mb-8">
                <p.icon className="w-8 h-8 text-[#a98cff]" />
              </div>
              {p.eyebrow && (
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-cyan-400">
                  {p.eyebrow}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                {p.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-8">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                 {p.tags.map((tag, idx) => (
                   <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-slate-300">
                     {tag}
                   </span>
                 ))}
              </div>
              
              {p.results?.length ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#141423] border border-slate-800 border-l-4 border-l-cyan-400 mb-10 w-full shadow-xl group hover:border-slate-700 hover:border-l-[#6F3DFF] transition-colors">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-3">{p.resultLabel ?? 'Results'}</p>
                  <div className="space-y-3">
                    {p.results.map((result) => (
                      <div key={result} className="flex items-start gap-3">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400 group-hover:text-[#6F3DFF] transition-colors" />
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#141423] border border-slate-800 border-l-4 border-l-cyan-400 mb-10 inline-block w-full sm:w-fit shadow-xl group hover:border-slate-700 hover:border-l-[#6F3DFF] transition-colors">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Key Milestone</p>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-cyan-400 group-hover:text-[#6F3DFF] transition-colors" />
                    <span className="text-xl font-bold text-white tracking-tight">{p.metric}</span>
                  </div>
                </div>
              )}

              <div>
                <button 
                  onClick={() => {
                    if (p.link) {
                      navigate(p.link);
                    }
                  }}
                  className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all w-fit cursor-pointer border-b border-transparent hover:border-white pb-1"
                >
                  Read Case Study <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Unique Portfolio Closing CTA */}
      <section className="py-16 sm:py-24 border-t border-slate-800/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#141423] to-[#0B0B12]">
        <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Want A System Like This <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-medium">For Your Business?</span></h2>
             <p className="text-base sm:text-xl text-slate-400 font-light leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
               We can review your workflow, identify the biggest bottleneck, and recommend the best website, automation, dashboard, or custom software starting point.
             </p>
             <button 
               onClick={() => navigate('/contact')}
               className="w-full sm:w-auto h-14 sm:h-16 inline-flex items-center justify-center gap-3 bg-white text-[#0B0B12] px-6 sm:px-10 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
                Book A Consultation <ChevronRight className="w-5 h-5" />
             </button>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
