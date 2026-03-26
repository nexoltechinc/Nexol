import { ArrowRight, Cpu, Database, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ServicesHighlight = () => {
    const navigate = useNavigate();
    const highlights = [
        { title: "AI Orchestration", desc: "Enterprise cognitive layers integrated at the core.", icon: Brain },
        { title: "Core Engineering", desc: "Mission-critical ecosystems built for infinite scale.", icon: Cpu },
        { title: "Strategic CRM", desc: "Transforming data silos into predictive assets.", icon: Database }
    ];

    return (
        <section className="py-12 px-6 md:px-12 bg-[#020205] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,_rgba(111,61,255,0.05),_transparent_40%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[11px] text-cyan-400 font-black uppercase tracking-[0.4em] mb-6 mb-4">Enterprise Domains</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">Excellence.</span>
                        </h2>
                    </motion.div>
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/solutions')} 
                        className="flex items-center gap-3 text-white font-bold bg-white/5 hover:bg-white hover:text-black px-8 py-4 rounded-full border border-white/10 transition-all duration-300 group"
                    >
                        View All Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                            className="group p-12 bg-[#0a0a0f] border border-white/5 rounded-[3rem] hover:border-cyan-500/40 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-cyan-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500">
                                <h.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 tracking-tight drop-shadow-md">{h.title}</h3>
                            <p className="text-slate-400 font-light leading-relaxed mb-10 group-hover:text-slate-300 transition-colors uppercase text-sm tracking-wide">{h.desc}</p>
                            <div className="h-px w-full bg-white/5 group-hover:bg-cyan-500/40 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
