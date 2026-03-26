import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Shield, Database, Zap, MessageSquare, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Solutions', href: '/solutions', type: 'route' },
    { name: 'Portfolio', href: '/portfolio', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' },
  ];

  const sidebarLinks = [
    { name: 'AI Calling Agent', href: '/ai-calling-agent', icon: Bot, desc: 'Cognitive Voice Platform' },
    { name: 'Services Architecture', href: '/solutions', icon: Database, desc: 'Enterprise data flows' },
    { name: 'Industrial AI', href: '/industries', icon: Zap, desc: 'Cognitive automation' },
    { name: 'The Nexol Process', href: '/about', icon: Shield, desc: 'Verified methodology' },
  ];

  const handleNavClick = (link: any) => {
    if (link.type === 'route') {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/' + link.href);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${
          isScrolled
            ? 'py-3 px-4 sm:px-6'
            : 'py-5 px-4 sm:px-8'
        }`}
      >
        <div 
          className={`max-w-[100rem] mx-auto transition-all duration-500 rounded-full px-4 sm:px-8 flex items-center justify-between border ${
            isScrolled 
            ? 'bg-[#0B0B12]/60 backdrop-blur-3xl border-white/5 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-0'
          }`}
        >
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 group"
          >
            <motion.div 
               animate={{ scale: isScrolled ? 1.15 : 1 }}
               whileHover={{ rotate: 5, scale: 1.2 }}
               transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
            >
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="/logo-transparent.png" 
                  alt="Nexol" 
                  className="h-10 w-auto object-contain relative z-10" 
                />
            </motion.div>
            <motion.div 
              animate={{ scale: isScrolled ? 1.1 : 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block origin-left"
            >
              <span className="text-white font-black text-xl tracking-tighter block leading-none">
                NEXOL
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                Tech Solutions
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all relative group ${
                    location.pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <motion.span 
                  animate={{ scale: isScrolled ? 1.05 : 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative z-10 block"
                >
                  {link.name}
                </motion.span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden md:flex flex-col items-end mr-2 text-right">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Support Core</span>
                <span className="text-xs text-white font-medium">Islandia, NY Hub</span>
            </div>
            
            <motion.div
              animate={{ scale: isScrolled ? 1.1 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <Button 
                  onClick={() => navigate('/contact')}
                  className="hidden sm:flex h-11 bg-white hover:bg-slate-200 text-black px-6 rounded-full font-black text-xs uppercase tracking-widest border-none transition-transform hover:scale-105"
              >
                  Start Briefing
              </Button>
            </motion.div>

            <motion.button
              onClick={() => navigate('/contact')}
              className="sm:hidden h-10 px-4 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-wider shadow-xl active:scale-95 transition-all"
            >
              Contact
            </motion.button>

            {/* Sidebar Trigger - THE "EXPANDING SIDE" */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(true)}
              className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Advanced Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-[420px] bg-[#0B0B12] border-l border-white/5 z-[101] shadow-2xl flex flex-col p-6 sm:p-10 md:p-14"
            >
              <div className="flex justify-between items-center mb-8 sm:mb-12">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <p className="text-white font-black tracking-tight">EXPLORE HUB</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Nexol Advanced Navigation</p>
                    </div>
                 </div>
                 <button 
                   onClick={() => setIsSidebarOpen(false)}
                   className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all"
                 >
                   <X className="w-6 h-6" />
                 </button>
              </div>

              {/* Navigation Grid */}
              <div className="space-y-4 mb-20">
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Specialists & Portals</p>
                <div className="grid gap-4">
                    {sidebarLinks.map((link, i) => (
                        <motion.button
                            key={link.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => handleNavClick({ href: link.href, type: link.href.startsWith('#') ? 'anchor' : 'route' })}
                            className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all text-left"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <link.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors uppercase tracking-tight">{link.name}</h4>
                                <p className="text-sm text-slate-500 font-light">{link.desc}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-700 ml-auto group-hover:text-white group-hover:translate-x-2 transition-all self-center" />
                        </motion.button>
                    ))}
                </div>
              </div>

              {/* Footer Part of Sidebar */}
              <div className="mt-auto pt-10 border-t border-slate-900 flex flex-col gap-8">
                 <div className="flex gap-10">
                    <div>
                        <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-2">Social Pulse</p>
                        <div className="flex gap-4">
                            {['LN', 'X', 'GH'].map(s => <button key={s} className="text-xs text-white font-bold hover:text-blue-400">{s}</button>)}
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-2">Direct Link</p>
                        <button className="text-xs text-blue-400 font-bold hover:underline">Book Discovery Call</button>
                    </div>
                 </div>
                 <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-between">
                    <div>
                        <p className="text-white font-black text-lg">Ready to engineer?</p>
                        <p className="text-white/70 text-sm">Join the enterprise elite.</p>
                    </div>
                    <Link to="/contact" onClick={() => setIsSidebarOpen(false)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:scale-110 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                    </Link>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
