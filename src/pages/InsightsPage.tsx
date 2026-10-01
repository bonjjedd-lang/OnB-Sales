import React, { useState } from 'react';
import { BookOpen, ArrowRight, Target, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const articles = [
    {
      id: 'why-qualification-beats-volume',
      title: 'Why Prospect Qualification Protects Your Sales Economics',
      date: 'Published 2026',
      readTime: '4 min read',
      summary:
        'Filling a closing calendar with unvetted prospects creates an illusion of velocity while draining your most expensive revenue resources.',
      content: [
        'In the rush to show activity, many sales teams conflate booked meetings with productive pipeline. An unqualified meeting is worse than no meeting: it consumes 30-45 minutes of closer preparation, interrupts focused work, and delivers zero commercial value.',
        'At ONB, qualification begins with understanding fit before ever proposing a calendar invite. Does the prospect match the ICP criteria? Is there an active business problem? Does the stakeholder have the context to evaluate a solution?',
        'When sales development representatives take pride in filtering out poor-fit opportunities, closers show up with conviction and closing ratios normalize naturally.'
      ],
    },
    {
      id: 'the-lost-art-of-the-follow-up',
      title: 'The Anatomy of a Disciplined Multi-Touch Follow-Up Cadence',
      date: 'Published 2026',
      readTime: '5 min read',
      summary:
        'Most prospective buyers do not say no; they simply get busy. Here is how structured cadence prevents opportunities from slipping into the void.',
      content: [
        'The vast majority of sales conversations end after one or two unanswered messages. Reps assume silence equals disinterest, whereas in commercial business, silence almost always equals distraction or competing priorities.',
        'A disciplined follow-up process differs fundamentally from nagging. Every subsequent touchpoint must provide a fresh angle, relevant context, or a courteous check on timing.',
        'By spacing multi-channel touchpoints over 14 to 30 days and anchoring each message in previous dialogue, sales teams consistently recover high-value deals that competitors abandon.'
      ],
    },
    {
      id: 'remote-sales-talent-accountability',
      title: 'Building High-Accountability Remote Sales Development Teams',
      date: 'Published 2026',
      readTime: '6 min read',
      summary:
        'Remote sales teams fail without clear rhythms. How daily standups, review loops, and psychological safety build consistent performers.',
      content: [
        'Managing remote sales professionals is not about invasive keystroke monitoring. It is about establishing clear operational expectations and holding team members accountable to execution standards.',
        'When representatives know exactly how their day is structured—from morning pipeline prep and prospect research to focused outreach blocks and afternoon objection debriefs—anxiety turns into focus.',
        'Combine this structured workflow with regular coaching and peer roleplays, and you cultivate self-driven professionals who take genuine pride in their craft.'
      ],
    },
  ];

  const [activeArticle, setActiveArticle] = useState(articles[0]);

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-1/4" size={600} opacity={0.15} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            SALES PERSPECTIVES
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            ONB SALES INSIGHTS.
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl">
            Thoughtful essays and operational observations on front-end sales development, prospect
            qualification, and building remote sales talent.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Article List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#64748B] font-semibold mb-2">
                INDEX OF ARTICLES
              </h3>
              {articles.map((art) => {
                const isSelected = activeArticle.id === art.id;
                return (
                  <div
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0D111A] border-[#3B68A8] shadow-lg shadow-[#3B68A8]/10'
                        : 'bg-[#0A0E17] border-[#1E293B] hover:border-[#334155]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono mb-2">
                      <span>{art.date}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                      {art.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Full Article View */}
            <div className="lg:col-span-7 bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 space-y-6">
              <div className="border-b border-[#1E293B] pb-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#3B68A8] font-mono font-semibold uppercase">
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>
                <p className="text-sm text-[#CBD5E1] font-medium italic">
                  {activeArticle.summary}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {activeArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B] uppercase">
                  ONB Sales Firm Editorial
                </span>
                <button
                  onClick={() => onNavigate('for-businesses')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B68A8] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Discuss Your Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
