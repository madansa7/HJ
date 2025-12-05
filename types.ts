export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
  name: string;
}

export interface SkillMetric {
  subject: string;
  A: number; // Proficiency score for chart
  fullMark: number;
}
