import { useEffect } from 'react';
import { Stethoscope, Building2, Users, Calendar, Globe, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const IndustriesPage = () => {
    const navigate = useNavigate();
    usePageTitle('Industries We Serve | E-Commerce, Finance, Healthcare & Small Business');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectors = [
        {
            title: "Healthcare",
            desc: "A strong fit for healthcare businesses that need better websites, patient workflows, dashboards, secure portals, and operational systems.",
            icon: Stethoscope,
            capabilities: ["Patient workflows", "Operational dashboards", "Custom systems"]
        },
        {
            title: "E-Commerce & Retail",
            desc: "We support brands that need faster storefront experiences, cleaner order workflows, stronger reporting, and better customer journeys.",
            icon: Building2,
            capabilities: ["Storefront systems", "Order workflows", "Reporting dashboards"]
        },
        {
            title: "Banking & Financial Services",
            desc: "Useful for finance businesses that need secure dashboards, internal tools, workflow automation, portals, and stronger reporting systems.",
            icon: Users,
            capabilities: ["Internal tools", "Reporting systems", "Workflow automation"]
        },
        {
            title: "Small Business & Local Services",
            desc: "We help small and growing businesses upgrade websites, automate customer handling, and build systems that support day-to-day growth.",
            icon: Calendar,
            capabilities: ["Better websites", "Lead workflows", "Growth systems"]
        }
    ];

  return (
    <div className="bg-[#0B0B12]">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 lg:px-12 sm:pt-32 sm:pb-20 lg:pt-36">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">Industries We Serve</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            Business Sectors We <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Support Best.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Nexol supports healthcare, e-commerce, finance, small business, and service operations that need stronger digital systems, automations, dashboards, and custom software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {sectors.map((s, i) => (
            <div key={i} className="group bg-[#141423] border border-slate-800 p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] hover:border-blue-500/30 transition-all overflow-hidden relative">
               <div className={`absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all`} />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8 sm:mb-12 gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <s.icon className={`w-10 h-10 text-cyan-400`} />
                    </div>
                    <span className="text-xs text-slate-500 font-black tracking-widest uppercase">ID: SEC-0{i+1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{s.title}</h3>
                  <p className="text-slate-400 text-base sm:text-lg font-light mb-8 sm:mb-10 leading-relaxed max-w-lg">
                    {s.desc}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 border-t border-slate-800 pt-8 sm:pt-10">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        {/* Delivery Note */}
        <div className="mt-20 sm:mt-32 p-6 sm:p-10 bg-slate-900/40 border border-slate-800 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                 <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold">Flexible Multi-Industry Delivery</p>
                <p className="text-xs text-slate-500">We adapt the system to your industry, workflows, growth stage, and operational needs instead of forcing a generic setup.</p>
              </div>
           </div>
           <button 
             onClick={() => navigate('/contact')}
             className="h-12 border border-slate-700 hover:border-white text-white px-8 rounded-full text-xs font-black uppercase tracking-widest transition-colors mb-2 md:mb-0"
           >
               Book Free Consultation
            </button>
         </div>
       </div>
    </div>
  );
};

export default IndustriesPage;
