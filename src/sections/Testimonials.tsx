import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';

import JsIcon from '@/assets/tech-icons/javascript-svgrepo-com.svg';
import tsIcon from '@/assets/tech-icons/typescript-icon-svgrepo-com.svg';
import reactIcon from '@/assets/tech-icons/reactjs-svgrepo-com.svg';
import nextIcon from '@/assets/tech-icons/nextjs-icon-svgrepo-com.svg';
import nodeIcon from '@/assets/tech-icons/nodejs-svgrepo-com.svg';
import mongoIcon from '@/assets/tech-icons/mongodb-svgrepo-com.svg';
import reduxIcon from '@/assets/tech-icons/redux-svgrepo-com.svg';
import expressIcon from '@/assets/tech-icons/express-svgrepo-com.svg';
import antIcon from '@/assets/tech-icons/antdesign-svgrepo-com.svg';
import restApi from '@/assets/tech-icons/rest-api-svgrepo-com.svg';
import postIcon from '@/assets/tech-icons/postgresql-svgrepo-com.svg';
import prisimaIcon from '@/assets/tech-icons/light-prisma-svgrepo-com.svg';
import gitIcon from '@/assets/tech-icons/git-svgrepo-com.svg';

export const skillsData = [
  {
    name: 'JavaScript',
    description: 'Dynamic and Interactive Web Experiences',
    details:
      'JavaScript is my go-to language for adding interactivity and dynamic behavior to web applications. I use it to create responsive, user-focused interfaces and to handle client-side logic that enhances the overall user experience.',
    icon: JsIcon,
  },
  {
    name: 'TypeScript',
    description: 'Type-Safe JavaScript Development',
    details:
      'TypeScript adds static typing to JavaScript, ensuring my code is more predictable and easier to maintain. By leveraging TypeScript’s type system, I can catch errors early, leading to more robust and scalable applications.',
    icon: tsIcon,
  },
  {
    name: 'Node.js',
    description: 'JavaScript on the Server',
    details:
      'Node.js powers my server-side applications, enabling me to build fast and scalable backend services using JavaScript. I use it to handle asynchronous tasks, connect to databases, and build APIs that power modern web applications.',
    icon: nodeIcon,
  },
  {
    name: 'MongoDB',
    description: 'NoSQL Database for Flexible Data Models',
    details:
      'MongoDB allows me to work with a flexible, document-based database. It’s my go-to for storing and managing large volumes of unstructured data, ensuring fast and scalable performance for web applications.',
    icon: mongoIcon,
  },
  {
    name: 'React.js',
    description: 'Component-Based UI Development',
    details:
      'React.js allows me to build user interfaces through reusable components, ensuring efficient and organized code. With React, I create dynamic, fast-loading web applications that provide seamless user experiences.',
    icon: reactIcon,
  },
  {
    name: 'Next.js',
    description: 'Server-Side Rendering & Full-Stack React Framework',
    details:
      'Next.js is my framework of choice for building modern, SEO-friendly React applications. I use it for server-side rendering, API routes, and static site generation, creating highly performant web apps that scale easily.',
    icon: nextIcon,
  },
  {
    name: 'Redux',
    description: 'State Management Simplified',
    details:
      'Redux enables me to manage complex application states in a predictable way. By centralizing state and using actions to update it, I can efficiently build applications that are scalable and easy to debug.',
    icon: reduxIcon,
  },

  {
    name: 'Express.js',
    description: 'Backend Framework for Web Apps',
    details:
      'Express.js simplifies building server-side applications with Node.js. I use it to create robust APIs, handle routing, and manage middleware, enabling me to deliver scalable and maintainable backend solutions.',
    icon: expressIcon,
  },
  {
    name: 'Ant Design',
    description: 'Elegant UI Components for Web Applications',
    details:
      'Ant Design provides a rich set of pre-built UI components, allowing me to quickly create visually appealing and responsive interfaces. It streamlines the design process, ensuring a consistent and user-friendly experience.',
    icon: antIcon,
  },
  {
    name: 'REST API',
    description: 'Building Scalable Web Services',
    details:
      'REST APIs allow me to create robust and scalable services that communicate between the frontend and backend. I design RESTful endpoints that adhere to best practices, ensuring smooth and efficient data exchange in web applications.',
    icon: restApi,
  },
  {
    name: 'PostgreSQL',
    description: 'Relational Database for Complex Queries',
    details:
      'PostgreSQL is my go-to relational database for managing structured data. Its support for complex queries, scalability, and data integrity ensures that my applications can handle large datasets with precision and speed.',
    icon: postIcon,
  },
  {
    name: 'Prisma',
    description: 'Type-Safe ORM for Databases',
    details:
      'Prisma simplifies database access with a type-safe approach, ensuring better code predictability and easier maintenance. I use Prisma to write cleaner and more efficient queries, making database management straightforward.',
    icon: prisimaIcon,
  },
  {
    name: 'Git',
    description: 'Version Control and Collaboration',
    details:
      'Git is essential to my workflow, allowing me to track changes, collaborate with teams, and manage code across projects. It ensures that my work is versioned, backed up, and always ready for deployment or rollback.',
    icon: gitIcon,
  },
];

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div>Testimonials Section</div>;
};
