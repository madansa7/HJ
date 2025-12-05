import { ExperienceItem, EducationItem, SkillMetric, CertificationItem } from './types';

export const PROFILE = {
  name: "Harish Jaipal",
  tagline: "English Pronunciation Coach | Leadership Coach | Training Consultant",
  location: "New Zealand",
  email: "harish.organ@gmail.com",
  phone: "+64226788712",
  linkedin: "www.linkedin.com/in/harish-jaipal-35a896b",
  summary: "Building organisational strategy for undertaking Development of all employees. With proficiency in training research & development of contents, counselling & mentoring. Proven ability to provide a high level of Customer Service surpassing market standards. Expert in conducting Leadership Programs, TTT Programs, Employee Development Interventions, with deep understanding of quality management in a services environment. Dedicated to transforming lives and empowering people to achieve their desired success.",
};

export const TOP_SKILLS_DATA: SkillMetric[] = [
  { subject: 'Leadership Coach', A: 95, fullMark: 100 },
  { subject: 'Training & Dev', A: 98, fullMark: 100 },
  { subject: 'Process Mgmt', A: 85, fullMark: 100 },
  { subject: 'Communication', A: 95, fullMark: 100 },
  { subject: 'Strategy', A: 90, fullMark: 100 },
  { subject: 'Mentoring', A: 92, fullMark: 100 },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "TTT Certification (Train The Trainer) - AMA" },
  { name: "Accent Neutralization & Pronunciation Training" },
];

export const EDUCATION: EducationItem[] = [
  // No education data provided in the PDF pages 1-3
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Achordix Infotech",
    role: "Customer Service Specialist",
    period: "April 2023 - August 2025",
    duration: "2 years 5 months",
    location: "Ahmedabad, Gujarat, India",
    description: [
      "Responded to multi-channel customer queries (emails, phone, and chat).",
      "Resolved technical and service issues while maintaining professional communication.",
      "Recorded and managed customer interactions for continuous service improvements."
    ]
  },
  {
    company: "Schwayam",
    role: "Transformation Expert",
    period: "December 2017 - March 2023",
    duration: "5 years 4 months",
    location: "Ahmedabad Area, India",
    description: [
      "Transformational expert combining multiple platforms to guide and empower people.",
      "Delivered focused coaching sessions for IIM Ahmedabad, Udaan (NGO), Western Railway, Navneet Publication, and more.",
      "Helped more than 10,000 people to overcome challenges and achieve desired success.",
      "Designed training to inspire and motivate people to embrace their inherent brilliance.",
      "Mission to transform lives of 50,000 people in the next 5 years."
    ]
  },
  {
    company: "Ascendum KPS (formerly iCall India)",
    role: "Manager - Learning and Development",
    period: "November 2016 - November 2017",
    duration: "1 year 1 month",
    location: "Ahmedabad Area, India",
    description: [
      "Conducted TTT workshop (Train the Trainer) for junior Trainers.",
      "Established an Independent L&D department.",
      "Oversaw all training intervention’s design and execution.",
      "Liaised with transition manager & Operations in implementation and evaluation of training programs.",
      "Built organizational strategy for undertaking development of all employees at all levels."
    ]
  },
  {
    company: "Advantmed",
    role: "Manager Training and Development",
    period: "August 2015 - October 2016",
    duration: "1 year 3 months",
    location: "Ahmedabad Area, India",
    description: [
      "Establishment of a separate T&D department.",
      "Built organizational strategy for undertaking development of all employees.",
      "Conducted TTT workshop for junior Trainers.",
      "Designed and conducted organization wide TNI /TNA.",
      "Oversaw all training intervention’s design and execution."
    ]
  },
  {
    company: "Advantmed",
    role: "Sr. Trainer",
    period: "June 2013 - August 2015",
    duration: "2 years 3 months",
    location: "Ahmedabad Area, India",
    description: [
      "Designed product/process training programs for all internal processes.",
      "Conducted OD (Organizational Development) interventions and workshops on leadership.",
      "Designed CEP (Continuous Education Programs) for conducting non-technical programs.",
      "Contributed to Process Excellence: BI, Common Portal, ISO Audits, Six Sigma, and PM Projects."
    ]
  },
  {
    company: "Azure Knowledge Corporation",
    role: "Trainer for Market Research",
    period: "March 2011 - June 2013",
    duration: "2 years 4 months",
    location: "India",
    description: []
  },
  {
    company: "Etech Texas",
    role: "Trainer",
    period: "January 2008 - June 2010",
    duration: "2 years 6 months",
    location: "India",
    description: []
  },
  {
    company: "iCall India Limited",
    role: "Trainer",
    period: "November 2006 - January 2008",
    duration: "1 year 3 months",
    location: "India",
    description: []
  }
];