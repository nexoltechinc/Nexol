import { Stethoscope, ShoppingCart, Building2, Truck, LineChart, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const industries = [
  {
    name: 'Healthcare & MedTech',
    description: 'HIPAA-compliant patient portals, telehealth infra, and AI diagnostics.',
    icon: Stethoscope,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    color: '#10b981', // Emerald
    bgGradient: 'from-emerald-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-emerald-500/50'
  },
  {
    name: 'E-commerce',
    description: 'High-volume supply chain systems & predictive UX engines.',
    icon: ShoppingCart,
    span: 'col-span-1 lg:col-span-1',
    color: '#0ea5e9', // Blue
    bgGradient: 'from-blue-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-blue-500/50'
  },
  {
    name: 'Real Estate',
    description: 'Automated ML property valuation and agent CRM systems.',
    icon: Building2,
    span: 'col-span-1 lg:col-span-1',
    color: '#8b5cf6', // Violet
    bgGradient: 'from-violet-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-violet-500/50'
  },
  {
    name: 'FinTech',
    description: 'Ultra-low latency trading matching engines & banking APIs.',
    icon: LineChart,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    color: '#06b6d4', // Cyan
    bgGradient: 'from-cyan-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-cyan-500/50'
  },
  {
    name: 'Logistics',
    description: 'Global fleet GPS tracking and warehouse robotics integration.',
    icon: Truck,
    span: 'col-span-1 lg:col-span-1',
    color: '#f43f5e', // Rose
    bgGradient: 'from-rose-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-rose-500/50'
  },
  {
    name: 'Manufacturing',
    description: 'IoT sensor arrays and predictive maintenance dashboards.',
    icon: Factory,
    span: 'col-span-1 lg:col-span-1',
    color: '#f59e0b', // Amber
    bgGradient: 'from-amber-500/10 via-transparent to-transparent',
    borderColor: 'group-hover:border-amber-500/50'
  }
];

const Industries = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } as any
    }
  };

  return (
    <section id="industries" className="relative py-20 bg-[#020205] overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#6F3DFF]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-xl group cursor-default">
               <span className="flex h-2 w-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
               <span className="text-[11px] font-black text-slate-400 tracking-[0.3em] uppercase">Industry Specialization</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
              Engineered for <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">Every Sector.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
              We deploy specialized engineering teams that deeply understand the regulatory and operational nuances of your specific industry.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="shrink-0"
          >
            <button 
              onClick={() => navigate('/portfolio')}
              className="h-16 bg-white/[0.03] hover:bg-white text-white hover:text-[#020205] px-10 rounded-full font-black text-[13px] uppercase tracking-widest border border-white/10 transition-all duration-500 flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.02)]"
            >
              View Detailed Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Dynamic Bento Box */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-[#0a0a0f] border border-white/5 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 hover:bg-[#0e0e16] transition-all duration-500 overflow-hidden shadow-2xl ${industry.span} ${industry.borderColor}`}
              >
                {/* Dynamic hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--industry-color),transparent)] opacity-5 group-hover:opacity-10" style={{'--industry-color': `${industry.color}33`} as any} />

                <div className="relative z-10 flex flex-col h-full justify-between gap-8 sm:gap-16">
                  <div className="flex justify-between items-start">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: `${industry.color}15`, border: `1px solid ${industry.color}30` }}
                    >
                      <Icon className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ color: industry.color }} />
                    </div>
                    <button 
                      onClick={() => navigate('/portfolio')}
                      className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-[#020205] group-hover:border-white transition-all duration-500 group/btn"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </button>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tighter transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent w-fit"
                      style={{ 
                        backgroundImage: `linear-gradient(to right, white, ${industry.color})`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      } as any}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-slate-400 text-lg font-light leading-relaxed max-w-[90%] group-hover:text-slate-300 transition-colors">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;

