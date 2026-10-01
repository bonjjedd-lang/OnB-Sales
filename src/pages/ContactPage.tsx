import React, { useState } from 'react';
import {
  Send,
  Mail,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Check,
  AlertCircle,
  HelpCircle,
  Briefcase,
  UserPlus,
} from 'lucide-react';
import { PageId, ContactMessage } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    company: '',
    interest: 'working',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please include a message';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-10" size={600} opacity={0.16} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            DIRECT CONTACT
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            LET&apos;S TALK SALES.
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl">
            Whether you&apos;re looking to strengthen your sales development process or you&apos;re interested in
            building your sales career, start a conversation with ONB.
          </p>
        </div>
      </section>

      {/* ========================================================
          CONTACT FORM & DETAILS GRID
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct channels & honest placeholders */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold pb-2 border-b border-[#1E293B]">
                  OFFICIAL CORRESPONDENCE
                </h3>

                {/* Strictly marked email placeholder */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block">
                    Business Email
                  </span>
                  <div className="flex items-center gap-3 p-3.5 bg-[#080B11] border border-[#1E293B] rounded-xl text-sm font-mono text-[#3B68A8]">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>[ONB BUSINESS EMAIL]</span>
                  </div>
                  <p className="text-[11px] text-[#64748B]">
                    Primary commercial mailbox for client briefs and candidate inquiries.
                  </p>
                </div>

                {/* LinkedIn */}
                <div className="space-y-2 pt-2 border-t border-[#1E293B]">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block">
                    Professional Network
                  </span>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8] rounded-xl text-sm text-white transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-[#3B68A8]" />
                      <span>ONB Sales Firm on LinkedIn</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Direct Path Switchers */}
              <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#64748B] font-semibold">
                  LOOKING FOR SPECIFIC INTAKE?
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => onNavigate('for-businesses')}
                    className="w-full text-left p-3.5 bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8] rounded-xl flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-4 h-4 text-[#3B68A8]" />
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Business Consultation Form
                        </span>
                        <span className="text-[11px] text-[#94A3B8]">
                          Detailed scope, current process & team needs
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-white" />
                  </button>

                  <button
                    onClick={() => onNavigate('join-onb')}
                    className="w-full text-left p-3.5 bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8] rounded-xl flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <UserPlus className="w-4 h-4 text-[#3B68A8]" />
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Candidate Application Form
                        </span>
                        <span className="text-[11px] text-[#94A3B8]">
                          Apply to develop in sales with ONB
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: General Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#0D111A] border border-[#3B68A8]/50 rounded-2xl p-8 sm:p-12 text-center space-y-6">
                  <div className="w-14 h-14 rounded-full bg-[#3B68A8]/10 border border-[#3B68A8] flex items-center justify-center text-[#3B68A8] mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                      Message Sent
                    </h3>
                    <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                      Thank you for reaching out,{' '}
                      <span className="text-white font-semibold">{formData.name}</span>. Your message
                      has been logged and will be routed directly to the ONB leadership team.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        interest: 'working',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono text-[#94A3B8] hover:text-white uppercase tracking-wider underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 space-y-6"
                  noValidate
                >
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
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
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                    />
                  </div>

                  {/* I am interested in */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                      I am interested in:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'working', label: 'Working with ONB' },
                        { id: 'joining', label: 'Joining ONB' },
                        { id: 'partnership', label: 'Partnership' },
                        { id: 'general', label: 'General inquiry' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, interest: item.id as ContactMessage['interest'] })
                          }
                          className={`p-3 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            formData.interest === item.id
                              ? 'bg-[#3B68A8] text-white shadow-md'
                              : 'bg-[#080B11] text-[#94A3B8] border border-[#1E293B] hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can ONB assist with your sales development, remote team, or inquiry?"
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
                      <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
