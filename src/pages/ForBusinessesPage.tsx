import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Send,
  Building2,
  Users,
  Target,
  FileText,
  AlertCircle,
  Check,
} from 'lucide-react';
import { PageId, BusinessInquiry } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface ForBusinessesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ForBusinessesPage: React.FC<ForBusinessesPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<BusinessInquiry>({
    name: '',
    business: '',
    email: '',
    website: '',
    servicesNeeded: [],
    currentProcess: '',
    teamSize: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'Sales Development',
    'Appointment Setting',
    'Prospect Follow-Up',
    'Prospect Qualification',
    'Remote Sales Team Development',
    'Sales Talent Development',
    'Business Development Support',
  ];

  const handleToggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.business.trim()) errors.business = 'Company name is required';
    if (!formData.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid work email address';
    }
    if (formData.servicesNeeded.length === 0) {
      errors.services = 'Please select at least one area of support';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide a brief description of your situation';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate real request processing
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-1/4" size={600} opacity={0.16} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            SOLUTIONS FOR BUSINESSES
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            YOUR SALES PROCESS NEEDS THE RIGHT PEOPLE BEHIND IT.
          </h1>

          <div className="space-y-4 text-base sm:text-xl text-[#CBD5E1] leading-relaxed max-w-3xl">
            <p className="font-semibold text-white">
              A sales process can exist on paper and still fail in execution.
            </p>
            <p>
              The people handling prospect conversations, follow-ups, qualification, and appointment
              setting matter.
            </p>
            <p className="text-[#94A3B8]">
              ONB focuses on building and developing the people and processes that sit within that
              front end of sales.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/25 cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT WE CAN SUPPORT
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              SCOPE OF ENGAGEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              WHAT WE CAN SUPPORT
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
              Deploy targeted support across seven critical front-end business development
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sales Development',
                desc: 'Establishing the outbound rhythm and prospect cadences that maintain pipeline consistency.',
              },
              {
                title: 'Appointment Setting',
                desc: 'Transitioning qualified, interested conversations into scheduled sales discussions with your closers.',
              },
              {
                title: 'Prospect Follow-Up',
                desc: 'Maintaining momentum over multi-week sales cycles so warm interest never slips into silence.',
              },
              {
                title: 'Prospect Qualification',
                desc: 'Vetting fit, business readiness, and timing early to preserve executive sales bandwidth.',
              },
              {
                title: 'Remote Sales Team Development',
                desc: 'Structuring, onboarding, and managing distributed sales reps with daily standups and quality audits.',
              },
              {
                title: 'Sales Talent Development',
                desc: 'Continuous coaching, objection drills, and skill development for front-line sales representatives.',
              },
              {
                title: 'Business Development Support',
                desc: 'Aligning front-end messaging, pipeline definitions, and SDR-to-AE workflow handoffs.',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-[#0D111A] border border-[#1E293B] rounded-2xl flex flex-col justify-between hover:border-[#3B68A8]/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span>0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ENGAGEMENT PHILOSOPHY & ETHICS
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B]">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 bg-[#080B11] border border-[#1E293B] rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#3B68A8] uppercase font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>TRANSPARENT COMMITMENT</span>
            </div>
            <h3 className="text-xl font-bold text-white uppercase">
              Disciplined Execution, Not Fabricated Guarantees
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              We do not promise unrealistic instant closes, overnight revenue multipliers, or
              miraculous silver bullets. Sales development is a function of clear targeting, genuine
              human dialogue, persistent follow-up, and continuous operational review. That is what
              we build and execute alongside our clients.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          BUSINESS CONSULTATION FORM
          ======================================================== */}
      <section id="inquiry-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
              CONSULTATION INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              START A CONVERSATION
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Share your current sales development setup and where you need structured execution
              support.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0D111A] border border-[#3B68A8]/50 rounded-2xl p-8 sm:p-12 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#3B68A8]/10 border border-[#3B68A8] flex items-center justify-center text-[#3B68A8] mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. We
                  have received the consultation details for{' '}
                  <span className="text-white font-semibold">{formData.business}</span>.
                </p>
              </div>

              <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl text-left max-w-lg mx-auto text-xs text-[#94A3B8] space-y-2">
                <div className="flex justify-between border-b border-[#1E293B] pb-1.5">
                  <span className="text-[#64748B]">Work Email:</span>
                  <span className="text-white font-mono">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E293B] pb-1.5">
                  <span className="text-[#64748B]">Selected Services:</span>
                  <span className="text-white">{formData.servicesNeeded.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Next Step:</span>
                  <span className="text-[#3B68A8] font-semibold">
                    Direct founder review & initial reply
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    business: '',
                    email: '',
                    website: '',
                    servicesNeeded: [],
                    currentProcess: '',
                    teamSize: '',
                    message: '',
                  });
                }}
                className="text-xs font-mono text-[#94A3B8] hover:text-white uppercase tracking-wider underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 space-y-8"
              noValidate
            >
              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="e.g. Horizon Labs"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.business && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.business}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Company Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://company.com"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* What do you need help with? */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-3">
                  What do you need help with? (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableServices.map((svc) => {
                    const isSelected = formData.servicesNeeded.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => handleToggleService(svc)}
                        className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#3B68A8]/15 text-white border border-[#3B68A8]'
                            : 'bg-[#080B11] text-[#94A3B8] border border-[#1E293B] hover:border-[#334155]'
                        }`}
                      >
                        <span>{svc}</span>
                        {isSelected ? (
                          <Check className="w-4 h-4 text-[#3B68A8]" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-[#334155]" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {formErrors.services && (
                  <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {formErrors.services}
                  </p>
                )}
              </div>

              {/* Current sales process & team size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Current Sales Process
                  </label>
                  <select
                    value={formData.currentProcess}
                    onChange={(e) => setFormData({ ...formData, currentProcess: e.target.value })}
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="">Select current state...</option>
                    <option value="none">No formalized sales process yet</option>
                    <option value="founder-led">Founder/Executive handles all sales</option>
                    <option value="early-reps">1-2 sales reps, needs structured cadence</option>
                    <option value="rebuilding">Existing outbound needs complete revamp</option>
                    <option value="scaling">Established sales team, need dedicated front-end SDR layer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="">Select company size...</option>
                    <option value="1-5">1 - 5 team members</option>
                    <option value="6-20">6 - 20 team members</option>
                    <option value="21-50">21 - 50 team members</option>
                    <option value="51-200">51 - 200 team members</option>
                    <option value="200+">200+ team members</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                  Tell us about your offer, target audience, or current sales challenge *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What does your company offer, who are your target accounts, and where is the friction in your current front-end sales execution?"
                  className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl p-4 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                />
                {formErrors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {formErrors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT BUSINESS INQUIRY'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
