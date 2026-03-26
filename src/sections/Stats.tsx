import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Users, Building2 } from 'lucide-react';

interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  { value: '1000+', numericValue: 1000, suffix: '+', label: 'projects delivered', icon: Briefcase },
  { value: '05+', numericValue: 5, suffix: '+', label: 'years in the market', icon: Calendar },
  { value: '120+', numericValue: 120, suffix: '+', label: 'active clients, including Fortune 500 companies', icon: Users },
  { value: '03', numericValue: 3, suffix: '', label: 'offices and delivery centres globally', icon: Building2 },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate counters
            stats.forEach((stat, index) => {
              const duration = 2000;
              const startTime = Date.now();
              
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(stat.numericValue * easeProgress);
                  return newCounters;
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              setTimeout(() => requestAnimationFrame(animate), index * 150);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Company <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We build lasting partnerships with our clients through excellence, innovation, and dedication
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-children">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card-hover p-6 lg:p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {String(counters[index]).padStart(stat.numericValue < 10 ? 2 : 0, '0')}
                  {stat.suffix}
                </div>
                <p className="text-slate-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 reveal">
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Receive a complimentary consultation
                </h3>
                <p className="text-slate-400">
                  Let's discuss how we can help transform your business
                </p>
              </div>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary whitespace-nowrap"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
