import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Chief Operating Officer',
    company: 'FinEdge Logistics',
    content: 'Nexol Tech Solutions didn\'t just build us a platform; they completely re-engineered our operational workflow. Their deep understanding of enterprise architecture and commitment to on-time delivery was flawless. The system scales perfectly, and their ongoing support is unmatched.',
    rating: 5,
  },
  {
    name: 'Marcus Reynolds',
    role: 'VP of Engineering',
    company: 'HealthSync Systems',
    content: 'We migrated our entire legacy infrastructure over to a modern cloud-native system with Nexol. Their team brought transparency, elite technical talent, and rigid security standards. They were true partners throughout the entire digital transformation journey.',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Nexus CRM Solutions',
    content: 'Finding a development partner that actually understands the business use-case behind the code is rare. Nexol delivered our custom SaaS platform on schedule and bug-free. Their UI/UX team and backend architects are simply world-class.',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-12 lg:py-16 bg-[#020205] overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Section Header & Nav */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">Client Confidence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Trusted by Leaders in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-[#6F3DFF]">Enterprise Tech.</span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed font-light mb-12 max-w-md">
              Evidence of our engineering precision, reliability, and technical dominance across global industry clusters.
            </p>

            {/* Navigation Controls (Horizontal) */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating && index !== activeIndex) {
                        setIsAnimating(true);
                        setActiveIndex(index);
                        setTimeout(() => setIsAnimating(false), 600);
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? 'w-10 bg-cyan-400'
                        : 'w-2 bg-slate-800 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-[#0a0a0f] border border-white/5 p-6 sm:p-10 sm:p-14 shadow-2xl overflow-hidden min-h-[auto] sm:min-h-[420px] flex items-center group">
              {/* Subtle background graphics */}
              <Quote className="absolute -top-10 -left-10 w-48 h-48 text-white/[0.02] -rotate-12 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10 w-full h-full">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: index === activeIndex ? 1 : 0, 
                      x: index === activeIndex ? 0 : index < activeIndex ? -20 : 20,
                      filter: index === activeIndex ? 'blur(0px)' : 'blur(10px)'
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 flex flex-col justify-center ${index === activeIndex ? 'relative' : 'pointer-events-none'}`}
                  >
                    <div className="flex items-center gap-1 mb-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>

                    <blockquote className="text-xl sm:text-2xl text-white mb-12 leading-relaxed font-light tracking-tight italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/10 flex items-center justify-center text-cyan-400 font-bold text-xl uppercase tracking-tighter shadow-lg relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                         {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-black text-lg tracking-tight leading-none mb-2">{testimonial.name}</h4>
                        <p className="text-slate-500 text-[11px] font-bold tracking-[0.1em] uppercase">
                          {testimonial.role} <span className="text-white/10 px-1">|</span> <span className="text-cyan-400/80">{testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
