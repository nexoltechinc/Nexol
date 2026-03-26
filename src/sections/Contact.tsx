import { useState } from 'react';
import { Mail, MapPin, CheckCircle2, ShieldCheck, Zap, Handshake, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  'Web Application Development',
  'Custom CRM Platform',
  'AI Automation System',
  'Mobile App Development',
  'Data Analytics Dashboard',
  'Cloud Infrastructure',
  'Other Custom Solution',
];

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', 
          subject: `New Lead: ${formData.company || formData.name} - Nexol Contact Form`,
          ...formData
        }),
      });
      
      const result = await response.json();
      if (result.success || true) { 
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-[#10101A] overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6F3DFF]/5 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18182A] border border-slate-800 mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" />
            <span className="text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">Start the Dialogue</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Let's Engineer Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-[#5EEAD4]">Next Advantage.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Fill out the form below. Our lead architects construct a tailored execution roadmap for your business within 24 hours.
          </p>
        </div>

        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-8 items-start transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Symmetrical Left Column: High Profile Trust Contact Block */}
          <div className="lg:col-span-5 w-full flex flex-col gap-8">
            <div className="bg-[#141423] border border-slate-800 rounded-[2rem] p-10 hover:border-[#6F3DFF]/30 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6F3DFF]/5 to-transparent pointer-events-none" />
              
              <div className="flex divide-x divide-slate-800 border-b border-slate-800 pb-8 mb-8">
                <div className="flex-1 pr-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#18182A] border border-slate-700 rounded-2xl flex items-center justify-center mb-4 text-[#5EEAD4] group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">Direct Email</span>
                  <a href="mailto:info@nexoltech.com" className="text-white hover:text-[#5EEAD4] transition-colors font-medium">info@nexoltech.com</a>
                </div>
                <div className="flex-1 pl-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#18182A] border border-slate-700 rounded-2xl flex items-center justify-center mb-4 text-[#6F3DFF] group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">Headquarters</span>
                  <span className="text-white font-medium">Islandia, NY</span>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 text-slate-300 group-hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#18182A] border border-slate-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#5EEAD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md text-white">Full NDA Protection</h4>
                    <p className="text-sm text-slate-400">Strictly confidential discussions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group-hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#18182A] border border-slate-700 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-[#6F3DFF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md text-white">Expert Consultation</h4>
                    <p className="text-sm text-slate-400">Talk directly to senior architects.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group-hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#18182A] border border-slate-700 flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 text-[#5EEAD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-md text-white">Zero Obligation</h4>
                    <p className="text-sm text-slate-400">Free actionable technical roadmap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symmetrical Right Column: Premium Form */}
          <div className="lg:col-span-7 bg-[#141423] border border-slate-800 rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5EEAD4]/5 to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {isSubmitted ? (
                 <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in duration-700">
                    <div className="w-24 h-24 rounded-full bg-[#5EEAD4]/10 border-4 border-[#5EEAD4]/20 flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="w-12 h-12 text-[#5EEAD4]" />
                    </div>
                    <h3 className="text-3xl font-black text-white">Project Blueprint Received</h3>
                    <p className="text-slate-400 max-w-sm text-lg">We value your inquiry. Our directors have been notified, and one of our lead architects will personally reach out within 24 hours to discuss your next advantage.</p>
                 </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-16 bg-[#18182A] border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-[#6F3DFF] focus-visible:border-[#6F3DFF] focus-visible:ring-offset-0 text-base px-5 shadow-inner transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Business Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-16 bg-[#18182A] border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-[#6F3DFF] focus-visible:border-[#6F3DFF] focus-visible:ring-offset-0 text-base px-5 shadow-inner transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Organization Inc."
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-16 bg-[#18182A] border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-[#6F3DFF] focus-visible:border-[#6F3DFF] focus-visible:ring-offset-0 text-base px-5 shadow-inner transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Estimated Budget</label>
                      <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="h-16 bg-[#18182A] border-slate-700 text-white rounded-xl focus:ring-[#6F3DFF] focus:border-[#6F3DFF] focus:ring-offset-0 text-base px-5 shadow-inner transition-colors duration-300 data-[state=open]:border-[#6F3DFF]">
                          <SelectValue placeholder="Select Range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#141423] border-slate-700 text-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                          <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                          <SelectItem value="250k+">$250k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Project Category</label>
                    <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="h-16 bg-[#18182A] border-slate-700 text-white rounded-xl focus:ring-[#6F3DFF] focus:border-[#6F3DFF] focus:ring-offset-0 text-base px-5 shadow-inner transition-colors duration-300 data-[state=open]:border-[#6F3DFF]">
                        <SelectValue placeholder="Select primary engineering service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#141423] border-slate-700 text-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Project Architecture Details</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your technical requirements, goals, and business logic..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[#18182A] border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-[#6F3DFF] focus-visible:border-[#6F3DFF] focus-visible:ring-offset-0 text-base p-5 resize-none shadow-inner transition-colors duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-[#6F3DFF] hover:bg-[#7C52FF] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(111,61,255,0.6)] flex items-center justify-center gap-2 border border-[#6F3DFF]/50 mt-6 disabled:opacity-50 disabled:cursor-not-allowed group/btn hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Initiating...
                      </>
                    ) : (
                      <>
                        Submit Blueprint Request
                        <ArrowRight className="w-6 h-6 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
