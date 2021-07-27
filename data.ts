import { RiComputerLine } from "react-icons/ri"
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi, AiFillApple, AiOutlineCloudServer } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import { Education, Experience, Project, Service, Skill } from "./types";

export const services: Service[] = [
  {
    title: "Frontend Development",
    about: "I develop beautiful and scalable SPA web apps with <b>HTML</b>, <b>CSS</b>, <b>Vue.js</b> and <b>React.js</b>, also use <b>Next.js</b> for server-side-rendering and SEO.",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about: "I can employ both relational and non-relation database for either the monolithic or recent micro-services architectures.",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I develop robust REST and GraphQL API with <b>Node.js</b> and <b>Golang</b>.",
    Icon: AiOutlineApi,
  },
  {
    title: "DevOps",
    about: "Knowing the procedure for deployment from simple front-end apps to those with complex micro-services architecutres, including CI/CD.",
    Icon: AiOutlineCloudServer,
  },
  {
    title: "Mobile Apps",
    about: "I enjoy coding iOS apps with <b>UIKit</b>, <b>SwiftUI</b> and <b>Combine</b>.",
    Icon: AiFillApple,
  },
  {
    title: "UI/UX Design",
    about: "Currently learning how to use <b>Figma</b> for developing the UI/UX for prototypes.",
    Icon: AiOutlineAntDesign,
  },
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


export const projects: Project[] = [
  {
    id: 0,
    name: 'Candlestick Charts',
    description: [
      'A web app to illustrate candlestick charts of stocks. This web app uses React.js for responsive interaction and d3.js for charts. Typescript, a superset of JavaScript, is employed during development.',
      'This mini-app allows users to quickly glimpse the stock price of their interest, and also activates zoom and pan features by scrolling down over the chart.'
    ],
    summary: [
      'React.js and d3.js for front-end;',
      'Typescript for development;',
    ],
    image_path: '/images/projects/CandlestickChart.png',
    deployed_url: 'https://candlestick-chart.vercel.app/',
    github_url: 'https://github.com/ChihHaoChen/CandlestickChart',
    category: ['Web'],
    tech_stack: ['React.js', 'd3.js', 'Typescript']
  },
  {
    id: 1,
    name: 'MyEscrow',
    description: [
      'A web app for real estates escrow platform. The front-end is developed with React.js for responsive interaction and Next.js for multi-language support. The UI/UX is based on the popular content management system - Monday.com.',
      'Due to scalability considerations, a micro-services architecture is employed to separate authentication and content management. Therefore, the database sets for users and tasks are separated for easier management. Furthermore, to support complicated operations of nested objects in table, GraphQL is used for API endpoint.',
      'The whole system has been deployed in Microsoft Azure with CI/CD support.'
    ],
    summary: [
      'React.js and Next.js for front-end;',
      'Node.js with Typescript for back-end development;',
  'Employing both non-relational - MongoDB and relational database - PostgreSQL;',
      'Micro-serverices as the backbone of the system with GraphQL API;',
      'Deployed in Cloud, and supporting CI/CD.'
    ],
    image_path: '/images/projects/myEscrow.png',
    deployed_url: 'http://20.197.110.141/',
    github_url: 'na',
    category: ['Web'],
    tech_stack: ['React.js', 'Next.js', 'Node.js', 'Typescript', 'PostgreSQL', 'Microsoft Azure', 'Kubernetes']
  },
  {
    id: 2,
    name: 'My Portfolio - 2020 version',
    description: [
      "This project is developed mainly with Vue.js. The generated static HTML files are deployed in GitHub. My initial purpose in building this website with JS is to separate the front-end development from the back-end database. Thus anyone can reuse my repository to build up their portfolio website by configuring their API calls and populating their back-end database.", 
      "The database is in JSON format deployed in Firebase, while all the images and PDF files are stored in Amazon S3. Once the API data gets fetched, Vuex, a well-known framework for state management, is exploited to mutate the state variables associated with the database data. The Nuxt framework has been embedded in this repository for SPA (Single Page Application). Finally, as for the UI components, Vuetify is used for the material design of this portfolio side-project. This website is also compatible with popular browsers in mobile devices."
    ],
    summary: [
      'Using Vue.js for front-end;',
      'Employing Google Firebase to store JSON format data;',
      'Storing the associated files, including PDF files and images on AWS S3;',
      'Nuxt.js for SPA, and Vuex to manage the associated states variables.'
    ],
    image_path: '/images/projects/portfolioVue.jpg',
    deployed_url: 'https://chihhaochen.github.io/',
    github_url: 'https://chihhaochen.github.io/portfolioVue/',
    category: ['Web'],
    tech_stack: ['Vue.js', 'Google Firebase', 'AWS S3']
  },
  {
    id: 3,
    name: 'News Client',
    description: [
      "The original purpose of this project is to extend the previous work on a mockup of Apple abpp Store. This App makes API requests from News API that offers news articles and headlines from over 30000 sources. Therefore the reason I chose this topic is that not only can I hone my skills in iOS application development but keep a close eye to the things around the world.",
      "Later I found that even though there are quite many Apps offering News service, I still do not see a good enough App to read news articles in different languages. Therefore I intend to continue this project to make it a news client App for polyglots so that they can read and save the articles in their journeys of learning languages."
    ],
    summary: [
      'Whole layout is made with a programmatical auto-layout without the interface builder (storyboard);',
      'API requests and asynchronous fetch from News API;',
      'Using programmatical auto-layout to animate UI components and associated controllers;',
      'Pagination when fetching data;',
      'Supporting pulling to refresh data;'
    ],
    image_path: '/images/projects/NewsClientImage.jpg',
    deployed_url: 'na',
    github_url: 'https://chihhaochen.github.io/NewsClient/',
    category: ['Mobile'],
    tech_stack: ['Swift', 'Google Firebase', 'Realm', 'UIKit']
  },
  {
    id: 4,
    name: 'TrainingBuddy Back-End',
    description: [
      "This back-end API was deployed in DigitalOcean and could accessed through API requests. It was built based on MongoDB, a non-SQL database, with Node.js.",
      "The authentication process covers Facebook, LINE, and email authentication presently. As for the email authentication, the developed back-end will send the user a token for users to perform operations associated with authorization.",
      "Socket-io is employed to allow users to chat with each other once they get enrolled in the same events. Besides, the service of Amazon S3 is exploited to upload images/pictures. The back-end server does not store the photos to protect users' privacy.",
      "Users and trainees can search the database either with the names of users or the names of events. Furthermore, users can review activities and trainers. Then a recommended list of the related activities can be offered to users."
    ],
    summary: [
      'Authentications with Facebook, LINE, and emails are supported;',
      'Non-SQL database MongoDB is employed for the database of users and events;',
      'Users can only change or remove the activities created by themselves;',
      'Chat rooms are available for the enrolled users in the same activities;',
      'AWS S3 service is employed into the back-end for storing images for privacy.'
    ],
    image_path: '/images/projects/tbApiFlowChart.png',
    deployed_url: 'na',
    github_url: 'https://chihhaochen.github.io/Learch_REST_API/',
    category: ['Web'],
    tech_stack: ['Node.js', 'MongoDB', 'Socket-io', 'AWS S3']
  }
]