import { NavItem } from '@/types';
import { meetEaseImages } from './project-images/meet-ease';
import { housecraftersImages } from './project-images/house-crafters';
import { bookTrackingImages } from './project-images/book-tracking';
import { strapToolsImages } from './project-images/strapping-tools';
import { luxeAttireImages } from './project-images/luxe-attire';

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    title: 'About Me',
    href: '/about-me',
    icon: 'user',
    label: 'About Me',
  },
  {
    title: 'Skills',
    href: '/skills',
    icon: 'skill',
    label: 'skills',
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
    title: 'Blogs',
    href: '/blogs',
    icon: 'blogs',
    label: 'my blogs',
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
    company: 'Luxe Attire',
    tag: 'luxe-attire',
    year: '2024',
    title: 'Clothing Marketplace Platform',
    type: 'E-commerce',
    keyConcepts: [
      { title: 'Secure Payment Integration with Stripe' },
      { title: 'Admin Dashboard with Order Management' },
      { title: 'Product Inventory Management' },
    ],
    technologies:
      'Next.js (v14), Tailwind CSS, Node.js, MongoDB, Redux, Redux Persist, NextAuth, Stripe, Resend (Email Service)',
    links: [
      {
        link: 'https://luxe-attire.vercel.app/',
        title: 'Live Preview',
      },
      {
        link: 'https://github.com/tanvirch0750/Lux-Attire',
        title: 'GitHub Code',
      },
    ],
    overview:
      'Luxe Attire is a modern, scalable e-commerce platform designed for seamless online shopping. With a focus on user experience, secure transactions, and comprehensive admin tools, the platform allows users to browse and purchase products with ease, while providing admins with robust product and order management features.',
    heroImg: luxeAttireImages?.heroImg,
    usersFeatures: {
      features: [
        'Responsive Design: Optimized for mobile, tablet, and desktop views.',
        'Product Categories: Browse through categories like Kids Wear, Traditional Clothing, and Menswear.',
        'Wishlist Functionality: Users can save favorite items for future viewing.',
        'Cart Management: Items in the cart persist across sessions.',
        'Checkout with Stripe: Secure payment through Stripe or Cash on Delivery.',
        'Order Tracking: Users can track pending and delivered orders on the My Orders page.',
        'Product Reviews: Registered users can review products and view reviews on the product detail page.',
        'Advanced Filters & Pagination: Filter products by price, category, or rating with pagination for easy browsing.',
      ],
      images: luxeAttireImages?.usersImages,
    },
    adminFeatures: {
      features: [
        'Product Management: Add, edit, or delete products from the admin dashboard.',
        'Order Management: Admins can update order statuses and view order statistics.',
        'Inventory Management: Manage stock levels for each product to ensure availability.',
        'User Management: View user details and manage roles.',
        'Sales Overview: Dashboard with comprehensive sales and user statistics.',
      ],
      images: luxeAttireImages?.adminImages,
    },
    securityFeatures: {
      features: [
        'Protected Routes: Only authenticated users can access My Orders and Admin Dashboard.',
        'Token-Based Authentication: Secure user authentication with NextAuth.',
        'Form Validation: Ensures accurate input during registration, login, and checkout.',
        'Secure Payment Processing: Payments processed through trusted gateway Stripe.',
      ],
    },
    conclusion:
      'Luxe Attire provides a feature-rich e-commerce platform for both shoppers and administrators. Its intuitive design, secure payment integration, and powerful admin tools make it a reliable solution for modern online clothing retailers.',
  },

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
      features: [
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
      features: [
        'Room Management: Create, update, and delete rooms with real-time updates.',
        'Slot Management: Manage time slots for rooms.',
        'Booking Management: Approve/reject bookings and manage statuses.',
        "User Role Management: Promote users to 'ADMIN' role.",
        'Dashboard: Summary of total bookings, revenue, slots, and recent bookings.',
      ],
      images: meetEaseImages?.adminImages,
    },
    securityFeatures: {
      features: [
        'Role-Based Access Control: Only admins can access certain functionalities.',
        'Token-Based Authentication: Secure user authentication with JWT.',
        'Form Validation: Ensures accurate user input across forms.',
        'Secure Transactions: Payments processed securely through trusted services like Stripe.',
      ],
    },
    conclusion:
      'Meet Ease offers a comprehensive, user-friendly platform for co-working space administrators and users, making room booking and management seamless, secure, and efficient.',
  },
  {
    company: 'House Crafters',
    tag: 'house-crafters',
    year: '2023',
    type: 'Full Stack',
    title: 'House Service Booking Platform',
    keyConcepts: [
      { title: 'Comprehensive House Service Booking' },
      { title: 'Real-Time Scheduling for Various Services' },
      { title: 'Admin Dashboard with Service and Management Tools' },
    ],
    technologies:
      'Next.js, TypeScript, Redux, Ant Design, Node.js, Express, PostgreSQL, Prisma, JWT',
    links: [
      {
        link: 'https://house-crafters-frontend-ivory.vercel.app/',
        title: 'Live Preview',
      },
      {
        link: 'https://github.com/tanvirch0750/house-crafters-frontend',
        title: 'Github Frontend',
      },
      {
        link: 'https://github.com/tanvirch0750/house-crafters-backend',
        title: 'Github Backend',
      },
    ],
    overview:
      'House Crafters is a one-stop platform offering a wide range of house-related services, including booking, management, and feedback. Users can easily browse available services, book them, and manage their profiles. Admins have access to powerful tools to manage users, services, and bookings, while super admins can oversee admin roles and permissions. The platform is built for scalability and efficiency using technologies like Next.js, Prisma, and PostgreSQL.',
    heroImg: housecraftersImages?.heroImg, // Assigning the imported image
    usersFeatures: {
      features: [
        'Service Browsing: Users can browse various house-related services, including cleaning, repairs, and renovation.',
        'Real-Time Service Availability: Users can check available times for services and book instantly.',
        'Instant Booking Confirmation: Receive immediate confirmation after booking.',
        'User Dashboard: Manage bookings, view history, and track status of ongoing services.',
        'Responsive Design: Optimized for both mobile and desktop devices.',
        "Service Reviews: Users can leave reviews and ratings for services they've booked.",
        'Secure Profile Management: Update personal information with confidence.',
        'Search & Filter: Easily search for services by type, location, or price range.',
        'Feedback Forms: Submit suggestions or concerns after service completion.',
      ],
      images: housecraftersImages?.usersImages, // Assigning imported images
    },
    adminFeatures: {
      features: [
        'Service Management: Add, edit, and remove services with real-time updates to the platform.',
        'User Management: Manage user profiles, roles, and permissions.',
        'Booking Management: Admins can view, approve, reject, or adjust service bookings.',
        'Dashboard Analytics: View summary data such as total bookings, revenue, and service requests.',
        "Role Management: Promote users to 'Admin' and manage access rights.",
      ],
      images: housecraftersImages?.adminImages, // Assigning imported images
    },
    securityFeatures: {
      features: [
        'Role-Based Access Control: Only admins and super admins can access specific functionalities.',
        'Token-Based Authentication: Secure authentication with JWT for all users.',
        'Form Validation: Enforced validation across all input fields for secure data handling.',
        'Secure Payments: Payment processing handled via secure integrations.',
      ],
    },
    conclusion:
      'House Crafters offers a comprehensive platform for booking and managing house-related services. With user-friendly interfaces for customers and robust tools for admins and super admins, the platform streamlines service management, ensuring efficiency, security, and reliability for all users.',
  },
  {
    company: 'Book Tracker',
    tag: 'book-tracker',
    year: '2023',
    type: 'MERN Stack',
    title: 'Book Reader Tracking App',
    keyConcepts: [
      { title: 'Seamless Book Tracking' },
      { title: 'Reading Progress Management' },
      { title: 'Wishlist Creation and Management' },
    ],
    technologies:
      'React, Redux, TypeScript, Node.js, MongoDB, Express, Tailwind CSS, JWT',
    links: [
      {
        link: 'https://tracking-book.netlify.app/',
        title: 'Live Preview',
      },
      {
        link: 'https://github.com/tanvirch0750/assignment-book-tracking-frontend',
        title: 'Github Frontend',
      },
      {
        link: 'https://github.com/tanvirch0750/assignment-books-tracking-backend',
        title: 'Github Backend',
      },
    ],
    overview:
      'Book Tracker is a feature-rich app for book lovers, allowing users to manage and track their reading progress. Whether they’re reading multiple books or creating a wishlist for future reads, the app provides an intuitive interface to monitor book details such as titles, authors, genres, and reading statuses. Built using the MERN stack (MongoDB, Express, React, Node.js), the app ensures a seamless and responsive user experience across devices.',
    heroImg: bookTrackingImages?.heroImg, // Assigning the imported image
    usersFeatures: {
      features: [
        'Add, Edit, and Remove Books: Users can easily manage their reading lists by adding new books, editing details, or removing them when completed.',
        "Track Reading Progress: Update reading statuses (e.g., 'Reading', 'Completed', 'Want to Read') for each book.",
        'Wishlist: Create a wishlist for books users plan to read in the future.',
        'Responsive Design: Fully optimized for both desktop and mobile users.',
        'Search and Filter Books: Easily search books by title, author, or genre and filter by reading status.',
        'Progress Overview: Users can see an overview of their total completed and in-progress books.',
        "Book Details: View key information like the book's title, author, genre, and summary.",
        'Book Stats: Track the total number of books read, in-progress, or in the wishlist.',
      ],
      images: bookTrackingImages?.usersImages, // Assigning imported images
    },

    conclusion:
      'Book Tracker is the ideal solution for avid readers looking to manage their reading habits. Whether adding new books, tracking progress, or planning future reads, the platform ensures a smooth, secure, and efficient experience for all users, from casual readers to book enthusiasts.',
  },
  {
    company: 'Straptools',
    tag: 'straptools',
    year: '2022',
    type: 'MERN Stack',
    title: 'Tools Manufacturer Website',
    keyConcepts: [
      { title: 'User Authentication and Role-Based Access' },
      { title: 'Product Management and Ordering System' },
      { title: 'Payment Integration with Stripe' },
    ],
    technologies:
      'React.js, Firebase Authentication, Node.js, Express, MongoDB, Stripe, JWT, React Form Hook, Vanilla CSS, React Query',
    links: [
      {
        link: 'https://straptools-420cd.web.app/',
        title: 'Live Preview',
      },
      {
        link: 'https://github.com/tanvirch0750/Straptools_Manufacturer_Client',
        title: 'Github Frontend',
      },
      {
        link: 'https://github.com/tanvirch0750/Straptools_Manufacturer_Server',
        title: 'Github Backend',
      },
    ],
    overview:
      'Straptools is a manufacturer of strapping tools, providing products worldwide. The website is designed to facilitate easy ordering of strapping tools across three categories: Plastic, Textile, and Steel. Users must log in to purchase, and admins have control over product management and user roles. The website is built with a robust tech stack including React.js, Node.js, MongoDB, and Firebase Authentication.',
    heroImg: strapToolsImages?.heroImg,
    usersFeatures: {
      features: [
        'Login Required for Purchases: Users must log in to buy products.',
        'Product Quantity Selection: Users can select product quantity during purchase, limited by available stock.',
        "Add Review: Users can submit reviews for products via the 'Add Review' page.",
        'My Orders Page: Users can view their orders and choose to make payments or cancel products.',
        'My Profile Page: Users can view and update their profile information.',
        'Responsive Design: Fully optimized for both desktop and mobile devices.',
        'Stripe Payment Integration: Secure payments processed via Stripe.',
      ],
      images: strapToolsImages?.usersImages,
    },
    adminFeatures: {
      features: [
        "Manage Users: Admins can view all users and promote users to 'Admin'.",
        'Add and Manage Products: Admins can add, edit, or remove products from the inventory.',
        'Order Management: Admins can confirm or cancel orders.',
        'Role-Based Permissions: Admins have access to advanced management tools.',
      ],
      images: strapToolsImages?.adminImages,
    },
    securityFeatures: {
      features: [
        'Firebase Authentication: Secure login system using Firebase.',
        'JWT-Based Authentication: Token-based authentication to protect user sessions.',
        'Role-Based Access Control: Different functionalities for users and admins.',
        'Secure Payment Processing: Payments handled through Stripe for secure transactions.',
      ],
    },
    conclusion:
      'Straptools offers a comprehensive platform for strapping tool manufacturers, providing secure and efficient product management, user authentication, and payment processing. With role-based access control, the platform ensures a seamless experience for both regular users and administrators.',
  },
];
