import { RiComputerLine } from "react-icons/ri"
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'
import { Education, Experience, Service, Skill } from "./types";

export const services: Service[] = [
  {
    title: "Frontend Development",
    about: "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, <b>Vue.js</b> and <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about: "I can handle both relational and non-relation database, server, API with <b>Express</b>, <b>Apollo</b> and etc.",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I can develop robust REST and GraphQL API with <b>Node.js</b> and <b>Golang</b>.",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "I love coding.",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX Designer",
    about: "I can design a stunning user interface with <b>Figma</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Kendo Player",
    about: "I love how Kendo riches my life.",
    Icon: RiComputerLine,
  }
]


export const highlySkills: Skill[] = [
  {
    name: 'JavaScript',
    Icon: BsCircleFill
  },
  {
    name: 'Swift',
    Icon: BsCircleFill
  },
  {
    name: 'C',
    Icon: BsCircleFill
  },
  {
    name: 'Python',
    Icon: BsCircleFill
  },
  {
    name: 'TypeScript',
    Icon: BsCircleFill
  },
  {
    name: 'Go',
    Icon: BsCircleFill
  }
]


export const devSkills: Skill[] = [
  {
    name: 'Full-Stack Development',
    Icon: BsCircleFill
  },
  {
    name: 'App Development',
    Icon: BsCircleFill
  },
  {
    name: 'Micro-Services',
    Icon: BsCircleFill
  },
  {
    name: 'Docker',
    Icon: BsCircleFill
  },
  {
    name: 'Kubernetes',
    Icon: BsCircleFill
  },
  {
    name: 'MongoDB',
    Icon: BsCircleFill
  },
  {
    name: 'PostgreSQL',
    Icon: BsCircleFill
  }
]


export const experiences: Experience[] = [
  {
    company: 'MYGO',
    title: 'Full-Stack Developer',
    dateFrom: new Date('August, 2020'),
    dateTo: new Date('August, 2020'),
    location: 'Taipei, Taiwan',
    workItems: [
      'Developing a real-estate escrow repository platform;',
      'Solo-developing the front-end of the project-management engine with React.jsand Next.js;',
      'Solo-developing the GraphQL back-end API with TypeScript;',
      'Employinga micro-services architecture with Kubernetes;',
      'Introducing the automated CI/CD pipeline to the development.'
    ]
  },
  {
    company: 'McGill University',
    title: 'Postgraduate Researcher',
    dateFrom: new Date('Januaray, 2015'),
    dateTo: new Date('April, 2020'),
    location: 'Montreal, Canada',
    workItems: [
      'Proposed the concept of dynamic deflated restarting in Krylov subspace solvers;',
      'Developed novel linear solvers for solving ill-conditioned systems with an optimal balance between convergence and required memory footprint;',
      'Implemented and verified the proposed solvers with industrial aircraft bodies in the in-house code of the advanced aerodynamics group in Bombardier Aerospace for aircraft design;',
      'This work led to two published journal papers and three conference presentations.',
    ]
  },
  {
    company: 'Monkland Community Center',
    title: 'Back-End Developer',
    dateFrom: new Date('November, 2017'),
    dateTo: new Date('June, 2018'),
    location: 'Montreal, Canada',
    workItems: [
      'Developed the back-end REST API to support a community project - TrainingBuddy;',
      'Supported the front-end developer about the overall API requests and user interface;',
      'Deployed the REST API in DigitalOcean for the front-end development.'
    ]
  },
]


export const education: Education[] = [
  {
    school: 'McGill University',
    program: 'PhD in Mechanical Engineering',
    dateFrom: new Date('Januaray, 2015'),
    dateTo: new Date('April, 2020'),
    location: 'Montreal, Canada',
    gpa: '4.00/4.00'
  },
  {
    school: 'Imperial College London',
    program: 'MSc in Advanced Computational Methods for Aeronautics, Flow Management and Fluid Structure Interaction',
    dateFrom: new Date('September, 2012'),
    dateTo: new Date('September, 2013'),
    location: 'London, UK',
    gpa: '3.96/4.00'
  }
]