import { ArrowRight, Building } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const caseStudies = [
  {
    title: 'Enterprise Fintech Dashboard',
    industry: 'Financial Services',
    description: 'We engineered a highly secure, ultra-low-latency Vue.js/Node execution platform for a tier-1 trading firm, crushing legacy latency metrics.',
    metrics: [
      { label: 'Trade Execution Speed', value: '-85', unit: '%' },
      { label: 'System Uptime Built', value: '99', unit: '.99%' },
    ],
    image: '/case-fintech.jpg'
  },
  {
    title: 'AI Global Logistics Routing',
    industry: 'Supply Chain',
    description: 'Architected an autonomous Python-based machine learning engine that calculates real-time predictive shipping routes across 12 countries.',
    metrics: [
      { label: 'Fleet Optimization', value: '+40', unit: '%' },
      { label: 'Fuel Costs Saved', value: '$2.1', unit: 'M' },
    ],
    image: '/case-logistics.jpg'
  },
  {
    title: 'Healthcare Patient Portal',
    industry: 'MedTech',
    description: 'Developed a completely secure, HIPAA-compliant React Native mobile application that connects 40,000+ patients to critical telehealth services.',
    metrics: [
      { label: 'Active Users', value: '40', unit: 'k+' },
      { label: 'Appointment Uptake', value: '+65', unit: '%' },
    ],
    image: '/case-healthcare.jpg'
  }
];

const CaseStudies = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative py-32 bg-[#0B0B12] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#5EEAD4]/5 blur-[200px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6F3DFF]/10 blur-[200px]" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18182A] border border-slate-800 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#6F3DFF]" />
              <span className="text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">Proven Execution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Engineering Data-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-[#5EEAD4]">Success Stories.</span>
            </h2>
          </div>
          <div className="shrink-0 hidden lg:block">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-14 bg-[#141423] hover:bg-[#18182A] text-white px-8 rounded-full font-semibold border border-slate-700 transition-colors flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dynamic Alternating Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                
                {/* Image Block */}
                <div className={`relative group ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6F3DFF]/20 to-[#5EEAD4]/20 blur-3xl rounded-[3rem] group-hover:blur-xl transition-all duration-700 opacity-50" />
                  
                  {/* Image Container */}
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-[#141423] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 pointer-events-none">
                     <img
                        loading="lazy"
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      {/* Image Premium Overlay */}
                      <div className="absolute inset-0 bg-[#0B0B12]/40 mix-blend-overlay" />
                  </div>
                </div>

                {/* Content Block */}
                <div className={`flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#18182A] border border-slate-800 text-[#5EEAD4] text-xs font-bold tracking-widest uppercase">
                      Case Study
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#18182A]/50 border border-slate-800/50 text-slate-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                       <Building className="w-3.5 h-3.5" />
                       {study.industry}
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-light">
                    {study.description}
                  </p>

                  {/* Stunning Massive Metrics */}
                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-800/60 mb-10">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col pt-1">
                        <div className="flex items-baseline mb-1 group-hover:text-[#5EEAD4] transition-colors duration-500">
                          <span className="text-5xl font-black tracking-tighter text-white">{metric.value}</span>
                          <span className="text-3xl font-black text-[#6F3DFF]/80">{metric.unit}</span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <button className="text-white font-bold text-lg inline-flex items-center gap-3 hover:text-[#5EEAD4] transition-colors w-max group px-6 py-4 rounded-full bg-[#141423] border border-slate-800 hover:bg-[#18182A]">
                    Read Full Technical Report
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
