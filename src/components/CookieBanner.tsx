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
    <div className="fixed bottom-0 left-0 right-0 z-[120] px-3 sm:px-4 py-4 sm:py-8 pointer-events-none">
      <div className="max-w-[1240px] mx-auto pointer-events-auto">
        <div className="bg-[#0B0B12]/95 backdrop-blur-2xl border border-slate-800 rounded-[2rem] sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8 shadow-[0_20px_100px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-12 duration-1000">
          
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
               <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <div className="max-w-xl">
              <h4 className="text-white font-bold text-lg sm:text-xl mb-2 tracking-tight">Privacy & Performance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nexol uses essential cookies to keep the site secure, remember your preferences, and improve performance for visitors exploring our clinic automation services.
                <a href="#" className="text-blue-400 hover:text-blue-300 font-bold underline ml-1">Privacy Policy.</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <button
               onClick={() => setIsVisible(false)}
               className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-2"
            >
              <Cog className="w-4 h-4" />
              Manage Preferences
            </button>
            <Button
              onClick={handleAccept}
              className="w-full sm:w-auto h-12 sm:h-14 bg-white hover:bg-slate-200 text-slate-900 px-6 sm:px-10 rounded-2xl font-bold text-sm sm:text-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
            >
              <Check className="w-5 h-5" />
              Accept Cookies
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
