import { ArrowRight, Cpu, Database, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ServicesHighlight = () => {
    const navigate = useNavigate();
    const highlights = [
        { title: "Custom Websites & Platforms", desc: "Build fast, modern business websites, portals, and web apps that support sales, operations, and customer experience.", icon: Brain },
        { title: "AI Automation & Dashboards", desc: "Automate repetitive workflows and give teams clear reporting across sales, support, operations, and performance.", icon: Cpu },
        { title: "CRM, E-Commerce & Internal Tools", desc: "Connect customer workflows, order systems, reporting, and internal processes so the business runs from one smarter system.", icon: Database }
    ];

    return (
        <section className="py-12 sm:py-16 px-6 md:px-12 bg-[#020205] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,_rgba(111,61,255,0.05),_transparent_40%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[11px] text-cyan-400 font-black uppercase tracking-[0.4em] mb-6 mb-4">What Nexol Builds</p>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                            Systems Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">Actually Need.</span>
                        </h2>
                    </motion.div>
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/solutions')} 
                        className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-bold bg-white/5 hover:bg-white hover:text-black px-6 sm:px-8 py-4 rounded-full border border-white/10 transition-all duration-300 group"
                    >
                        Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((h, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 sm:p-8 lg:p-12 bg-[#0a0a0f] border border-white/5 rounded-[2rem] sm:rounded-[3rem] hover:border-cyan-500/40 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-10 group-hover:bg-cyan-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500">
                                <h.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 tracking-tight drop-shadow-md">{h.title}</h3>
                            <p className="text-slate-400 font-light leading-relaxed mb-8 sm:mb-10 group-hover:text-slate-300 transition-colors uppercase text-xs sm:text-sm tracking-wide">{h.desc}</p>
                            <div className="h-px w-full bg-white/5 group-hover:bg-cyan-500/40 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
