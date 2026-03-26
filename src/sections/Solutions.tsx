import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Code, Brain, Cpu, BarChart3, Globe, Smartphone, Settings, Palette } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    title: 'Software Development',
    description: 'Tailored enterprise-grade software solutions designed to meet your unique business requirements.',
    icon: Code,
    image: '/service-software.jpg',
    features: ['Custom Enterprise Software', 'Full-Stack Web Applications', 'SaaS Platform Development'],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Revolutionise your industry with AI-powered innovation and data-centric solutions.',
    icon: Brain,
    image: '/service-ai.jpg',
    features: ['AI-Powered Chatbots', 'Computer Vision', 'NLP Implementation'],
  },
  {
    title: 'Machine Learning',
    description: 'Harness the power of machine learning to drive innovation and unlock data-centric growth.',
    icon: Cpu,
    image: '/service-ml.jpg',
    features: ['Predictive Analytics', 'Deep Learning', 'Custom ML Models'],
  },
  {
    title: 'BI & Data Analytics',
    description: 'Elevate your industry with powerful BI solutions and insightful data analytics.',
    icon: BarChart3,
    image: '/service-bi.jpg',
    features: ['Enterprise Dashboards', 'Data Warehousing', 'Real-time Analytics'],
  },
  {
    title: 'Website Development',
    description: 'Elevate your industry with cutting-edge web solutions and innovative digital experiences.',
    icon: Globe,
    image: '/service-web.jpg',
    features: ['High-Performance Websites', 'E-Commerce Solutions', 'Headless CMS'],
  },
  {
    title: 'Mobile App Development',
    description: 'Transform your industry with data-driven insights and AI-powered mobile solutions.',
    icon: Smartphone,
    image: '/service-mobile.jpg',
    features: ['Native iOS & Android', 'Cross-Platform Apps', 'Enterprise Mobile Solutions'],
  },
  {
    title: 'Business Process Automation',
    description: 'Automate smarter with scalable, optimized, and future-ready business solutions.',
    icon: Settings,
    image: '/service-automation.jpg',
    features: ['Workflow Automation', 'CRM/ERP Integration', 'Document Processing'],
  },
  {
    title: 'Designing Services',
    description: 'Transform your industry with creative design, visual innovation, and impactful branding.',
    icon: Palette,
    image: '/service-design.jpg',
    features: ['UI/UX Design', 'Brand Identity', 'Motion Graphics'],
  },
];

const Solutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSolution, setActiveSolution] = useState(0);
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
      id="solutions"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Incubating a culture of{' '}
            <span className="text-gradient">innovation & creativity</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            At TECHVISION, we provide cutting-edge AI development, web and app development, 
            digital marketing, and IT consulting services to help businesses innovate, grow, 
            and optimize their operations with advanced technology solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`glass-card-hover group cursor-pointer overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveSolution(index)}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {solution.features.slice(0, 2).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <button 
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                  >
                    View Service
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Solution Preview */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-blue-400 text-sm font-medium mb-2">
                  Featured Solution
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {solutions[activeSolution].title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {solutions[activeSolution].description}
                </p>
                <div className="space-y-3 mb-8">
                  {solutions[activeSolution].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary w-fit flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
