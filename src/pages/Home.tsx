import { useEffect } from 'react';
import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import { ServicesHighlight } from '../sections/Teasers';
import Industries from '../sections/Industries';
import GlobalCTA from '../sections/GlobalCTA';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
    
        const revealElements = document.querySelectorAll('.reveal, .stagger-children');
        revealElements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);

  return (
    <main className="relative z-10">
      <Hero />
      <TrustedBy />
      <ServicesHighlight />
      <Industries />
      <GlobalCTA />
    </main>
  );
};

export default Home;
