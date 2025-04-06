import ArrowDown from '@/assets/icons/arrow-down.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import emojiImage from '@/assets/images/memoji-computer.png';
import Card from '@/components/Card';
import HeroOrbit from '@/components/HeroOrbit';
import PageContainer from '@/components/layout/PageContainer';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Rocket,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <PageContainer scrollable={true}>
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[calc(100dvh)] relative z-0 overflow-y-clip py-16">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-[0.05]"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              height: 'h-100vh',
            }}
          ></div>

          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroOrbit
            size={920}
            rotation={48}
            shouldOrbit
            orbitDuration="54s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-16 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={790}
            rotation={-72}
            shouldOrbit
            orbitDuration="52s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-16 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={780} rotation={130} shouldOrbit orbitDuration="50s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="46s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={610}
            rotation={-35}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-10 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={615} rotation={178} shouldOrbit orbitDuration="40s">
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-50} shouldOrbit orbitDuration="36s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={450}
            rotation={222}
            shouldOrbit
            orbitDuration="34s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-6 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
        </div>

        <div className="z-50 w-full max-w-5xl px-4">
          <div className="flex flex-col items-center">
            <Image
              src={emojiImage || '/placeholder.svg'}
              alt="Person typing using his laptop"
              className="size-[100px]"
            />
            <div className="bg-brand border border-brand-secondary px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-medium">Available for work</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
              Bringing Vision to Life Through Code
            </h1>
            <p className="mt-6 text-center text-white/70 md:text-lg max-w-xl mx-auto">
              Full-stack developer specializing in modern web technologies, data
              visualization, and AI integration. I transform complex challenges
              into elegant, user-centered solutions.
            </p>
          </div>

          {/* Tech Stack Banner */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 border border-emerald-500/20 bg-emerald-500/5 px-5 py-2 rounded-full">
              <span className="text-sm font-medium text-emerald-300">
                Tech Stack:
              </span>
              <div className="flex items-center gap-3">
                <span className="text-white/70 text-sm">React</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 text-sm">Next.js</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 text-sm">Node.js</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Experience Highlight Section */}
          <div className="mt-8 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-emerald-300">
                1.5 Years of Professional Experience
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              <div className="flex flex-col items-center bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300">
                <Code className="size-5 text-emerald-300 mb-2" />
                <span className="text-sm font-medium text-center">
                  Modern Frontend
                </span>
              </div>
              <div className="flex flex-col items-center bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300">
                <Layers className="size-5 text-emerald-300 mb-2" />
                <span className="text-sm font-medium text-center">
                  Full-Stack Apps
                </span>
              </div>
              <div className="flex flex-col items-center bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300">
                <BarChart3 className="size-5 text-emerald-300 mb-2" />
                <span className="text-sm font-medium text-center">
                  Data Visualization
                </span>
              </div>
              <div className="flex flex-col items-center bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300">
                <BrainCircuit className="size-5 text-emerald-300 mb-2" />
                <span className="text-sm font-medium text-center">
                  AI Integration
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-8 gap-4 justify-center">
            <Link
              href="/my-projects"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-6 h-12 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-6 h-12 rounded-xl cursor-pointer hover:bg-emerald-500/20 transition-all duration-300"
            >
              <span>👋</span>
              <span className="font-semibold">Let's connect</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Expertise Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Specialized Expertise
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver exceptional digital
            experiences that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Data Visualization Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
            <p className="text-white/70 mb-4">
              Transforming complex data into intuitive, interactive
              visualizations that enable better decision-making and insights.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Interactive charts and dashboards using Chart.js and D3.js
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Real-time data processing and visualization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Custom visualization components for specific business needs
                </span>
              </li>
            </ul>
          </Card>

          {/* AI Integration Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <BrainCircuit className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-white/70 mb-4">
              Incorporating artificial intelligence capabilities into
              applications to enhance functionality and user experience.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  AI-powered chatbots and virtual assistants
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Integration with OpenAI and other AI APIs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Intelligent data analysis and recommendation systems
                </span>
              </li>
            </ul>
          </Card>

          {/* Performance Optimization Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Performance Optimization
            </h3>
            <p className="text-white/70 mb-4">
              Enhancing application speed, efficiency, and responsiveness to
              provide exceptional user experiences.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Frontend optimization techniques (code splitting, lazy
                  loading)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Database query optimization and caching strategies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Performance monitoring and continuous improvement
                </span>
              </li>
            </ul>
          </Card>

          {/* Modern Frontend Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <Code className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Frontend</h3>
            <p className="text-white/70 mb-4">
              Building responsive, interactive, and visually appealing user
              interfaces with the latest frontend technologies.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  React.js and Next.js for dynamic, server-rendered applications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Tailwind CSS for responsive and customizable designs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Modern state management with Redux and Context API
                </span>
              </li>
            </ul>
          </Card>

          {/* Full-Stack Development Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Full-Stack Development
            </h3>
            <p className="text-white/70 mb-4">
              End-to-end development of web applications with seamless
              integration between frontend and backend.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  MERN stack (MongoDB, Express, React, Node.js)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  RESTful API design and implementation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Authentication, authorization, and security best practices
                </span>
              </li>
            </ul>
          </Card>

          {/* Database Management Card */}
          <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10">
            <div className="bg-emerald-500/10 p-3 rounded-lg inline-flex mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Database Management</h3>
            <p className="text-white/70 mb-4">
              Designing and implementing efficient database solutions for
              optimal data storage and retrieval.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  MongoDB for flexible, scalable NoSQL data storage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Database schema design and optimization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Data migration, backup, and recovery strategies
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Why Work With Me Section */}
        <div className="bg-gradient-to-br from-emerald-900/20 to-sky-900/20 rounded-2xl p-8 border border-emerald-500/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Work With Me?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, creative
              problem-solving, and a commitment to delivering exceptional
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
              <Rocket className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Rapid Development</h3>
              <p className="text-white/70 text-sm">
                Efficient workflows and development practices that deliver
                high-quality results on time and within budget.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
              <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Technical Excellence
              </h3>
              <p className="text-white/70 text-sm">
                Clean, maintainable code with a focus on performance,
                scalability, and best practices.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
              <Globe className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                End-to-End Solutions
              </h3>
              <p className="text-white/70 text-sm">
                Comprehensive development services from concept to deployment
                and ongoing maintenance.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-black font-medium py-3 px-8 rounded-lg hover:from-emerald-600 hover:to-sky-600 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
