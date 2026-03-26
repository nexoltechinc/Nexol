import { ShieldCheck, Code2, Users, ArrowRight, Zap, Target } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const trustPoints = [
    {
      title: 'Business-Focused Architecture',
      description: 'We don\'t just write code; we design scalable systems that solve complex operational bottlenecks and drive measurable ROI.',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Radical Transparency',
      description: 'Direct communication channels, real-time Jira access, and weekly sprint reviews. You see what we build, as we build it.',
      icon: Users,
      color: 'cyan'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption, SOC2 compliance standards, and rigorous penetration testing built natively into our CI/CD pipelines.',
      icon: ShieldCheck,
      color: 'indigo'
    },
    {
      title: 'Agile & Adaptive Scaling',
      description: 'Our cloud-native microservices scale elastically with your user base, ensuring zero downtime during critical growth phases.',
      icon: Zap,
      color: 'emerald'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#10101A] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Balanced 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Massive Trust Statement */}
          <div className={`col-span-1 lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18182A] border border-slate-800 mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">Why Choose Nexol</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              A Partner That Engineers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Growth.</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              In a sea of generic agencies, Nexol stands apart. We operate as an extension of your C-suite, translating high-level business objectives into high-performance technological reality.
            </p>

            {/* The "Heroic" Statistic Block */}
            <div className="bg-[#141423] border border-blue-500/20 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden group hover:border-cyan-400/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">100<span className="text-cyan-400">%</span></div>
                  <div className="text-sm font-bold text-slate-400 tracking-widest uppercase mt-4">Project Delivery Ratio</div>
                  <p className="text-slate-500 text-sm mt-2 max-w-[200px]">Every system architected, deployed, and scaled on schedule.</p>
                </div>
                <div className="w-24 h-24 rounded-full border border-slate-700 flex items-center justify-center relative">
                  <div className="absolute inset-2 border-2 border-dashed border-cyan-400/50 rounded-full animate-[spin_10s_linear_infinite]" />
                  <Code2 className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto h-16 bg-white hover:bg-slate-200 text-slate-900 px-10 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Staggered Trust Cards */}
          <div className={`col-span-1 lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-start">
              {trustPoints.map((point, index) => (
                <div 
                  key={index}
                  className={`bg-[#141423]/60 border border-slate-800/80 rounded-[2rem] p-8 hover:bg-[#18182A] hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 group ${index % 2 !== 0 ? 'sm:mt-16' : ''}`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${point.color}-500/10 border border-${point.color}-500/20 flex items-center justify-center mb-8 group-hover:bg-${point.color}-500/20 transition-colors shadow-inner`}>
                    <point.icon className={`w-8 h-8 text-${point.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{point.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
