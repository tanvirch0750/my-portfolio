import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import PageContainer from '@/components/layout/PageContainer';

const trainingData = [
  {
    title: 'Reactive Accelerator',
    institution: 'Learn with Sumit',
    date: '2024',
    description:
      'Advanced training in React.js and Next.js, focusing on deep understanding of the core principles of these frameworks.',
    learningPoints: [
      {
        title: 'Deep Dive into React.js and Next.js',
        desc: 'Enhanced my expertise in React and Next.js by exploring advanced concepts and best practices for building robust applications.',
      },
      {
        title: 'Core Learning in State Management',
        desc: 'Gained a thorough understanding of state management techniques using both local state (React) and global state management tools.',
      },
      {
        title: 'Redux for Scalable State Management',
        desc: 'Mastered Redux, learning to implement global state across complex applications, ensuring predictable state updates and improved maintainability.',
      },
      {
        title: 'Advanced Concepts in Redux Toolkit',
        desc: 'Implemented Redux Toolkit to simplify complex state management workflows, improving efficiency and reducing boilerplate code.',
      },
      {
        title: 'Server-Side Rendering and Optimization',
        desc: 'Learned server-side rendering with Next.js, focusing on performance optimization and SEO improvements for modern web apps.',
      },
    ],
    conclusion:
      'This accelerator provided me with the advanced knowledge required to build production-grade web applications with React and Next.js.',
  },
  {
    title: 'Complete Web Development Course',
    institution: 'Programming Hero',
    date: 'December 2021 - October 2024',
    description:
      'Intensive training program focused on mastering both front-end and back-end development, covering essential web technologies.',
    learningPoints: [
      {
        title: 'Learned JavaScript, React.js, Next.js',
        desc: 'Gained proficiency in building dynamic web applications using modern JavaScript frameworks like React and Next.js.',
      },
      {
        title: 'Mastered Backend Development',
        desc: 'Worked extensively with Node.js, MongoDB, and PostgreSQL to create scalable and efficient RESTful APIs.',
      },
      {
        title: 'Frontend Design & Development',
        desc: 'Crafted responsive, visually appealing websites using Tailwind CSS, Ant Design, Bootstrap, HTML, and CSS.',
      },
    ],
    conclusion:
      'This training significantly bolstered my web development skills, allowing me to confidently build and deploy full-stack applications.',
  },
  {
    title: 'CSE Fundamentals',
    institution: 'Phitron',
    date: 'September 2022 - September 2023',
    description:
      'Comprehensive course in Computer Science fundamentals, providing a strong base in programming, algorithms, and web technologies.',
    learningPoints: [
      {
        title: 'Proficiency in C Programming',
        desc: 'Developed a solid foundation in computer programming with a focus on writing efficient and clean code.',
      },
      {
        title: 'Data Structures & Algorithms',
        desc: 'Acquired strong problem-solving skills through hands-on practice with data structures and algorithmic techniques.',
      },
      {
        title: 'Explored Python, Django, and MySQL',
        desc: 'Broadened my development capabilities by building applications with Python and Django while managing databases with MySQL.',
      },
    ],
    conclusion:
      'This course enhanced my problem-solving and programming skills, making me proficient in both system-level and web-based technologies.',
  },
];

const ExperienceEducationPage = () => {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container py-10 md:py-14 px-4 md:px-10">
        <div className=" text-center">
          <SectionHeader
            title="Practical Skills Through Training and Courses"
            eybrow="Steps of Growth"
            description="A summary of the training and courses that have advanced my skills and knowledge, providing real-world application."
          />
        </div>

        {/* Training Section */}
        <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-lg  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text mt-24 mb-6">
          <span>&bull;</span>
          <span>My Training</span>
        </div>
        <div className="flex flex-col gap-8">
          {trainingData.map((item, index) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-white/60 italic mb-2">{item.date}</p>
              <p className="text-emerald-300 mb-4">{item.institution}</p>

              <h4 className="text-lg font-semibold text-white/90 mb-2">
                Overview
              </h4>
              <p className="text-white/60">{item.description}</p>

              <h4 className="text-lg font-semibold text-white/90 mt-4 mb-2">
                Key Learnings
              </h4>
              <ul className="text-white/60 flex flex-col gap-2">
                {item?.learningPoints?.map((point, idx) => (
                  <li key={idx} className="flex gap-6 md:pl-4">
                    <span className="text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                      &bull;
                    </span>
                    <p>
                      <span className="text-white/90 font-medium">
                        {point.title}:{' '}
                      </span>
                      <span>{point.desc}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white/90 mt-4 mb-2">
                Conclusion
              </h4>
              <p className="text-white/60">{item.conclusion}</p>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default ExperienceEducationPage;
