import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface TechCategory {
  name: string;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: 'Programming Languages',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP'],
  },
  {
    name: 'Our Frameworks',
    technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'Django', 'Spring Boot', 'Laravel', 'Express.js'],
  },
  {
    name: 'Cloud Platforms',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  {
    name: 'AI & Machine Learning',
    technologies: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK'],
  },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(0);
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
      className="relative py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Our Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies We <span className="text-gradient">Use</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            TECHVISION integrates a mix of technologies to deliver top-tier solutions for our clients. 
            Our technology toolkit features cutting-edge tools and frameworks.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-glow'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techCategories[activeTab].technologies.map((tech, index) => (
            <div
              key={index}
              className={`glass-card-hover p-6 text-center group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-blue-400 font-bold text-lg">
                  {tech.charAt(0)}
                </span>
              </div>
              <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
          >
            View All Technologies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Engagement Models */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Engagement <span className="text-gradient">Models</span>
            </h3>
            <p className="text-slate-400">
              Your Success is Our Code - Flexible engagement options tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Staff Augmentation',
                description: 'Top IT talent on your terms: Dedicated, Hourly, or Flexible',
                icon: '👥',
              },
              {
                title: 'Project Based',
                description: 'Project Success, Simplified - Fixed scope, fixed timeline, fixed budget',
                icon: '📋',
              },
              {
                title: 'Team Based',
                description: 'Team Success, Simplified - Dedicated team for long-term partnerships',
                icon: '🚀',
              },
            ].map((model, index) => (
              <div
                key={index}
                className="glass-card-hover p-8 text-center group"
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {model.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
