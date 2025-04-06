import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import PageContainer from '@/components/layout/PageContainer';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Code,
  GraduationCap,
} from 'lucide-react';

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
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'Redux Toolkit',
      'SSR',
      'Performance Optimization',
    ],
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
    skills: [
      'JavaScript',
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'REST API',
    ],
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
    skills: [
      'C Programming',
      'Data Structures',
      'Algorithms',
      'Python',
      'Django',
      'MySQL',
    ],
  },
];

const TrainingCoursesPage = () => {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container py-10 md:py-14 px-4 md:px-10">
        <div className="text-center">
          <SectionHeader
            title="Practical Skills Through Training and Courses"
            eybrow="Steps of Growth"
            description="A summary of the training and courses that have advanced my skills and knowledge, providing real-world application."
          />
        </div>

        {/* Training Section */}
        <div className="relative mt-12 md:mt-24 mb-6">
          <div className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            <BookOpen className="w-5 h-5 text-emerald-300" />
            <span>Professional Training</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 relative">
          {trainingData.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div
                className="absolute left-6 top-12 w-4 h-4 rounded-full bg-emerald-300 hidden md:block"
                style={{ transform: 'translateX(-50%)' }}
              ></div>

              <Card className="transition-all duration-300 hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-900/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-emerald-300 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {item.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60 text-sm">
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    {item.date}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                    Overview
                  </h4>
                  <p className="text-white/60">{item.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Key Learnings
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {item?.learningPoints?.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 pl-4 bg-white/5 p-3 rounded-lg border-l-2 border-emerald-300/50 hover:border-emerald-300 transition-all duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/90 font-medium mb-1">
                            {point.title}
                          </p>
                          <p className="text-white/60">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg mb-4">
                  <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Conclusion
                  </h4>
                  <p className="text-white/60 pl-4">{item.conclusion}</p>
                </div>

                {item.skills && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-white/60 mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-emerald-300" />
                      Skills Acquired
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default TrainingCoursesPage;
