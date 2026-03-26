import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Architecture',
    description: 'We tear down your business requirements to engineer a scalable technical blueprint.',
    icon: Search
  },
  {
    num: '02',
    title: 'UX Strategy',
    description: 'Wireframing cognitive user flows optimized for maximum conversion and utility.',
    icon: PenTool
  },
  {
    num: '03',
    title: 'Agile Engineering',
    description: 'Weekly sprint deliverables deploying robust, enterprise-grade code.',
    icon: Code
  },
  {
    num: '04',
    title: 'Launch & Scale',
    description: 'Zero-downtime deployment backed by comprehensive penetration testing.',
    icon: Rocket
  }
];

const Process = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 bg-[#10101A] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#6F3DFF]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18182A] border border-slate-800 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" />
            <span className="text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">Development Lifecycle</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            How We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-[#5EEAD4]">World-Class Software.</span>
          </h2>
          <p className="text-xl text-slate-300/80 font-light max-w-2xl mx-auto">
            A transparent, agile pipeline designed entirely around shipping code quickly without sacrificing enterprise-grade security.
          </p>
        </div>

        {/* Dynamic Connected Process Flow */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4rem] left-0 right-0 h-0.5 bg-slate-800 z-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#6F3DFF] to-[#5EEAD4] blur-[2px]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connecting Line (Mobile) */}
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-3rem] w-px bg-slate-800 z-0 last:hidden" />
                  
                  {/* Step Node */}
                  <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8 relative z-10">
                    
                    {/* Icon & Connection Point */}
                    <div className="shrink-0 relative">
                      <div className="w-16 h-16 rounded-2xl bg-[#141423] border border-slate-700 flex items-center justify-center group-hover:bg-[#18182A] group-hover:border-[#6F3DFF] shadow-2xl transition-all duration-500 scale-100 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-[#5EEAD4] group-hover:text-white transition-colors" />
                      </div>
                      <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-800 last:hidden" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-1 lg:pt-0 relative">
                      <div className="absolute -top-10 -left-4 text-8xl font-black text-white/[0.03] z-0 select-none group-hover:text-[#6F3DFF]/10 transition-colors duration-700">
                        {step.num}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight relative z-10">{step.title}</h3>
                      <p className="text-slate-400 text-[15px] leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Action CTA */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto h-14 bg-white/5 hover:bg-white/10 text-white px-10 rounded-full font-bold text-lg border border-white/10 transition-colors flex items-center justify-center gap-3 mx-auto"
            >
              Start Discovery Phase
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Process;
