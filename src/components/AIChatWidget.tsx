import { useState, useEffect, useRef } from 'react';
import { X, Send, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi, I'm NEXA. I can help you explore Nexol's clinic automation services, pricing fit, or the best next step for your practice.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    const query = input.trim().toLowerCase();
    if (!query) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = '';

      if (query === 'hi' || query === 'hello' || query === 'hey') {
        response = 'Hi, glad you are here. Are you trying to improve missed calls, appointment follow-up, intake workflows, or reporting for your clinic?';
      } else if (query.includes('service') || query.includes('what do you do') || query.includes('offer')) {
        response = 'We help clinics with AI calling agents, missed-call recovery, appointment reminders, patient intake workflows, and custom dashboards or CRM logic built around staff operations. Tell me which area is slowing your team down.';
      } else if (query.includes('price') || query.includes('cost') || query.includes('budget')) {
        response = 'Pricing depends on the workflow scope, integrations, and whether you need a focused automation or a full custom system. The fastest next step is a free clinic automation audit so we can recommend the right fit.';
      } else if (query.includes('contact') || query.includes('call') || query.includes('talk') || query.includes('meet')) {
        response = 'Absolutely. The best next step is to book a clinic automation audit so we can review your current workflow, where the bottlenecks are, and what to automate first.';
      } else {
        response = 'That sounds like something we can help with. Share what is slowing the clinic down, and we will point you toward the right automation or software approach.';
      }

      const assistantMessage = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999] font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -inset-4 bg-[#6F3DFF]/20 rounded-full blur-2xl animate-pulse -z-10"
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 relative group overflow-hidden ${
          isOpen ? 'bg-[#141423] border border-white/10' : 'bg-[#6F3DFF] border border-white/20'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform group-hover:rotate-90 duration-500" />
        ) : (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <img src="/logo-transparent.png" className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" alt="NEXA" />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 sm:bottom-24 right-0 w-[min(420px,calc(100vw-2rem))] sm:w-[420px] max-w-[calc(100vw-2rem)] bg-[#0B0B12]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          >
            <div className="p-5 sm:p-8 border-b border-white/5 bg-gradient-to-br from-blue-900/40 via-blue-900/10 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-5 sm:p-8 opacity-10">
                <Zap className="w-24 h-24 text-cyan-400 rotate-12" />
              </div>
              <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#141423] border border-white/10 flex items-center justify-center shadow-2xl relative">
                  <div className="absolute inset-0 bg-cyan-400/5 blur-xl rounded-full animate-pulse" />
                  <img src="/logo-transparent.png" className="w-8 h-8 sm:w-9 sm:h-9 object-contain relative" alt="Nexol" />
                </div>
                <div>
                  <h3 className="text-white font-black text-base sm:text-lg tracking-tight">NEXA Support</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Clinic Automation / Online</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 h-[min(55vh,450px)] sm:h-[450px] overflow-y-auto p-5 sm:p-8 space-y-4 sm:space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-white/5"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-4 sm:p-5 rounded-[1.5rem] text-sm leading-relaxed max-w-[88%] sm:max-w-[85%] shadow-xl ${
                      msg.role === 'user'
                        ? 'bg-[#6F3DFF] text-white rounded-tr-none'
                        : 'bg-[#141423] text-slate-300 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#141423] border border-white/5 p-4 sm:p-5 rounded-[1.5rem] rounded-tl-none flex items-center gap-1.5 shadow-xl">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.1 }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-black/40 border-t border-white/5 backdrop-blur-xl">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about missed calls, no-shows, dashboards..."
                  className="flex-1 min-w-0 bg-[#141423] border border-white/10 text-white text-sm rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#6F3DFF]/40 focus:border-[#6F3DFF]/40 transition-all placeholder:text-slate-600"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="bg-[#6F3DFF] hover:bg-[#7C52FF] w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all border border-white/10 shrink-0"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <p className="text-[10px] text-center text-slate-500 mt-4 font-black uppercase tracking-[0.3em] opacity-40">
                Nexa for clinic ops
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatWidget;
