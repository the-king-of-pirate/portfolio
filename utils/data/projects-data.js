import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Creating A Trading Application',
    description: `
    As a backend developer, I contribute to innovative solutions in the financial sector, 
    including the development of a trading platform. I used Node.js and Express.js to 
    create robust APIs and manage databases with PostgreSQL. I also design flexible and 
    efficient APIs using GraphQL, allowing clients to request specific data. To ensure 
    security, I implement JSON Web Tokens (JWT) for authentication and incorporate thorough 
    security testing to protect against vulnerabilities. Additionally, I handle real-time 
    notifications by leveraging PubSub technology.
    `,
    tools: [
      'Express',
      'MongoDB',
      'Graphql',
      'PostgresSql',
      'Prisma',
      'Node Mailer',
      'JWT',
      'WebSocket',
      'PM2',
      'Nginx',
    ],
    role: 'Backend Developer',
    code: '',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'developing an E-commerce Website',
    description:
      'I designed and implemented a user-friendly e-commerce platform that enables browsing, purchasing, and managing products. The backend was built with Node.js and Express.js, using PostgreSQL for secure and scalable data management. For the frontend, I used HTML, CSS, JavaScript, and React.js to create a responsive and accessible design across devices. Key features include product categorization, a shopping cart, payment processing, and an admin dashboard for managing products, users, and orders. The platform was deployed on a secure server with SSL certification, automated database backups, and underwent extensive performance, security, and compatibility testing before launch.',
    tools: [
      'NextJS',
      'Tailwind CSS',
      'Google Maps',
      'NestJS',
      'TypeScript',
      'MySQL',
      'AWS S3',
      'Sun-Editor',
      'Gmail Passkey',
    ],
    role: 'Back-end developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'Platform for searching for doctors',
    description: `
    I developed a comprehensive search platform for doctors and pharmacists, where I was
     responsible for both the backend and frontend development. The platform was created
    using a combination of HTML, CSS, JavaScript, jQuery, and PHP. By leveraging these
    technologies, I ensured the platform was both user-friendly and functional, providing
    an efficient solution for users to search and connect with healthcare professionals.
    `,
    tools: ['HTML', 'CSS', 'PHP', 'JQuery', 'Express'],
    code: '',
    role: 'Full Stack Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 4,
    name: 'Newsroom Management',
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
    code: '',
    demo: '',
    image: ayla,
    role: 'Full Stack Developer',
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
