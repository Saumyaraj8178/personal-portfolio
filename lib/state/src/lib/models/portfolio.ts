import { Experience } from './experience';
import { TechnicalSkill } from './technical-skill';
import { Education } from './education';
import { Project } from './project';
import { Activity } from './activity';

export interface Portfolio {
  id: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  fullName: string;
  experiences: Experience[];
  technicalSkills: TechnicalSkill[];
  educations: Education[];
  projects: Project[];
  otherWorkExperiences: Experience[];
  activities: Activity[];
}
