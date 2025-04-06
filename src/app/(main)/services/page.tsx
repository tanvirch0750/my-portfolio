import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import PageContainer from '@/components/layout/PageContainer';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Code,
  Database,
  Layers,
  MessageSquare,
  Rocket,
  Smartphone,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="w-10 h-10 text-emerald-400" />,
    title: 'Frontend Development',
    description:
      'Creating responsive, interactive, and visually appealing user interfaces that provide exceptional user experiences across all devices.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    benefits: [
      'Responsive designs that work on all devices',
      'Interactive and engaging user interfaces',
      'Fast-loading and optimized applications',
      'Accessible and SEO-friendly websites',
    ],
  },
  {
    icon: <Database className="w-10 h-10 text-emerald-400" />,
    title: 'Backend Development',
    description:
      'Building robust server-side applications and APIs that power your digital products with security, performance, and scalability in mind.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    benefits: [
      'Secure and scalable backend systems',
      'Efficient database design and optimization',
      'RESTful API development and integration',
      'Authentication and authorization systems',
    ],
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-emerald-400" />,
    title: 'AI Integration',
    description:
      'Enhancing your applications with artificial intelligence capabilities to provide smarter, more personalized user experiences and automate complex tasks.',
    technologies: ['OpenAI API', 'AI SDK', 'LangChain', 'Vector Databases'],
    benefits: [
      'Intelligent chatbots and virtual assistants',
      'Content generation and summarization',
      'Personalized recommendations',
      'Automated data analysis and insights',
    ],
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-emerald-400" />,
    title: 'Data Visualization',
    description:
      'Transforming complex data into intuitive visual representations that help you gain insights and make informed decisions.',
    technologies: [
      'Chart.js',
      'D3.js',
      'Interactive Dashboards',
      'Real-time Data',
    ],
    benefits: [
      'Interactive and dynamic charts and graphs',
      'Custom dashboard development',
      'Real-time data visualization',
      'Complex data made simple and actionable',
    ],
  },
  {
    icon: <Layers className="w-10 h-10 text-emerald-400" />,
    title: 'Full-Stack Development',
    description:
      'End-to-end development of web applications using the MERN stack (MongoDB, Express.js, React, Node.js) for seamless integration.',
    technologies: ['MERN Stack', 'Redux', 'RESTful APIs', 'Authentication'],
    benefits: [
      'Cohesive development from frontend to backend',
      'Consistent data flow throughout the application',
      'Optimized performance across the entire stack',
      'Scalable architecture for future growth',
    ],
  },
  {
    icon: <Smartphone className="w-10 h-10 text-emerald-400" />,
    title: 'Responsive Web Design',
    description:
      'Designing websites that provide optimal viewing and interaction experience across a wide range of devices from desktop to mobile.',
    technologies: [
      'Mobile-First Design',
      'CSS Grid',
      'Flexbox',
      'Media Queries',
    ],
    benefits: [
      'Consistent experience across all devices',
      'Improved user engagement and retention',
      'Better SEO rankings with mobile-friendly sites',
      'Future-proof designs that adapt to new devices',
    ],
  },
  {
    icon: <Rocket className="w-10 h-10 text-emerald-400" />,
    title: 'Performance Optimization',
    description:
      'Enhancing the speed, efficiency, and overall performance of your web applications to provide the best user experience.',
    technologies: [
      'Code Splitting',
      'Lazy Loading',
      'Caching',
      'Bundle Optimization',
    ],
    benefits: [
      'Faster page load times and better user experience',
      'Reduced bounce rates and improved conversions',
      'Better SEO rankings with performance metrics',
      'Optimized resource usage and cost efficiency',
    ],
  },
];

const processSteps = [
  {
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    title: 'Consultation',
    description:
      "We'll discuss your project requirements, goals, and expectations to ensure we're aligned on the vision.",
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    title: 'Planning & Design',
    description:
      "I'll create a detailed plan and design mockups for your approval before starting development.",
  },
  {
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: 'Development',
    description:
      "Using the latest technologies, I'll build your solution with regular updates and feedback sessions.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures your product is bug-free, secure, and performs optimally across all devices.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
    title: 'Deployment',
    description:
      "I'll handle the deployment process, ensuring a smooth transition to your production environment.",
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: 'Maintenance & Support',
    description:
      'Ongoing support and maintenance to keep your application running smoothly and up-to-date.',
  },
];

export default function ServicesPage() {
  return (
    <PageContainer scrollable={true}>
      <section className="py-10 md:py-14">
        <div className="text-center">
          <SectionHeader
            eybrow="What I Offer"
            title="Services Tailored to Your Needs"
            description="Comprehensive web development solutions to help bring your vision to life"
          />
        </div>

        {/* Services Overview */}
        <div className="lg:container mt-12 px-4 md:px-10">
          {/* Hero Service Card */}
          <Card className="border-emerald-300/20 mb-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  Transform Your Ideas into Reality
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  I specialize in building modern, high-performance web
                  applications using the latest technologies. Whether you need a
                  complete full-stack solution, a responsive frontend, or data
                  visualization capabilities, I deliver tailored services that
                  meet your specific requirements and exceed your expectations.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">
                      1.5+ years of experience
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">MERN stack specialist</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">
                      Data visualization expert
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">
                      AI integration capabilities
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-black font-medium py-2.5 px-6 rounded-lg transition-all hover:from-emerald-600 hover:to-sky-600"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="md:w-1/3 bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>Quick Response Time</span>
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  I understand the importance of timely communication. Expect a
                  response to your inquiry within 24 hours.
                </p>
                <div className="h-px w-full bg-white/10 my-4"></div>
                <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span>Efficient Delivery</span>
                </h3>
                <p className="text-white/70 text-sm">
                  Clear timelines and milestones ensure your project progresses
                  smoothly and is delivered on schedule.
                </p>
              </div>
            </div>
          </Card>

          {/* Featured AI Integration Service */}
          <Card className="border-emerald-300/20 mb-12 overflow-hidden relative bg-gradient-to-br from-emerald-900/20 to-sky-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center justify-center">
                <div className="bg-white/5 p-6 rounded-full mb-4 border border-emerald-500/20">
                  <BrainCircuit className="w-16 h-16 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">
                  AI Integration
                </h3>
                <p className="text-white/70 text-center">
                  Elevate your applications with artificial intelligence
                </p>
              </div>

              <div className="md:w-2/3">
                <p className="text-white/80 mb-6 leading-relaxed">
                  Integrate cutting-edge AI capabilities into your applications
                  to enhance user experiences, automate tasks, and gain valuable
                  insights from your data. From intelligent chatbots to content
                  generation and personalized recommendations, AI can transform
                  your digital products.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-medium text-emerald-300 mb-2">
                      Intelligent Chatbots
                    </h4>
                    <p className="text-white/70 text-sm">
                      Implement AI-powered chatbots that can understand user
                      queries, provide relevant information, and assist with
                      common tasks.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-medium text-emerald-300 mb-2">
                      Content Generation
                    </h4>
                    <p className="text-white/70 text-sm">
                      Automate content creation for blogs, product descriptions,
                      emails, and more with AI that matches your brand voice.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-medium text-emerald-300 mb-2">
                      Personalized Recommendations
                    </h4>
                    <p className="text-white/70 text-sm">
                      Deliver tailored content and product recommendations based
                      on user behavior and preferences.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-medium text-emerald-300 mb-2">
                      Data Analysis
                    </h4>
                    <p className="text-white/70 text-sm">
                      Extract insights from your data with AI-powered analysis
                      tools that identify patterns and trends.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
                    OpenAI API
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
                    AI SDK
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
                    LangChain
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
                    Vector Databases
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
                    Natural Language Processing
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-black font-medium py-2.5 px-6 rounded-lg transition-all hover:from-emerald-600 hover:to-sky-600"
                >
                  <span>Discuss AI Integration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10 flex flex-col"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="mt-4 mb-4">
                  <h4 className="text-sm font-medium text-emerald-300 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-md border border-emerald-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-emerald-300 mb-2">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* My Process Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                My Development Process
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                A structured approach to ensure your project is delivered
                efficiently, on time, and to the highest standards
              </p>
            </div>

            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300/50 to-sky-400/30 hidden md:block"></div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 top-6 w-4 h-4 rounded-full bg-emerald-300 hidden md:block"
                      style={{ transform: 'translateX(-50%)' }}
                    ></div>

                    <Card className="md:ml-12 border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/5 p-3 rounded-lg">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Answers to common questions about my services and process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-white/70">
                  Project timelines vary based on complexity and scope. A simple
                  website might take 2-3 weeks, while a complex full-stack
                  application could take 2-3 months. I'll provide a detailed
                  timeline during our initial consultation.
                </p>
              </Card>

              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  What is your pricing structure?
                </h3>
                <p className="text-white/70">
                  I offer both project-based and hourly pricing options.
                  Project-based pricing is determined after understanding your
                  requirements, while hourly rates are available for ongoing
                  work or smaller tasks. Contact me for a personalized quote.
                </p>
              </Card>

              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  Do you provide ongoing maintenance?
                </h3>
                <p className="text-white/70">
                  Yes, I offer ongoing maintenance and support services to
                  ensure your application continues to run smoothly. This
                  includes bug fixes, security updates, and minor feature
                  enhancements.
                </p>
              </Card>

              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  How do we communicate during the project?
                </h3>
                <p className="text-white/70">
                  I maintain regular communication through your preferred
                  channels (email, Slack, etc.). You'll receive weekly progress
                  updates, and we'll schedule check-in meetings to review work
                  and gather feedback.
                </p>
              </Card>

              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  What AI technologies do you work with?
                </h3>
                <p className="text-white/70">
                  I work with a range of AI technologies including OpenAI's GPT
                  models, the AI SDK, LangChain for building AI applications,
                  and vector databases for efficient similarity search. I can
                  help you choose the right AI solution based on your specific
                  needs and budget.
                </p>
              </Card>

              <Card className="border-emerald-300/10 hover:border-emerald-300/30 transition-all duration-300">
                <h3 className="text-lg font-medium mb-3">
                  How can AI benefit my business?
                </h3>
                <p className="text-white/70">
                  AI can benefit your business in numerous ways, from automating
                  repetitive tasks to providing personalized user experiences.
                  It can help analyze large datasets to uncover insights,
                  improve customer service with intelligent chatbots, generate
                  content, and enhance decision-making processes.
                </p>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-sky-900/30 rounded-xl p-8 border border-emerald-500/20 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Let's discuss how I can help bring your vision to life with
              tailored web development solutions that meet your specific needs
              and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-black font-medium py-2.5 px-6 rounded-lg transition-all hover:from-emerald-600 hover:to-sky-600"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/my-projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
