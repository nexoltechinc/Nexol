import { useEffect } from 'react';
import { Stethoscope, LineChart, Truck, Factory, Globe, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import TrustedBy from '../sections/TrustedBy';
import Testimonials from '../sections/Testimonials';

const IndustriesPage = () => {
    const navigate = useNavigate();
    usePageTitle('Sector Specializations');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectors = [
        {
            title: "Healthcare & MedTech",
            desc: "HIPAA-compliant infrastructures and AI-driven diagnostic pipelines. We engineer for zero-latency patient care and absolute data integrity.",
            icon: Stethoscope,
            color: "emerald",
            capabilities: ["Cloud EHR Systems", "AI Diagnostics", "Telehealth Backbone"]
        },
        {
            title: "FinTech & Banking",
            desc: "Ultra-low latency matching engines and secure API layers. We build the technical architecture for the next generation of global capital.",
            icon: LineChart,
            color: "blue",
            capabilities: ["Ledger Engineering", "Fraud Detection AI", "Banking API Stacks"]
        },
        {
            title: "Logistics & Supply Chain",
            desc: "Global fleet orchestration and warehouse robotics. We transform physical movement into digital intelligence.",
            icon: Truck,
            color: "cyan",
            capabilities: ["Asset Tracking ML", "Route Optimization", "IoT Mesh Networks"]
        },
        {
            title: "Industrial Manufacturing",
            desc: "Predictive maintenance and IoT sensor arrays. Engineering the factory of the future with cognitive automation.",
            icon: Factory,
            color: "violet",
            capabilities: ["IIoT Integration", "Digital Twin Systems", "Quality Control ML"]
        }
    ];

  return (
    <div className="bg-[#0B0B12]">
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">Strategic Sectors</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            Vertical Technical <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Intelligence.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Generic code fails in specialized industries. We deploy architects who deeply understand 
            the regulatory, security, and operational complexities of your specific sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {sectors.map((s, i) => (
            <div key={i} className="group bg-[#141423] border border-slate-800 p-12 rounded-[3rem] hover:border-blue-500/30 transition-all overflow-hidden relative">
               <div className={`absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all`} />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <s.icon className={`w-10 h-10 text-cyan-400`} />
                    </div>
                    <span className="text-xs text-slate-500 font-black tracking-widest uppercase">ID: SEC-0{i+1}</span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{s.title}</h3>
                  <p className="text-slate-400 text-lg font-light mb-10 leading-relaxed max-w-lg">
                    {s.desc}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 border-t border-slate-800 pt-10">
                    {s.capabilities.map((c, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/cap">
                            <ShieldCheck className="w-4 h-4 text-blue-500" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{c}</span>
                        </div>
                    ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <TrustedBy />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <Testimonials />

        {/* Global Compliance Note */}
        <div className="mt-32 p-10 bg-slate-900/40 border border-slate-800 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                 <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold">Global Regulatory Adherence</p>
                <p className="text-xs text-slate-500">GDPR, HIPAA, and ISO 27001 standard engineering across all industrial sectors.</p>
              </div>
           </div>
           <button 
             onClick={() => navigate('/contact')}
             className="h-12 border border-slate-700 hover:border-white text-white px-8 rounded-full text-xs font-black uppercase tracking-widest transition-colors mb-2 md:mb-0"
           >
              Consult Our Architects
           </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
