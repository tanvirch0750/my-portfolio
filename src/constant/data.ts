import { NavItem } from '@/types';
import { meetEaseImages } from './project-images/meet-ease';

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    title: 'Skills',
    href: '/skills',
    icon: 'skill',
    label: 'skills',
  },
  {
    title: 'About Me',
    href: '/about-me',
    icon: 'user',
    label: 'About Me',
  },
  {
    title: 'My Projects',
    href: '/my-projects',
    icon: 'orders',
    label: 'my projects',
  },
  {
    title: 'Experience & Education',
    href: '/my-experience',
    icon: 'education',
    label: 'my-experience',
  },

  {
    title: 'Contact ',
    href: '/contact',
    icon: 'contact',
    label: 'Contact',
  },
];

export const projectsData = [
  {
    company: 'Meet Ease',
    tag: 'meet-ease',
    year: '2024',
    title: 'Meeting Room Booking System ',
    type: 'MERN Stack',
    keyConcepts: [
      { title: 'Real-Time Room Availability' },
      { title: 'Secure Payment Integration with Stripe' },
      { title: 'Admin Dashboard with Real-Time Updates' },
    ],
    technologies:
      'React Js, TypeScript, Redux, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, JWT, and Aamar Pay Online Payment',
    links: [
      {
        link: 'https://meet-easee.netlify.app/',
        title: 'Live Preview',
      },
      {
        link: 'https://github.com/tanvirch0750/Meet-Ease-React',
        title: 'Github Frontend',
      },
      {
        link: 'https://github.com/tanvirch0750/meeting-room-booking-system-node-api',
        title: 'Github Backend',
      },
    ],
    overview:
      'Meet Ease is a comprehensive platform designed to simplify the process of booking meeting rooms in co-working spaces. The system offers a seamless experience for both regular users and administrators, featuring real-time availability, secure transactions, and robust management tools.',
    heroImg: meetEaseImages?.heroImg,
    usersFeatures: {
      featrues: [
        'Real-Time Room Availability: Users can check real-time room availability and book instantly.',
        'Instant Booking Confirmation: Users receive instant confirmation after booking.',
        'Flexible Scheduling: Book rooms for specific times based on user needs.',
        'Customer Testimonials: Display positive feedback from users.',
        'Responsive Design: Fully optimized for desktop and mobile devices.',
        'Search & Filter: Search rooms by name, filter by capacity or price.',
        'My Bookings Page: View and manage bookings with details.',
        'Secure Payment Integration: Payments processed through Stripe.',
        'Scroll to Top Button: Quick navigation to the top of the page.',
      ],
      images: meetEaseImages?.usersImages,
    },
    adminFeatures: {
      featrues: [
        'Room Management: Create, update, and delete rooms with real-time updates.',
        'Slot Management: Manage time slots for rooms.',
        'Booking Management: Approve/reject bookings and manage statuses.',
        "User Role Management: Promote users to 'ADMIN' role.",
        'Dashboard: Summary of total bookings, revenue, slots, and recent bookings.',
      ],
      images: meetEaseImages?.adminImages,
    },
    securityFeatures: {
      featrues: [
        'Role-Based Access Control: Only admins can access certain functionalities.',
        'Token-Based Authentication: Secure user authentication with JWT.',
        'Form Validation: Ensures accurate user input across forms.',
        'Secure Transactions: Payments processed securely through trusted services like Stripe.',
      ],
    },
    conclusion:
      'Meet Ease offers a comprehensive, user-friendly platform for co-working space administrators and users, making room booking and management seamless, secure, and efficient.',
  },
];
