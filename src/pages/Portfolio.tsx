import { useEffect, useState } from 'react';
import { ExternalLink, Zap, Database, Globe, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const PortfolioPage = () => {
  const navigate = useNavigate();
  usePageTitle('Clinic Automation Use Cases');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Enterprise AI', 'E-Commerce', 'Healthcare Systems', 'SaaS & Automation'];

  const projects = [
    {
      title: "AI Calling Agent",
      category: "Healthcare Systems",
      desc: "Architecting a sovereign cognitive voice layer for a massive network of medical clinics. The AI autonomous agent effortlessly handles 10,000+ inbound calls, driving a 99% confirmation rate with zero human intervention.",
      metric: "30% Reduction in No-Shows",
      icon: Zap,
      image: "/case-healthcare.png",
      tags: ["AI Voice Generation", "Healthcare Integration", "HIPAA Compliant"],
      link: "/ai-calling-agent"
    },
    {
      title: "NexolBazzar Core Ecosystem",
      category: "E-Commerce",
      desc: "Re-engineering a multi-vendor marketplace for over 2M+ active users. We focused heavily on achieving zero-latency search operations and building a resilient, secure payment orchestration layer that processes millions flawlessly.",
      metric: "40% Increase in Throughput",
      icon: Globe,
      image: "/case-ecommerce.png",
      tags: ["React", "Node.js", "Redis", "AWS"]
    },
    {
      title: "QuantFlow AI Bot",
      category: "Enterprise AI",
      desc: "Architecting a sovereign cognitive layer for an institutional investment firm. The bot performs real-time market sentiment analysis by processing thousands of news feeds simultaneously for automated risk mitigation.",
      metric: "99.9% Prediction Accuracy",
      icon: Zap,
      image: "/case-trading.png",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Kafka"]
    },
    {
      title: "Global Enterprise CRM",
      category: "SaaS & Automation",
      desc: "Building custom, hyper-scalable CRM architectures for businesses across the UK, USA, and worldwide. By leveraging intelligent automation, we eliminate manual entry and seamlessly integrate your operational workflows with invoicing systems like QuickBooks and other enterprise platforms.",
      metric: "100% Automated Workflows",
      icon: Globe,
      image: "/case-crm.png",
      tags: ["Automation", "React", "Node.js", "QuickBooks API"]
    },
    {
      title: "NeuralFlow Analytics",
      category: "Enterprise AI",
      desc: "Architecting a high-throughput machine learning pipeline for real-time predictive data analysis. This system autonomously identifies operational patterns and anomaly detection across petabytes of enterprise data logs, enabling preemptive decision-making.",
      metric: "85% Predictive Precision",
      icon: Database,
      image: "/case-ml.png",
      tags: ["Machine Learning", "Big Data", "Python", "PyTorch"]
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#0B0B12] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. Impactful Hero Section */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[#0a0a0f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0B12] to-[#0B0B12]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter animate-fade-in-up">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-cyan-400">Architectures.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-10 animate-fade-in-up [animation-delay:100ms]">
            Proof over promises. Explore a curated selection of mission-critical systems and digital transformations we've successfully engineered for our global partners.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight">{p.title}</h2>
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
              
              <div className="p-5 sm:p-6 rounded-2xl bg-[#141423] border border-slate-800 border-l-4 border-l-cyan-400 mb-10 inline-block w-full sm:w-fit shadow-xl group hover:border-slate-700 hover:border-l-[#6F3DFF] transition-colors">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Key Milestone</p>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-400 group-hover:text-[#6F3DFF] transition-colors" />
                  <span className="text-xl font-bold text-white tracking-tight">{p.metric}</span>
                 </div>
              </div>

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
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Your vision could be our next <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-medium">masterpiece.</span></h2>
             <p className="text-base sm:text-xl text-slate-400 font-light leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
               Every great transformation begins with an architect. Let us analyze your current infrastructure and map out a precise route to scalability.
             </p>
             <button 
               onClick={() => navigate('/contact')}
               className="w-full sm:w-auto h-14 sm:h-16 inline-flex items-center justify-center gap-3 bg-white text-[#0B0B12] px-6 sm:px-10 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               Start A Conversation <ChevronRight className="w-5 h-5" />
             </button>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
