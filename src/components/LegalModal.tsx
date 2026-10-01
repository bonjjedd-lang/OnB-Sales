import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-[#94A3B8]">ONB Sales Firm · Effective 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At ONB Sales Firm (&quot;ONB&quot;), we respect your privacy. This policy outlines how we handle
                information submitted through our business consultation and sales talent application forms.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Information Collected</h4>
              <p>
                We collect personal and professional details provided voluntarily when you submit an inquiry,
                such as name, business email, company details, or candidate qualifications (e.g. LinkedIn profiles
                and sales background). We do not collect unnecessary sensitive personal data.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Use of Information</h4>
              <p>
                Information provided is solely used to evaluate potential client fit or candidate suitability for
                ONB remote sales team development. We never sell, rent, or distribute candidate or client data to
                third-party brokers.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Data Security & Inquiries</h4>
              <p>
                All data submitted is handled with strict confidentiality. If you have questions regarding your
                information or wish to withdraw an application, contact ONB via [ONB BUSINESS EMAIL].
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to ONB Sales Firm. By accessing this website or submitting inquiries, you acknowledge
                the terms outlined below.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Nature of Services</h4>
              <p>
                ONB provides sales development, remote sales team building, and sales talent training. We do not
                promise or guarantee specific revenue outcomes, deal closures, or conversion metrics. All sales
                performance depends on joint execution, market factors, and customer readiness.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Candidate Submissions</h4>
              <p>
                Submitting an application to Join ONB constitutes an expression of interest in sales talent
                development. It does not constitute an offer of employment, guaranteed placement, or guaranteed
                income.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">Intellectual Property</h4>
              <p>
                The ONB brand, logos, and proprietary training structures remain the intellectual property of ONB
                Sales Firm.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#1E293B] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1E293B] hover:bg-[#334155] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
