export type WorkExperience = {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};
export type Education = {
  id: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
  resume: number;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  resume: number;
};
export type Skill = {
  id: number;
  namme: string;
  proficiency: string;
  resume: number;
};

export type Certification = {
  id: number;
  name: string;

  issuing_organization: string;
  issue_date: string;
  expiration_date: string;
  credential_id: string;
  credential_url: string;
  resume: number;
};
export type Resume = {
  id: number; // Add this line
  title: string;
  user: number;
};
