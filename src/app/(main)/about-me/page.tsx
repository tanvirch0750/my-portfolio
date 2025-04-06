import ChromeIcon from '@/assets/icons/chrome.svg';
import Github from '@/assets/icons/github.svg';
import NextJsIcon from '@/assets/icons/nextjs-icon-svgrepo-com.svg';
import NodeJsIcon from '@/assets/icons/nodejs-svgrepo-com.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import TechIcon from '@/components/TechIcon';
import PageContainer from '@/components/layout/PageContainer';
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Code,
  ExternalLink,
  Heart,
  Lightbulb,
  MapPinIcon as MapPinHouseIcon,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';

const toolboxItems = [
  {
    title: 'Javascript',
    icon: JavascriptIcon,
    level: 'Advanced',
  },
  {
    title: 'React',
    icon: ReactIcon,
    level: 'Advanced',
  },
  {
    title: 'Next.js',
    icon: NextJsIcon,
    level: 'Advanced',
  },
  {
    title: 'Node.js',
    icon: NodeJsIcon,
    level: 'Intermediate',
  },
  {
    title: 'Chrome',
    icon: ChromeIcon,
    level: 'Advanced',
  },
  {
    title: 'Github',
    icon: Github,
    level: 'Intermediate',
  },
];

const additionalSkills = [
  'MongoDB',
  'Express.js',
  'Redux',
  'Tailwind CSS',
  'TypeScript',
  'REST API',
  'Responsive Design',
  'UI/UX',
  'Git',
  'Chart.js',
  'D3.js',
];

const hobbies = [
  {
    title: 'Watching Football',
    emoji: '⚽',
  },
  {
    title: 'Gardening',
    emoji: '🥕',
  },
  {
    title: 'Music',
    emoji: '🎺',
  },
  {
    title: 'Movies & Shows',
    emoji: '📺',
  },
  {
    title: 'Reading Books',
    emoji: '📚',
  },
  {
    title: 'Exercise',
    emoji: '🏃🏾‍♂️',
  },
  {
    title: 'Exploring AI World',
    emoji: '🤖',
  },
];

const experienceHighlights = [
  {
    company: 'Standard Insights',
    position: 'Fullstack Developer (MERN)',
    period: 'Oct 2024 - Present',
    highlight:
      'Building full-stack applications with data visualization capabilities using the MERN stack.',
  },
  {
    company: 'View AI',
    position: 'Front-End Developer Intern',
    period: 'Dec 2023 - Jun 2024',
    highlight:
      'Developed interactive dashboards and landing pages for an AI verification platform.',
  },
];

const achievements = [
  "Developed a complete landing page for View AI that effectively communicated the company's mission",
  'Created interactive data visualization dashboards that transformed complex data into actionable insights',
  'Built scalable MERN stack applications with optimized performance and responsive design',
  'Implemented systematic debugging processes to resolve critical system bugs',
];

export default function AboutMePage() {
  return (
    <PageContainer scrollable={true}>
      <section className="py-10 md:py-14">
        <SectionHeader
          eybrow="Get to Know Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what drives my passion for development"
        />

        <div className="text-white lg:container mt-12 px-4 md:px-10">
          {/* Profile Summary Card */}
          <Card className="border-emerald-300/20 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <h2 className="text-xl font-semibold">
                    Mohammad Tanvir Chowdhury
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">
                    Full-Stack Developer | MERN Specialist | 1.5 Years
                    Experience
                  </span>
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in
                  building scalable and high-performance web applications using
                  modern technologies such as JavaScript, TypeScript, React,
                  Node.js, and MongoDB. My strong foundation in front-end and
                  back-end development, paired with experience in designing
                  RESTful APIs, ensures seamless integration and optimal user
                  experiences.
                </p>

                <p className="text-white/80 mb-4 leading-relaxed">
                  With a sharp focus on clean code, maintainability, and
                  continuous learning, I love working in dynamic environments
                  and enjoy solving complex problems. I am driven by innovation
                  and collaboration, consistently seeking to improve processes
                  and deliver exceptional results that align with business
                  goals.
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPinHouseIcon className="text-emerald-400" size={18} />
                    <span className="text-white/60">Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="text-emerald-400" size={18} />
                    <span className="text-white/60">Available for work</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <span>Contact Me</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>

                <Link
                  href="/my-projects"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <span>View Projects</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>

                <Link
                  href="/experience-education"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <span>Full Experience</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Experience Highlights */}
          <Card className="mb-8 border-emerald-300/20">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-emerald-400" size={20} />
              <h2 className="text-lg font-semibold">Experience Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceHighlights.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-lg border-l-2 border-emerald-400"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-emerald-300">
                      {exp.position}
                    </h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                  <p className="text-white/80 text-sm">{exp.highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-emerald-400" size={18} />
                <h3 className="font-medium">Key Achievements</h3>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <div className="lg:container mt-8 px-4 md:px-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="md:col-span-2 border-emerald-300/20 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="text-emerald-400" size={20} />
                <h2 className="font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  What Inspires Me
                </h2>
              </div>
              <p className="text-sm mt-3 text-white/70 leading-relaxed">
                I'm inspired by the opportunity to help people through my work.
                Seeing how technology can make a positive impact on lives
                motivates me to create solutions that solve real problems and
                improve experiences. The chance to contribute to meaningful
                change and support others drives my passion for development.
                Every project is an opportunity to make a difference, and that's
                what keeps me going.
              </p>
            </Card>

            <Card className="md:col-span-3 border-emerald-300/20 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-emerald-400" size={20} />
                  <h2 className="font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    My Toolbox
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  From front-end to back-end development, these skills allow me
                  to build responsive, performant, and scalable web
                  applications.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {toolboxItems?.map((item) => (
                  <div
                    key={item?.title}
                    className="flex flex-col items-center gap-2 py-3 px-3 bg-white/5 outline outline-1 outline-white/10 rounded-lg hover:outline-emerald-300/30 transition-all duration-200"
                  >
                    <TechIcon component={item.icon} />
                    <div className="text-center">
                      <div className="font-medium text-sm">{item?.title}</div>
                      <div className="text-xs text-emerald-300">
                        {item.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium text-white/70 mb-2">
                  Additional Skills:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-md border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 border-emerald-300/20 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="text-emerald-400" size={20} />
                  <h2 className="font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    Beyond the Code
                  </h2>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Explore my interests and hobbies beyond the digital realm
                </p>
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                {hobbies?.map((item) => (
                  <div
                    key={item?.title}
                    className="inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300/90 to-sky-400/90 rounded-full py-1.5 hover:from-emerald-300 hover:to-sky-400 transition-all duration-200"
                  >
                    <span className="font-medium text-gray-950">
                      {item?.title}
                    </span>
                    <span>{item?.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="md:col-span-2 border-emerald-300/20 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="text-emerald-400" size={20} />
                <h2 className="font-bold uppercase tracking-widest text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  What I Enjoy
                </h2>
              </div>
              <p className="text-sm mt-3 text-white/70 leading-relaxed">
                I'm passionate about staying ahead of the curve in technology,
                and I love diving into tech blogs to explore the latest trends,
                innovations, and best practices. Reading these insights not only
                keeps me informed but also fuels my curiosity and drives me to
                continually enhance my skills and knowledge. It's through these
                learnings that I find new ways to innovate and deliver better
                solutions in my work.
              </p>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-emerald-900/30 to-sky-900/30 rounded-xl p-6 border border-emerald-500/20">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Ready to collaborate?
              </h2>
              <p className="text-white/70">
                Let's discuss how my skills and experience can help bring your
                vision to life
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-6 rounded-lg transition-colors"
              >
                <span>Contact Me</span>
                <ExternalLink className="w-4 h-4" />
              </Link>

              <Link
                href="/my-projects"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                <span>View My Projects</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
