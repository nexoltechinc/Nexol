import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLink = (href: string) => {
    if (href.startsWith('/')) {
        navigate(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
        navigate('/' + href);
    }
  };

  const links = {
    company: [
      { name: 'About Nexol', href: '/about' },
      { name: 'Book Audit', href: '/contact' },
      { name: 'Clinic Use Cases', href: '/portfolio' },
      { name: 'How We Work', href: '/solutions' },
    ],
    intelligence: [
      { name: 'AI Calling Agents', href: '/solutions' },
      { name: 'Appointment Automation', href: '/solutions' },
      { name: 'Custom Dashboards', href: '/solutions' },
      { name: 'CRM & Intake Workflows', href: '/solutions' },
    ],
    industries: [
      { name: 'Dental Practices', href: '/industries' },
      { name: 'Specialty Clinics', href: '/industries' },
      { name: 'Multi-Location Groups', href: '/industries' },
      { name: 'Patient Ops Teams', href: '/industries' },
    ],
  };

  return (
    <footer className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 bg-[#020205] border-t border-white/[0.05] overflow-hidden">
      {/* Deep Space Background / Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none mix-blend-screen" />
      
      <motion.div 
         animate={{ rotate: -360 }}
         transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
         className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(111,61,255,0.05)_0%,_transparent_70%)] pointer-events-none" 
      />
      <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
         className="absolute -bottom-[400px] -left-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle,_rgba(34,211,238,0.05)_0%,_transparent_70%)] pointer-events-none" 
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-12 pb-12 sm:pb-24 border-b border-white/[0.05]">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <button onClick={() => navigate('/')} className="flex items-center gap-4 group mb-10 relative">
              <div className="absolute inset-0 bg-[#6F3DFF]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/logo-transparent.png" 
                alt="Nexol Tech Solutions Logo" 
                className="h-14 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-500 relative z-10 drop-shadow-[0_0_20px_rgba(111,61,255,0.4)]" 
              />
              <div className="text-left relative z-10">
                <span className="text-white font-black text-2xl sm:text-4xl tracking-tighter drop-shadow-lg leading-none">NEXOL</span>
                <span className="block text-[10px] sm:text-xs text-slate-400 font-bold tracking-[0.3em] uppercase mt-1 group-hover:text-cyan-400 transition-colors">Tech Solutions</span>
              </div>
            </button>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-12 max-w-md">
              Nexol helps clinics reduce no-shows, recover missed calls, and streamline patient operations with AI calling agents, custom dashboards, and workflow automation.
            </p>
            
            {/* Social Footprint (Glassmorphism) */}
            <div className="flex gap-5">
              {[Linkedin, Twitter, Github].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="group relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[#0a0a0f] border border-white/5 flex items-center justify-center text-slate-400 hover:border-cyan-400/50 hover:text-white transition-all duration-500 overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-8 pt-4 lg:pt-0">
            
            {/* Corporate */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-sm tracking-[0.25em] uppercase mb-10 flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#6F3DFF] rounded-full animate-pulse shadow-[0_0_10px_rgba(111,61,255,0.8)]" /> 
                 Company
              </h4>
              <ul className="space-y-5">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <button onClick={() => handleLink(link.href)} className="text-slate-400 font-light hover:text-white transition-colors text-base inline-flex items-center group">
                      <span className="w-0 h-px bg-[#6F3DFF] mr-0 group-hover:w-5 group-hover:mr-4 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

             {/* Solutions */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-sm tracking-[0.25em] uppercase mb-10 flex items-center gap-3">
                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" /> 
                 Solutions
              </h4>
              <ul className="space-y-5">
                {links.intelligence.map((link, index) => (
                  <li key={index}>
                    <button onClick={() => handleLink(link.href)} className="text-slate-400 font-light hover:text-white transition-colors text-base inline-flex items-center group">
                      <span className="w-0 h-px bg-cyan-400 mr-0 group-hover:w-5 group-hover:mr-4 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specialties */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="col-span-2 sm:col-span-1"
            >
              <h4 className="text-white font-bold text-sm tracking-[0.25em] uppercase mb-10 flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" /> 
                 Best Fit
              </h4>
              <ul className="space-y-5">
                {links.industries.map((link, index) => (
                  <li key={index}>
                    <button onClick={() => handleLink(link.href)} className="text-slate-400 font-light hover:text-white transition-colors text-base inline-flex items-center group">
                      <span className="w-0 h-px bg-emerald-400 mr-0 group-hover:w-5 group-hover:mr-4 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Bar: Server Status & Legal */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 1 }}
           className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12"
        >
          <div className="text-slate-500 font-medium text-sm tracking-widest uppercase text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <span>&copy; {currentYear} Nexol Tech Solutions INC. </span>
            <span className="hidden md:inline-block text-slate-700">|</span> 
            <div className="flex gap-4 items-center">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <span className="text-slate-700">|</span> 
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            </div>
          </div>
          
          <div 
             className="flex items-center gap-4 bg-[#0a0a0f] border border-white/10 px-6 py-3 rounded-full shadow-inner hover:border-emerald-500/50 hover:bg-[#141423] transition-all cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
               <Network className="w-4 h-4 text-emerald-400 absolute opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite]" />
               <span className="relative flex h-3 w-3 group-hover:opacity-0 transition-opacity">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </span>
            </div>
            <span className="text-xs font-black text-slate-300 uppercase tracking-[0.25em] group-hover:text-emerald-400 transition-colors drop-shadow-md">ACCEPTING PROJECTS</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
