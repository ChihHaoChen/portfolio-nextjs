import { IconType } from "react-icons";


export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}


export interface Skill {
  name: string;
  Icon: IconType;
}


export interface Experience {
  company: string;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  location: string;
  workItems: string[]
}


export interface Education {
  school: string;
  program: string;
  dateFrom: Date;
  dateTo: Date;
  location: string;
  gpa: string;
}


export interface Project {
  id: number;
  name: string;
  description: string[];
  summary: string[];
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  tech_stack: string[];
}


export type Category = 'Web' | 'Mobile'
