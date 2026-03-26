import { useRef, useEffect, useState } from 'react';
import { 
  LayoutTemplate, 
  Users, 
  Smartphone, 
  Cloud,
  Bot,
  MessageSquare,
  PhoneCall,
  Workflow,
  LineChart,
  FileText,
  PieChart,
  Activity,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const serviceGroups = [
  {
    id: 'core-digital',
    title: 'Core Digital Solutions',
    badge: 'Foundation',
    description: 'Robust, scalable digital infrastructure designed to digitize and streamline your core business operations.',
    services: [
      {
        title: 'Custom Web Application Development',
        value: 'Create scalable web platforms that streamline operations, improve user experience, and support business growth.',
        icon: LayoutTemplate,
        benefits: ['High-performance architecture', 'Secure user portals', 'Seamless API integration'],
      },
      {
        title: 'Custom CRM Development',
        value: 'Build a centralized system to manage leads, customer relationships, sales workflows, and internal operations.',
        icon: Users,
        benefits: ['Custom workflow logic', 'Third-party integrations', 'Scalable database design'],
      },
      {
        title: 'Mobile Application Development',
        value: 'Deliver premium native and cross-platform mobile experiences tailored for iOS and Android.',
        icon: Smartphone,
        benefits: ['Native-level performance', 'Intuitive UI/UX design', 'Offline functionality'],
      },
      {
        title: 'Cloud-Based Software Solutions',
        value: 'Modernize your infrastructure with secure, highly-available, and resilient cloud architecture.',
        icon: Cloud,
        benefits: ['Cloud migration', 'Microservices architecture', 'Automated scaling'],
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    badge: 'Innovation',
    description: 'Leverage cutting-edge artificial intelligence to eliminate manual work and accelerate operational execution.',
    services: [
      {
        title: 'AI Automation Systems',
        value: 'Reduce repetitive manual work and improve response speed with intelligent automation tailored to business processes.',
        icon: Bot,
        benefits: ['End-to-end task automation', 'Custom AI orchestration', 'Cost reduction'],
      },
      {
        title: 'AI Chatbots',
        value: 'Deploy intelligent conversational agents that provide 24/7 automated customer support and lead qualification.',
        icon: MessageSquare,
        benefits: ['Natural language processing', 'Contextual responses', 'Multi-channel deployment'],
      },
      {
        title: 'AI Calling Agents',
        value: 'Automate outbound and inbound calls with highly realistic, human-like AI conversational voice technology.',
        icon: PhoneCall,
        benefits: ['Real-time voice synthesis', 'CRM live-syncing', 'Appointment scheduling'],
      },
      {
        title: 'Workflow Automation',
        value: 'Connect isolated software tools and databases into seamless, zero-touch business pipelines.',
        icon: Workflow,
        benefits: ['Cross-platform syncing', 'Error reduction', 'Webhook & API bridging'],
      }
    ]
  },
  {
    id: 'data-bi',
    title: 'Data & Business Intelligence',
    badge: 'Insights',
    description: 'Transform raw data into clear, actionable executive insights for strategic decision-making.',
    services: [
      {
        title: 'Data Analytics Dashboards',
        value: 'Turn business data into actionable insights with real-time tracking systems and interactive visualizations.',
        icon: LineChart,
        benefits: ['Interactive charting', 'Custom KPI tracking', 'Real-time data feeds'],
      },
      {
        title: 'Reporting Systems',
        value: 'Generate automated, comprehensive reports for stakeholders, clients, and internal management teams.',
        icon: FileText,
        benefits: ['Scheduled delivery', 'Multi-source aggregation', 'White-labeling'],
      },
      {
        title: 'Business Intelligence Solutions',
        value: 'Leverage advanced analytics and machine learning to forecast trends and optimize strategy.',
        icon: PieChart,
        benefits: ['Predictive modeling', 'Deep data mining', 'Competitive analysis'],
      },
      {
        title: 'Performance Monitoring Tools',
        value: 'Keep a constant, high-level pulse on your application, network, and operational health.',
        icon: Activity,
        benefits: ['Live system alerts', 'Uptime monitoring', 'Latency metrics'],
      }
    ]
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0B0B12] overflow-hidden border-t border-white/[0.02]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase">Enterprise Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Strategic Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Architecture
            </span>{' '}
            for Global Enterprises
          </h2>
          <p className="text-lg text-slate-300/90 leading-relaxed font-light">
            We architect and deploy mission-critical digital systems that orchestrate operational efficiency, maximize ROI, and scale with absolute precision.
          </p>
        </div>

        {/* Services Grouping */}
        <div className="space-y-32">
          {serviceGroups.map((group, groupIndex) => (
            <div 
              key={group.id} 
              className={`transition-all duration-1000 delay-${(groupIndex + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              
              {/* Group Header */}
              <div className="mb-12 border-b border-slate-800/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded bg-slate-800/50 text-slate-300 text-[10px] font-bold tracking-widest uppercase border border-slate-700/50">
                      {group.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                    {group.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Group Services Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
                {group.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={serviceIndex}
                      className={`group relative bg-[#141423]/80 border border-slate-800/80 hover:border-blue-500/40 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-[#18182A] hover:shadow-[0_0_40px_rgba(111,61,255,0.08)] hover:-translate-y-2 overflow-hidden ${serviceIndex % 2 !== 0 ? 'md:mt-16' : ''}`}
                    >
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Service Header */}
                        <div className="flex flex-col gap-6 mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-cyan-400/40 transition-all duration-500 group-hover:scale-110 shadow-inner">
                            <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                              {service.title}
                            </h4>
                          </div>
                        </div>

                        {/* Value Proposition */}
                        <p className="text-slate-300/90 text-[15px] leading-relaxed mb-8">
                          {service.value}
                        </p>

                        {/* Benefit Points */}
                        <div className="mt-auto pt-6 border-t border-slate-800/50 flex flex-col gap-3">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className="text-sm text-slate-400 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Link (Appears on Hover) */}
                        <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
                          <button 
                            onClick={scrollToContact}
                            className="bg-blue-500/10 hover:bg-blue-500/20 p-2 rounded-full text-blue-400 transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Mobile Action Link */}
                        <div className="mt-8 sm:hidden">
                           <button 
                            onClick={scrollToContact}
                            className="text-blue-400 text-sm font-semibold flex items-center gap-2"
                          >
                            Discuss Project <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Global Action CTA */}
        <div className={`mt-32 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#18182A] via-[#10101A] to-[#6F3DFF]/20 border border-[#6F3DFF]/30 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-[0_0_50px_rgba(111,61,255,0.1)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#5EEAD4]/10 blur-[120px] rounded-full pointer-events-none" />
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight relative z-10">Define Your Future Competitive Advantage</h3>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Partner with an engineering team that prioritizes business strategy. We build infrastructures reserved for scalability and high-impact ROI.
            </p>
            <button 
              onClick={scrollToContact}
              className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(111,61,255,0.4)] hover:shadow-[0_0_40px_rgba(111,61,255,0.6)] border border-blue-500/50 inline-flex items-center gap-3 group"
            >
              Start Your Private Briefing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
