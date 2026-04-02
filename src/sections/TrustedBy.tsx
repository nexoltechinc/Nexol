import { ArrowRight, Bot, Calendar, LayoutDashboard, Phone, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const outcomeCards = [
  {
    eyebrow: 'Operations Automation',
    title: 'Remove repetitive manual work across your business.',
    description:
      'Automate follow-up, routing, reporting, and internal tasks so your team spends less time on repetitive work.',
    icon: Calendar,
  },
  {
    eyebrow: 'Revenue Systems',
    title: 'Build cleaner sales, support, and customer workflows.',
    description:
      'Connect websites, CRM, e-commerce, call flows, and handoffs so leads and customers do not get stuck between tools.',
    icon: Phone,
  },
  {
    eyebrow: 'Reporting & Visibility',
    title: 'Give decision-makers dashboards built around real operations.',
    description:
      'Track sales, orders, support performance, workflow gaps, and team activity in one custom reporting view.',
    icon: LayoutDashboard,
  },
];

const workflowChips = [
  'Web development',
  'AI automation',
  'CRM workflows',
  'E-commerce systems',
  'Operations dashboards',
  'Internal tools',
];

const TrustedBy = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#020205] py-14 sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[#6F3DFF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-300">
              What Businesses Hire Nexol To Solve
            </span>
          </div>
          <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-6xl">
            Better systems.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-[#6F3DFF] bg-clip-text text-transparent">
              Faster execution.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
            We build systems around the workflows that usually slow businesses down:
            websites, lead handling, e-commerce, follow-up, operations, dashboards, and internal reporting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomeCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-6 shadow-2xl transition-all duration-300 sm:p-8"
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

        <div className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-6 shadow-2xl sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5">
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                Common Solution Stack
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-black tracking-tight text-white">
              Built for the business problems generic tools do badly.
            </h3>
            <p className="mb-6 max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
              Nexol is strongest when a business has fragmented tools, slow response time, manual admin work,
              weak visibility, or growth systems that no longer fit the way the team actually operates.
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
                <p className="text-sm font-black tracking-tight text-white">Why this works better</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Clearer business positioning
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm font-light leading-relaxed text-slate-300">
              <li>Focused on business outcomes instead of broad agency claims.</li>
              <li>Explains value in buyer language: revenue, operations, reporting, and efficiency.</li>
              <li>Shows what Nexol actually builds before asking for the call.</li>
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 text-[12px] font-black uppercase tracking-widest text-[#020205] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
