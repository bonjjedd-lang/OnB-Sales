export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'for-businesses'
  | 'join-onb'
  | 'contact'
  | 'case-studies'
  | 'insights';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  whatItIs: string;
  focus: string[];
  processSteps: string[];
  highlight?: string;
}

export interface BusinessInquiry {
  name: string;
  business: string;
  email: string;
  website: string;
  servicesNeeded: string[];
  currentProcess: string;
  teamSize: string;
  message: string;
}

export interface CandidateApplication {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  cvFileName?: string;
  experienceLevel: string;
  currentRole: string;
  availability: string;
  whySales: string;
  whyONB: string;
  skillDeveloping: string;
  voiceNoteSummary?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  interest: 'working' | 'joining' | 'partnership' | 'general';
  message: string;
}
