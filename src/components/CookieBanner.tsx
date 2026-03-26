import { useState, useEffect } from 'react';
import { ShieldCheck, Cog, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('nexol-cookie-consent');
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nexol-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[120] px-4 py-8 pointer-events-none">
      <div className="max-w-[1240px] mx-auto pointer-events-auto">
        <div className="bg-[#0B0B12]/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_100px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-12 duration-1000">
          
          <div className="flex items-center gap-6 text-left">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
               <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <div className="max-w-xl">
              <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Technical Data Compliance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nexol Tech Solutions utilizes essential cookies to ensure enterprise-grade security and operational performance across our cloud architecture. 
                <a href="#" className="text-blue-400 hover:text-blue-300 font-bold underline ml-1">Privacy Architecture.</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
               onClick={() => setIsVisible(false)}
               className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest px-6 py-4 flex items-center gap-2"
            >
              <Cog className="w-4 h-4" />
              Manage Configuration
            </button>
            <Button
              onClick={handleAccept}
              className="w-full sm:w-auto h-14 bg-white hover:bg-slate-200 text-slate-900 px-10 rounded-2xl font-bold text-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
            >
              <Check className="w-5 h-5" />
              Accept All Systems
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
