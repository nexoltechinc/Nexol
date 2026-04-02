import { useState, useEffect } from 'react';
import { ShieldCheck, Cog, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('nexol-cookie-consent');
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      setIsCompact(window.innerHeight < 760);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nexol-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[120] px-3 sm:px-4 pointer-events-none ${isCompact ? 'py-2 sm:py-2' : 'py-3 sm:py-5'}`}>
      <div className={`mx-auto pointer-events-auto ${isCompact ? 'max-w-[980px]' : 'max-w-[1160px]'}`}>
        <div className={`bg-[#0B0B12]/95 backdrop-blur-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between shadow-[0_20px_80px_rgba(0,0,0,0.75)] animate-in slide-in-from-bottom-12 duration-1000 ${isCompact ? 'rounded-[1.25rem] sm:rounded-[1.5rem] p-3 sm:p-4 gap-3 sm:gap-4' : 'rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 md:p-6 gap-4 sm:gap-6'}`}>
          
          <div className={`flex items-start text-left ${isCompact ? 'gap-3 sm:gap-4' : 'gap-4 sm:gap-5'}`}>
            <div className={`rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 ${isCompact ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-11 h-11 sm:w-14 sm:h-14'}`}>
               <ShieldCheck className={`${isCompact ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-5 h-5 sm:w-7 sm:h-7'} text-blue-400`} />
            </div>
            <div className="max-w-xl">
              <h4 className={`text-white font-bold tracking-tight ${isCompact ? 'text-sm sm:text-base mb-1' : 'text-base sm:text-lg mb-1.5'}`}>Privacy & Performance</h4>
              <p className={`text-slate-400 leading-relaxed ${isCompact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
                {isCompact
                  ? 'Nexol uses essential cookies to keep the site secure and improve performance.'
                  : 'Nexol uses essential cookies to keep the site secure, remember your preferences, and improve performance for visitors exploring our technology services.'}
                <a href="#" className="text-blue-400 hover:text-blue-300 font-bold underline ml-1">Privacy Policy.</a>
              </p>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center w-full md:w-auto ${isCompact ? 'gap-2 sm:gap-3' : 'gap-3 sm:gap-4'}`}>
            <button
               onClick={() => setIsVisible(false)}
               className={`text-slate-400 hover:text-white transition-colors font-bold uppercase tracking-widest flex items-center justify-center gap-2 ${isCompact ? 'text-[10px] px-3 sm:px-4 py-2' : 'text-[11px] px-3 sm:px-5 py-2.5 sm:py-3'}`}
            >
              <Cog className="w-4 h-4" />
              Manage Preferences
            </button>
            <Button
              onClick={handleAccept}
              className={`w-full sm:w-auto bg-white hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 ${isCompact ? 'h-10 sm:h-11 px-4 sm:px-6 text-[13px]' : 'h-11 sm:h-12 px-5 sm:px-8 text-sm'}`}
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
