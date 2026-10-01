import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mic,
  UploadCloud,
  FileCheck,
  AlertCircle,
  Check,
  Shield,
  UserCheck,
  TrendingUp,
  Award,
} from 'lucide-react';
import { PageId, CandidateApplication } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface JoinONBPageProps {
  onNavigate: (page: PageId) => void;
}

export const JoinONBPage: React.FC<JoinONBPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<CandidateApplication>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    cvFileName: '',
    experienceLevel: '',
    currentRole: '',
    availability: '',
    whySales: '',
    whyONB: '',
    skillDeveloping: '',
    voiceNoteSummary: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedDuration, setRecordedDuration] = useState(0);

  const whatWeLookFor = [
    { title: 'Communication', desc: 'Clarity of thought, active listening, and articulated speech.' },
    { title: 'Reliability', desc: 'Showing up on time, following through on commitments, and honoring rhythms.' },
    { title: 'Coachability', desc: 'Openness to objective criticism, adjusting habits, and embracing feedback.' },
    { title: 'Professionalism', desc: 'Polished demeanour, respectful conduct, and integrity in dialogue.' },
    { title: 'Consistency', desc: 'Executing the process daily even when immediate results vary.' },
    { title: 'Willingness to Learn', desc: 'Curiosity to study conversation psychology, industry nuances, and objection patterns.' },
    { title: 'Sales Curiosity', desc: 'A natural drive to understand why buyers hesitate and what motivates decisions.' },
    { title: 'Accountability', desc: 'Owning both successes and setbacks without making excuses.' },
  ];

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFileName: e.target.files[0].name });
    }
  };

  const handleSimulateRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setFormData({
        ...formData,
        voiceNoteSummary: 'Voice introduction recorded (0:45) - Candidate introduction and communication test.',
      });
    } else {
      setIsRecording(true);
      setRecordedDuration(0);
      const timer = setInterval(() => {
        setRecordedDuration((prev) => {
          if (prev >= 45) {
            clearInterval(timer);
            setIsRecording(false);
            setFormData((f) => ({
              ...f,
              voiceNoteSummary: 'Voice introduction recorded (0:45) - Complete.',
            }));
            return 45;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.location.trim()) errors.location = 'City / Country location is required';
    if (!formData.experienceLevel) errors.experienceLevel = 'Please indicate your sales experience level';
    if (!formData.whySales.trim()) errors.whySales = 'Please explain why you want to develop in sales';
    if (!formData.whyONB.trim()) errors.whyONB = 'Please let us know why ONB appeals to you';
    if (!formData.skillDeveloping.trim()) errors.skillDeveloping = 'Please state which skill you are developing';

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
      }, 700);
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
            SALES TALENT DEVELOPMENT
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            BUILD YOUR SALES CAREER WITH ONB.
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed max-w-3xl">
            ONB is building a remote sales team for people who want to develop practical sales
            skills, gain experience, improve their communication, and grow within a structured team
            environment.
          </p>

          {/* Mandatory Disclaimer Callout */}
          <div className="p-4 sm:p-5 bg-[#0D111A] border-l-4 border-[#3B68A8] rounded-r-xl max-w-2xl text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            <span className="text-white font-bold block mb-1">
              Important Candidate Notice:
            </span>
            Joining the application process does not guarantee employment, income, or placement.
            ONB is an emerging sales firm focused on real talent cultivation, structured practice,
            and performance standards for motivated communicators.
          </div>

          <div className="pt-2">
            <a
              href="#application-form"
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/25 cursor-pointer"
            >
              <span>SUBMIT CANDIDATE APPLICATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT ONB LOOKS FOR (8 TRAITS)
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              SELECTION CRITERIA
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              WHAT ONB LOOKS FOR
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
              We evaluate character, coachability, and work ethic above hollow resume bullet points.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeLookFor.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#0D111A] border border-[#1E293B] hover:border-[#3B68A8]/50 rounded-2xl p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-3">
                    <span>0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#3B68A8] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          THE ONB DEVELOPMENT PATH
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              SKILL PROGRESSION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              THE ONB DEVELOPMENT PATH
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
              A continuous loop designed to bridge foundational principles with practical sales
              mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* LEARN */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-7 space-y-4">
              <div className="text-xs font-mono text-[#3B68A8] font-bold">STAGE 01</div>
              <h3 className="text-2xl font-black text-white uppercase">LEARN</h3>
              <p className="text-sm text-white font-medium">Understand sales fundamentals.</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Study prospect psychology, tone modulation, discovery structures, and the difference
                between true qualification versus superficial chatter.
              </p>
            </div>

            {/* PRACTICE */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-7 space-y-4">
              <div className="text-xs font-mono text-[#3B68A8] font-bold">STAGE 02</div>
              <h3 className="text-2xl font-black text-white uppercase">PRACTICE</h3>
              <p className="text-sm text-white font-medium">
                Practice conversations, qualification, objections, and follow-up.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Engage in intensive peer drills, roleplaying scenarios, and objection breakdowns to
                build instinctive confidence.
              </p>
            </div>

            {/* PERFORM */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-7 space-y-4">
              <div className="text-xs font-mono text-[#3B68A8] font-bold">STAGE 03</div>
              <h3 className="text-2xl font-black text-white uppercase">PERFORM</h3>
              <p className="text-sm text-white font-medium">
                Apply the skills in real sales environments where appropriate.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Step into live conversation cadences with real market prospects under clear
                guidance, daily check-ins, and activity benchmarks.
              </p>
            </div>

            {/* GROW */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-7 space-y-4">
              <div className="text-xs font-mono text-[#3B68A8] font-bold">STAGE 04</div>
              <h3 className="text-2xl font-black text-white uppercase">GROW</h3>
              <p className="text-sm text-white font-medium">
                Develop professionally through feedback, accountability, and experience.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Receive structured reviews from team leads, measure real execution consistency, and
                advance in professional responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          APPLICATION FORM
          ======================================================== */}
      <section id="application-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
              CANDIDATE INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              APPLICATION FORM
            </h2>
            <p className="text-sm text-[#94A3B8]">
              We value honest answers over rehearsed buzzwords. Tell us where you are in your
              journey.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0D111A] border border-[#3B68A8]/50 rounded-2xl p-8 sm:p-12 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#3B68A8]/10 border border-[#3B68A8] flex items-center justify-center text-[#3B68A8] mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Application Submitted
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>.
                  Your candidate application has been recorded for review by Samuel and the ONB team.
                </p>
              </div>

              <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl text-left max-w-lg mx-auto text-xs text-[#94A3B8] space-y-2">
                <div className="flex justify-between border-b border-[#1E293B] pb-1.5">
                  <span className="text-[#64748B]">Applicant:</span>
                  <span className="text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E293B] pb-1.5">
                  <span className="text-[#64748B]">Contact Email:</span>
                  <span className="text-white font-mono">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E293B] pb-1.5">
                  <span className="text-[#64748B]">Experience Tier:</span>
                  <span className="text-white">{formData.experienceLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Review Process:</span>
                  <span className="text-[#3B68A8] font-semibold">
                    Reviewed against current onboarding slots
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                * As a reminder, submitting an application does not guarantee employment or income.
                We evaluate candidates based on communication and coachability.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    location: '',
                    linkedinUrl: '',
                    cvFileName: '',
                    experienceLevel: '',
                    currentRole: '',
                    availability: '',
                    whySales: '',
                    whyONB: '',
                    skillDeveloping: '',
                    voiceNoteSummary: '',
                  });
                }}
                className="text-xs font-mono text-[#94A3B8] hover:text-white uppercase tracking-wider underline cursor-pointer"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 space-y-8"
              noValidate
            >
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jordan Miller"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@example.com"
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

              {/* Phone, Location, LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Current Location (City / Country) *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. London, UK / Austin, TX"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.location && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* CV File Upload Simulation */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                  CV / Resume Upload (PDF / DOCX)
                </label>
                <div className="relative border-2 border-dashed border-[#1E293B] hover:border-[#3B68A8] rounded-xl p-6 text-center transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleSimulatedFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-2">
                    <UploadCloud className="w-8 h-8 text-[#3B68A8] mx-auto" />
                    <p className="text-xs text-[#CBD5E1]">
                      {formData.cvFileName ? (
                        <span className="text-white font-medium flex items-center justify-center gap-2">
                          <FileCheck className="w-4 h-4 text-emerald-400" />
                          Attached: {formData.cvFileName}
                        </span>
                      ) : (
                        <>Click or drag file to attach your CV</>
                      )}
                    </p>
                    <p className="text-[11px] text-[#64748B]">Max file size: 10MB</p>
                  </div>
                </div>
              </div>

              {/* Experience and Role */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Previous Sales Experience *
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="">Select experience level...</option>
                    <option value="none">No formal sales experience (Beginner)</option>
                    <option value="0-6">0 - 6 months</option>
                    <option value="6-12">6 - 12 months</option>
                    <option value="1-2">1 - 2 years</option>
                    <option value="2+">2+ years</option>
                  </select>
                  {formErrors.experienceLevel && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.experienceLevel}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Current Role / Occupation
                  </label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    placeholder="e.g. Student / Retail / SDR"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Weekly Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="">Select hours...</option>
                    <option value="10-20">Part-Time (10 - 20 hrs/week)</option>
                    <option value="20-35">Extended (20 - 35 hrs/week)</option>
                    <option value="full-time">Full-Time (40 hrs/week)</option>
                  </select>
                </div>
              </div>

              {/* Motivational Questions */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Why do you want to develop in sales? *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.whySales}
                    onChange={(e) => setFormData({ ...formData, whySales: e.target.value })}
                    placeholder="What draws you to sales development and communication?"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl p-4 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.whySales && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.whySales}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    Why ONB? *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.whyONB}
                    onChange={(e) => setFormData({ ...formData, whyONB: e.target.value })}
                    placeholder="Why do you want to develop your skills specifically within ONB's structured remote team model?"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl p-4 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.whyONB && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.whyONB}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2">
                    What sales skill are you currently developing? *
                  </label>
                  <input
                    type="text"
                    value={formData.skillDeveloping}
                    onChange={(e) => setFormData({ ...formData, skillDeveloping: e.target.value })}
                    placeholder="e.g. Handling price objections / Asking better qualification questions / Tone control"
                    className="w-full bg-[#080B11] border border-[#1E293B] focus:border-[#3B68A8] rounded-xl px-4 py-3 text-sm text-white placeholder-[#475569] outline-none transition-colors"
                  />
                  {formErrors.skillDeveloping && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.skillDeveloping}
                    </p>
                  )}
                </div>
              </div>

              {/* Short Voice Introduction Feature */}
              <div className="p-5 bg-[#080B11] border border-[#1E293B] rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold block">
                      Short Voice Introduction (Optional)
                    </span>
                    <p className="text-xs text-[#94A3B8]">
                      Sales is verbal. Share a 30-45 second spoken introduction about who you are and why
                      you are interested in sales.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSimulateRecording}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isRecording
                        ? 'bg-red-600 text-white animate-pulse'
                        : formData.voiceNoteSummary
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-[#3B68A8] text-white hover:bg-[#2F578C]'
                    }`}
                  >
                    <Mic className="w-4 h-4" />
                    <span>
                      {isRecording
                        ? `Recording (${recordedDuration}s)... Click to Stop`
                        : formData.voiceNoteSummary
                        ? 'Recorded (Click to redo)'
                        : 'Record Introduction'}
                    </span>
                  </button>
                </div>
                {formData.voiceNoteSummary && (
                  <p className="text-xs text-emerald-400 font-mono">
                    ✓ {formData.voiceNoteSummary}
                  </p>
                )}
              </div>

              {/* Legal confirmation */}
              <div className="text-xs text-[#64748B] leading-relaxed">
                By submitting this form, you acknowledge that this is an application for sales talent
                development and does not guarantee employment, income, or contracted placement.
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/25 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>{isSubmitting ? 'SUBMITTING APPLICATION...' : 'SUBMIT CANDIDATE APPLICATION'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
