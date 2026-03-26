import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobalCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-6 md:px-12 bg-[#020205] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#6F3DFF]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative group overflow-hidden bg-[#0a0a0f] border border-white/10 rounded-[3rem] p-6 sm:p-10 md:p-14 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                >
                    {/* Animated Decorative Accents */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6F3DFF]/10 blur-[100px] rounded-full group-hover:bg-[#6F3DFF]/20 transition-all duration-1000" />
                    
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-xl"
                        >
                            <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover:animate-pulse" />
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Strategic Intervention</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.05] drop-shadow-2xl"
                        >
                            Initiate Your <br/> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF]">Competitive Advantage.</span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            Stop managing technical debt and start engineering strategic growth. Our directors 
                            personally lead all initial architectural discovery sessions to guarantee absolute alignment with your ROI targets.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <button 
                                onClick={() => navigate('/contact')}
                                className="w-full sm:w-auto h-16 bg-white text-black px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-widest hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                Start Discovery Session
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={() => navigate('/portfolio')}
                                className="w-full sm:w-auto h-16 bg-transparent text-white border border-white/10 hover:bg-white/5 px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-widest transition-all hover:border-white/30"
                            >
                                Review Case Studies
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalCTA;
