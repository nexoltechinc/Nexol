import { useRef, useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long has TECHVISION been in the business?',
    answer: 'TechVision has been delivering innovative digital solutions for over 5+ years, consistently driving growth and digital transformation for our global clients. We have successfully completed 1000+ projects across various industries.',
  },
  {
    question: 'How does TECHVISION ensure project success?',
    answer: 'We ensure success through a structured project management approach, cutting-edge technology, and close collaboration with our clients. Our agile methodology, regular milestones, and transparent communication keep projects on track.',
  },
  {
    question: 'Does TECHVISION provide support post-project completion?',
    answer: 'Yes, we offer comprehensive post-project support, including maintenance, updates, bug fixes, and customer assistance to ensure continued success. We provide various support packages tailored to your needs.',
  },
  {
    question: 'How can I start a project with TECHVISION?',
    answer: 'You can start a project by reaching out to us via our website contact form, email, or phone. Our team will schedule a discovery call to understand your requirements and provide a detailed proposal.',
  },
  {
    question: 'What industries does TECHVISION specialize in?',
    answer: 'We specialize in various industries, including finance, healthcare, e-commerce, education, real estate, and more. Our diverse expertise allows us to deliver tailored solutions for any sector.',
  },
  {
    question: "What is TECHVISION's approach to client communication during a project?",
    answer: 'We maintain transparent and consistent communication through regular meetings, progress reports, and a dedicated client portal. You will have a dedicated project manager as your single point of contact.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className={`lg:sticky lg:top-32 lg:self-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              FAQ's
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>

            {/* Contact CTA */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Still have questions?</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Can't find the answer you're looking for? Please chat with our friendly team.
                  </p>
                  <button 
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2"
                  >
                    Get in touch
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`glass-card overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-blue-500 font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white font-medium pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
