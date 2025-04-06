import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import PageContainer from '@/components/layout/PageContainer';
import { Award, Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experienceData = [
  {
    title: 'Fullstack Developer (MERN)',
    company: 'Standard Insights',
    location: 'Hong Kong (Remote)',
    date: 'October 2024 - Present',
    description:
      'Standard Insights is a data-driven company that provides innovative solutions to help businesses optimize their operations and make informed decisions through advanced analytics and custom software development.',
    contribution: [
      {
        title: 'Developed Full-Stack Applications',
        desc: 'Built end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js), delivering scalable and responsive solutions that meet client requirements.',
      },
      {
        title: 'Implemented Advanced Data Visualization',
        desc: 'Created interactive charts and data visualization components using libraries like Chart.js and D3.js, transforming complex datasets into intuitive visual representations that enable clients to gain actionable insights.',
      },
      {
        title: 'Implemented RESTful APIs',
        desc: 'Designed and developed robust API architectures that facilitate seamless communication between front-end interfaces and back-end services, ensuring data integrity and security.',
      },
      {
        title: 'Optimized Application Performance',
        desc: 'Enhanced application speed and efficiency through code refactoring, database query optimization, and implementation of caching strategies, resulting in improved user experience.',
      },
      {
        title: 'Resolved Critical System Bugs',
        desc: 'Identified, diagnosed, and fixed complex bugs across the application stack, implementing systematic debugging processes and thorough testing protocols to ensure stable and reliable software performance.',
      },
    ],
    conclusion:
      'My work at Standard Insights has allowed me to leverage my full-stack development skills to create comprehensive solutions that transform raw data into actionable insights, helping clients achieve their business objectives.',
    tags: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'REST API',
      'Redux',
      'Chart.js',
      'D3.js',
      'Data Visualization',
      'Debugging',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    company: 'View AI',
    location: 'Canada (Remote)',
    date: 'December 2023 - June 2024',
    description:
      'View AI is the AI verifier company that helps enterprise customers deliver on the full potential of AI through performance monitoring and optimization, explainability, and bias mitigation.',
    contribution: [
      {
        title: 'Developed and Designed the Entire Landing Page',
        desc: "Crafted a visually compelling and user-friendly landing page, creating the first touchpoint that effectively communicated View AI's mission and value proposition.",
      },
      {
        title: 'Implemented Interactive Dashboard Functionality',
        desc: 'Designed and developed a dynamic dashboard that allows users to upload CSV files, transforming raw data into insightful and interactive visual graphs to assist in decision-making.',
      },
      {
        title: 'Enhanced User Experience',
        desc: 'Focused on refining the user journey across the website, ensuring seamless navigation, data presentation, and overall interaction for enterprise customers.',
      },
    ],
    conclusion:
      "Through my work, I was able to drive both user engagement and customer satisfaction, making the website an essential tool in View AI's mission to empower enterprises with AI-driven solutions.",
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Data Visualization', 'UI/UX'],
  },
];

const educationData = [
  {
    title: 'Bachelor of Business Administration (BBA) in Management',
    institution: 'National University, Bangladesh',
    date: '2016 - 2020',
    description:
      'During my BBA, I gained a strong foundation in business management, focusing on key areas such as leadership, strategic planning, and organizational behavior. This program honed my analytical and problem-solving skills, preparing me to navigate and excel in dynamic business environments.',
  },
  {
    title: 'Master of Business Administration (MBA) in Management',
    institution: 'National University, Bangladesh',
    date: '2020 - 2022',
    description:
      'Building upon my undergraduate education, my MBA deepened my expertise in management with a focus on advanced topics such as corporate strategy, operational efficiency, and data-driven decision-making. This program further sharpened my leadership capabilities and equipped me with the tools to manage and drive organizational success in complex, global business landscapes.',
  },
];

const ExperienceEducationPage = () => {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container py-10 md:py-14 px-4 md:px-10">
        <div className="text-center">
          <SectionHeader
            title="My Journey Through Learning and Work"
            eybrow="Steps of Progress"
            description="An overview of the experiences and learning that have refined my skills and passion"
          />
        </div>

        {/* Experience Section */}
        <div className="relative mt-12 md:mt-24 mb-6">
          <div className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            <Briefcase className="w-5 h-5 text-emerald-300" />
            <span>Professional Experience</span>
          </div>

          {/* Timeline connector */}
          <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300/50 to-sky-400/30 hidden md:block"></div>
        </div>

        <div className="flex flex-col gap-8 relative">
          {experienceData.map((item, index) => (
            <div key={index} className="relative">
              <Card className="transition-all duration-300 hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-900/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-emerald-300 mb-2 flex items-center gap-2">
                      {item.company} •{' '}
                      <span className="text-white/60">{item.location}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60 text-sm">
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    {item.date}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                    Company Overview
                  </h4>
                  <p className="text-white/60 ">{item.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Key Contributions
                  </h4>
                  <ul className="text-white/60 flex flex-col gap-4 mb-6">
                    {item?.contribution?.map((con, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 pl-4 bg-white/5 p-3 rounded-lg border-l-2 border-emerald-300/50 hover:border-emerald-300 transition-all duration-200"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/90 font-medium mb-1">
                            {con.title}
                          </p>
                          <p className="text-white/60">{con.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white/5 rounded-lg mb-4">
                  <h4 className="text-lg font-semibold text-white/90 mb-2 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Conclusion
                  </h4>
                  <p className="text-white/60 pl-4">{item.conclusion}</p>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="relative mt-16 mb-6">
          <div className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            <Award className="w-5 h-5 text-emerald-300" />
            <span>Educational Background</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 relative">
          {educationData.map((item, index) => (
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
                    <p className="text-emerald-300 mb-2">{item.institution}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60 text-sm">
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    {item.date}
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-white/60">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default ExperienceEducationPage;
