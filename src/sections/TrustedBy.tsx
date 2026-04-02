import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Bot, Calendar, LayoutDashboard, Phone, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const outcomeCards = [
  {
    eyebrow: 'Scheduling Workflows',
    title: 'Reduce no-shows before they hit revenue.',
    description:
      'Automate reminders, confirmations, and follow-up logic so appointments stop slipping through manual processes.',
    icon: Calendar,
  },
  {
    eyebrow: 'Lead Handling',
    title: 'Respond to missed calls and after-hours leads faster.',
    description:
      'Capture inbound demand, route urgent requests, and give front-desk teams cleaner handoffs instead of voicemail chaos.',
    icon: Phone,
  },
  {
    eyebrow: 'Ops Visibility',
    title: 'Give staff dashboards built for the way clinics operate.',
    description:
      'Track response time, booked appointments, follow-up gaps, and pipeline bottlenecks in one custom view.',
    icon: LayoutDashboard,
  },
];

const workflowChips = [
  'Appointment reminders',
  'AI calling agents',
  'Missed-call recovery',
  'Intake routing',
  'Custom CRM logic',
  'Operations dashboards',
];

const TrustedBy = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/5 bg-[#020205] py-16 sm:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[#6F3DFF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-300">
              What Dental And Medical Clinics Hire Nexol To Fix
            </span>
          </div>
          <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-6xl">
            More booked appointments.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF] bg-clip-text text-transparent">
              Less front-desk friction.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
            We build systems around the workflows that usually leak time and revenue in clinics:
            scheduling, follow-up, intake, missed calls, handoffs, and reporting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomeCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-6 shadow-2xl transition-all duration-700 sm:p-8 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                  {card.eyebrow}
                </p>
                <h3 className="mb-4 text-xl font-black tracking-tight text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-slate-400 sm:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-6 shadow-2xl sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5">
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                Common Workflow Stack
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-black tracking-tight text-white">
              Built for the jobs generic tools do badly.
            </h3>
            <p className="mb-6 max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
              Nexol is strongest when a clinic has manual admin load, slow lead response, fragmented tools,
              or no clear visibility into what is happening between inquiry and appointment.
            </p>
            <div className="flex flex-wrap gap-3">
              {workflowChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-black tracking-tight text-white">Why this converts better</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Clearer trust structure
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm font-light leading-relaxed text-slate-300">
              <li>Focused on clinic workflows instead of generic tech claims.</li>
              <li>Explains outcomes in buyer language: bookings, response time, admin load.</li>
              <li>Shows what Nexol actually builds before asking for the call.</li>
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 text-[12px] font-black uppercase tracking-widest text-[#020205] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]"
            >
              Book Clinic Audit
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
