import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiFillApple,
  AiOutlineCloudServer,
} from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import {
  Education,
  Experience,
  Project,
  Service,
  Skill,
} from './types'

export const services: Service[] = [
  {
    title: 'Frontend Development',
    about:
      'I develop beautiful and scalable SPA web apps with <b>HTML</b>, <b>CSS</b>, <b>Vue.js</b> and <b>React.js</b>, also use <b>Next.js</b> for server-side-rendering and SEO.',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Development',
    about:
      'I can employ both relational and non-relation database for either the monolithic or recent micro-services architectures.',
    Icon: FaServer,
  },
  {
    title: 'API Development',
    about:
      'I develop robust REST and GraphQL API with <b>Node.js</b> and <b>Golang</b>.',
    Icon: AiOutlineApi,
  },
  {
    title: 'DevOps',
    about:
      'Knowing the procedure for deployment from simple front-end apps to those with complex micro-services architecutres, including CI/CD.',
    Icon: AiOutlineCloudServer,
  },
  {
    title: 'Mobile Apps',
    about:
      'I enjoy coding iOS apps with <b>UIKit</b>, <b>SwiftUI</b> and <b>Combine</b>.',
    Icon: AiFillApple,
  },
  {
    title: 'UI/UX Design',
    about:
      'Currently learning how to use <b>Figma</b> for developing the UI/UX for prototypes.',
    Icon: AiOutlineAntDesign,
  },
]

export const highlySkills: Skill[] = [
  {
    name: 'JavaScript',
    Icon: BsCircleFill,
  },
  {
    name: 'Swift',
    Icon: BsCircleFill,
  },
  {
    name: 'C',
    Icon: BsCircleFill,
  },
  {
    name: 'Python',
    Icon: BsCircleFill,
  },
  {
    name: 'TypeScript',
    Icon: BsCircleFill,
  },
  {
    name: 'Go',
    Icon: BsCircleFill,
  },
]

export const devSkills: Skill[] = [
  {
    name: 'Full-Stack Development',
    Icon: BsCircleFill,
  },
  {
    name: 'App Development',
    Icon: BsCircleFill,
  },
  {
    name: 'Micro-Services',
    Icon: BsCircleFill,
  },
  {
    name: 'Docker',
    Icon: BsCircleFill,
  },
  {
    name: 'Kubernetes',
    Icon: BsCircleFill,
  },
  {
    name: 'MongoDB',
    Icon: BsCircleFill,
  },
  {
    name: 'PostgreSQL',
    Icon: BsCircleFill,
  },
]

export const experiences: Experience[] = [
  {
    company: 'Vesta Equity',
    title: 'Senior Developer',
    dateFrom: new Date('May, 2022'),
    dateTo: new Date('Jan, 2023'),
    location: 'Remote, North America',
    workItems: [
      {
        item: 'Frontend development of its Web3 blockchain real-estates platform;',
        link: 'https://app.vestaequity.net',
      },
      {
        item: 'Integrated wallet connection to Pera and Exodus wallet based on Algorand ecosystem;',
      },
      {
        item: 'Support of backend Django infrastructure for its Web3 app;',
        link: 'https://app.vestaequity.net',
      },
      {
        item: 'Support of its marketing campaign with its CMS system in Hubspot.',
        link: 'https://vestaequity.net/',
      },
    ],
  },
  {
    company: 'Cloud Interactive',
    title: 'Tech Lead',
    dateFrom: new Date('Nov, 2021'),
    dateTo: new Date('Mar, 2022'),
    location: 'Taipei, Taiwan',
    workItems: [
      {
        item: 'Recruited and led a team of six members to maintain and develop new full-stack features into the CirrusLED CMS platform;',
        link: 'https://www.cirrusled.com/screenhub',
      },
      {
        item: 'Led another team to build a cross-platform mobile app with Flutter for a start-up company.',
        link: 'https://www.justkitchen.com/zh/',
      },
    ],
  },
  {
    company: 'Zerologix',
    title: 'Senior Frontend Developer',
    dateFrom: new Date('July, 2021'),
    dateTo: new Date('Nov, 2021'),
    location: 'Taipei, Taiwan',
    workItems: [
      {
        item: 'Developed new features for Finlogix Charts;',
        link: 'https://www.finlogix.com/chart',
      },
      {
        item: 'Maintained the current chart product with backend developers;',
      },
      {
        item: 'Supported Finlogix Widgets for its offered financial services.',
        link: 'https://developer.finlogix.com/',
      },
    ],
  },
  {
    company: 'MyGo',
    title: 'Full-Stack Developer',
    dateFrom: new Date('August, 2020'),
    dateTo: new Date('Mar, 2021'),
    location: 'Taipei, Taiwan',
    workItems: [
      {
        item: 'Developed a real-estates escrow repository platform;',
      },
      {
        item: 'Developed a responsive frontend website with React.js and Next.js;',
      },
      { item: 'Developed the GraphQL backend API with TypeScript;' },
      {
        item: 'Employed a micro-services architecture with Kubernetes;',
      },
      {
        item: 'Introduced the automated CI/CD pipeline to the current development.',
      },
    ],
  },
  {
    company: 'McGill University',
    title: 'Postgraduate Researcher',
    dateFrom: new Date('Januaray, 2015'),
    dateTo: new Date('April, 2020'),
    location: 'Montreal, Canada',
    workItems: [
      {
        item: 'Proposed the concept of dynamic deflated restarting in Krylov subspace solvers;',
      },
      {
        item: 'Developed novel linear solvers for solving ill-conditioned systems with an optimal balance between convergence and required memory footprint;',
      },
      {
        item: 'Implemented and verified the proposed solvers with industrial aircraft bodies in the in-house code of the advanced aerodynamics group in Bombardier Aerospace for aircraft design;',
      },
      {
        item: 'This work led to two published journal papers and three conference presentations.',
      },
    ],
  },
  {
    company: 'Monkland Community Center',
    title: 'Back-End Developer',
    dateFrom: new Date('November, 2017'),
    dateTo: new Date('June, 2018'),
    location: 'Montreal, Canada',
    workItems: [
      {
        item: 'Developed the back-end REST API to support a community project - TrainingBuddy;',
      },
      {
        item: 'Supported the front-end developer about the overall API requests and user interface;',
      },
      {
        item: 'Deployed the REST API in DigitalOcean for the front-end development.',
      },
    ],
  },
]

export const education: Education[] = [
  {
    school: 'McGill University',
    program: 'PhD in Mechanical Engineering',
    dateFrom: new Date('Januaray, 2015'),
    dateTo: new Date('April, 2020'),
    location: 'Montreal, Canada',
    gpa: '4.00/4.00',
  },
  {
    school: 'Imperial College London',
    program:
      'MSc in Advanced Computational Methods for Aeronautics, Flow Management and Fluid Structure Interaction',
    dateFrom: new Date('September, 2012'),
    dateTo: new Date('September, 2013'),
    location: 'London, UK',
    gpa: '3.96/4.00',
  },
]

export const projects: Project[] = [
  {
    id: 0,
    name: 'VestaEquity Web3 Platform',
    description: [
      `A web app allows its clients to purchase tokenized equity in Algorand ecosystem`,
      `Clients can send offers, counter-offers, or reject offers with their own wallets`,
    ],
    summary: [
      'React.js and Typescript for front-end development; Django for its back-end system',
    ],
    image_path: '/images/projects/vestaequity-app.jpg',
    deployed_url: 'https://app.vestaequity.net/marketplace',
    github_url: 'na',
    category: ['Web'],
    tech_stack: ['React.js', 'Typescript', 'PostgreSQL', 'Django'],
  },
  {
    id: 1,
    name: 'VestaEquity CMS Website',
    description: [
      `A web app allows CirrusLED's clients to update their ads and content displayed in LED monitors`,
      `Dashboard feature for CirrusLED's clients to monitor their installed LED infrastrucuture including mechanical and electrical malfunctions`,
    ],
    summary: ['React.js and Typescript for front-end development;'],
    image_path: '/images/projects/vesta-cms.jpg',
    deployed_url: 'https://vestaequity.net/',
    github_url: 'na',
    category: ['Web'],
    tech_stack: ['React.js', 'Typescript'],
  },
  {
    id: 2,
    name: 'CirrusLED ScreenHub',
    description: [
      `A web app allows CirrusLED's clients to update their ads and content displayed in LED monitors`,
      `Dashboard feature for CirrusLED's clients to monitor their installed LED infrastrucuture including mechanical and electrical malfunctions`,
    ],
    summary: ['React.js and Typescript for front-end development;'],
    image_path: '/images/projects/ScreenHub.jpg',
    deployed_url: 'https://v2.screenhub.com/',
    github_url: 'na',
    category: ['Web'],
    tech_stack: [
      'React.js',
      'Typescript',
      'Node.js',
      'Redis',
      'PostgreSQL',
    ],
  },
  {
    id: 3,
    name: 'Finlogix Charts',
    description: [
      'A HTML5 web app to illustrate candlestick charts of stocks and to apply technical analysis tools. This web frontend is developed with React.js and typescript.',
      'This mini-app allows users to quickly glimpse the stock price of their interest, and also activates zoom and pan features by scrolling down over the chart.',
    ],
    summary: [
      'React.js, HTML5 canvas for front-end;',
      'Typescript for development;',
    ],
    image_path: '/images/projects/FinlogixChart.jpg',
    deployed_url: 'https://www.finlogix.com/chart',
    github_url: 'na',
    category: ['Web'],
    tech_stack: ['React.js', 'Typescript', 'HTML5'],
  },
  {
    id: 4,
    name: 'My Portfolio - 2020 version',
    description: [
      'This project is developed mainly with Vue.js. The generated static HTML files are deployed in GitHub. My initial purpose in building this website with JS is to separate the front-end development from the back-end database. Thus anyone can reuse my repository to build up their portfolio website by configuring their API calls and populating their back-end database.',
      'The database is in JSON format deployed in Firebase, while all the images and PDF files are stored in Amazon S3. Once the API data gets fetched, Vuex, a well-known framework for state management, is exploited to mutate the state variables associated with the database data. The Nuxt framework has been embedded in this repository for SPA (Single Page Application). Finally, as for the UI components, Vuetify is used for the material design of this portfolio side-project. This website is also compatible with popular browsers in mobile devices.',
    ],
    summary: [
      'Using Vue.js for front-end;',
      'Employing Google Firebase to store JSON format data;',
      'Storing the associated files, including PDF files and images on AWS S3;',
      'Nuxt.js for SPA, and Vuex to manage the associated states variables.',
    ],
    image_path: '/images/projects/portfolioVue.jpg',
    deployed_url: 'https://chihhaochen.github.io/',
    github_url: 'https://chihhaochen.github.io/portfolioVue/',
    category: ['Web'],
    tech_stack: ['Vue.js', 'Google Firebase', 'AWS S3'],
  },
  {
    id: 5,
    name: 'News Client',
    description: [
      'The original purpose of this project is to extend the previous work on a mockup of Apple abpp Store. This App makes API requests from News API that offers news articles and headlines from over 30000 sources. Therefore the reason I chose this topic is that not only can I hone my skills in iOS application development but keep a close eye to the things around the world.',
      'Later I found that even though there are quite many Apps offering News service, I still do not see a good enough App to read news articles in different languages. Therefore I intend to continue this project to make it a news client App for polyglots so that they can read and save the articles in their journeys of learning languages.',
    ],
    summary: [
      'Whole layout is made with a programmatical auto-layout without the interface builder (storyboard);',
      'API requests and asynchronous fetch from News API;',
      'Using programmatical auto-layout to animate UI components and associated controllers;',
      'Pagination when fetching data;',
      'Supporting pulling to refresh data;',
    ],
    image_path: '/images/projects/NewsClientImage.jpg',
    deployed_url: 'na',
    github_url: 'https://chihhaochen.github.io/NewsClient/',
    category: ['Mobile'],
    tech_stack: ['Swift', 'Google Firebase', 'Realm', 'UIKit'],
  },
]
