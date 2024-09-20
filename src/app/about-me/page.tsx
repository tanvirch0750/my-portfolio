import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import PageContainer from '@/components/layout/PageContainer';
import { MapPinHouseIcon } from 'lucide-react';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import ReactIcon from '@/assets/icons/react.svg';
import Github from '@/assets/icons/github.svg';
import TechIcon from '@/components/TechIcon';
import NextJsIcon from '@/assets/icons/nextjs-icon-svgrepo-com.svg';
import NodeJsIcon from '@/assets/icons/nodejs-svgrepo-com.svg';

const toolboxItems = [
  {
    title: 'Javascript',
    icon: JavascriptIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Next Js',
    icon: NextJsIcon,
  },
  {
    title: 'Node Js',
    icon: NodeJsIcon,
  },
  {
    title: 'Chrome',
    icon: ChromeIcon,
  },
  {
    title: 'Github',
    icon: Github,
  },
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
    title: 'Exercize',
    emoji: '🏃🏾‍♂️‍➡️',
  },
];

export default function AboutMePage() {
  return (
    <PageContainer scrollable={true}>
      <section className=" py-10 md:py-14">
        <SectionHeader
          eybrow=" Get to Know Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspire me"
        />
        <div className=" text-white lg:container mt-12 px-4 md:px-10">
          <div className="  mt-8">
            <p className=" text-white font-light mb-6">
              Hello, I'm{' '}
              <span className=" text-emerald-400">
                Mohammad Tanvir Chowdhury
              </span>
              , and I am a passionate full-stack developer with expertise in
              building scalable and high-performance web applications using
              modern technologies such as JavaScript, TypeScript, React,
              Node.js, and MongoDB. My strong foundation in front-end and
              back-end development, paired with experience in designing RESTful
              APIs, ensures seamless integration and optimal user experiences.
            </p>
            <p className=" mb-6 text-white font-light">
              With a sharp focus on clean code, maintainability, and continuous
              learning, I love working in dynamic environments and enjoy solving
              complex problems. I am driven by innovation and collaboration,
              consistently seeking to improve processes and deliver exceptional
              results that align with business goals.
            </p>
            <div className="grid grid-cols-12 items-center ">
              <div className="col-span-6 lg:col-span-3 flex  items-center gap-4">
                <MapPinHouseIcon className=" text-emerald-400" size={20} />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </div>

              <div className="bg-brand-secondary w-full h-[1px] col-span-9 hidden lg:block">
                &nbsp;
              </div>
            </div>
          </div>
        </div>

        <div className="lg:container mt-12 px-4 md:px-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
            <Card className=" md:col-span-2">
              <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-lg  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                <span>&bull;</span>
                <span>What Inspires Me</span>
              </div>
              <p className=" text-sm mt-3 text-white/70">
                I’m inspired by the opportunity to help people through my work.
                Seeing how technology can make a positive impact on lives
                motivates me to create solutions that solve real problems and
                improve experiences. The chance to contribute to meaningful
                change and support others drives my passion for development.
                Every project is an opportunity to make a difference, and that’s
                what keeps me going.
              </p>
            </Card>

            <Card className=" md:col-span-3 ">
              <div className="">
                <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-lg  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                  <span>&bull;</span>
                  <span>My Toolbox</span>
                </div>
                <p className=" text-sm text-white/60 mt-2">
                  From front-end to back-end development, these skills allow me
                  to build responsive, performant, and scalable web
                  applications.
                </p>
              </div>
              <div className="mt-6">
                <div className=" flex gap-4 flex-wrap">
                  {toolboxItems?.map((item) => (
                    <div
                      key={item?.title}
                      className=" inline-flex items-center gap-4 py-2 px-3  outline outline-2 outline-white/10 rounded-lg"
                    >
                      <TechIcon component={item.icon} />
                      <span className=" font-semibold">{item?.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className=" md:col-span-3">
              <div>
                <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-lg  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                  <span>&bull;</span>
                  <span>Beyond the Code</span>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  Explore my interests and hobbies beyond the digital realm
                </p>
              </div>
              <div className=" mt-6 flex gap-4 flex-wrap">
                {hobbies?.map((item) => (
                  <div
                    key={item?.title}
                    className=" inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                  >
                    <span className=" font-medium text-gray-950">
                      {item?.title}
                    </span>
                    <span>{item?.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className=" md:col-span-2">
              <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-lg  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                <span>&bull;</span>
                <span>What I Enjoy</span>
              </div>
              <p className=" text-sm mt-3 text-white/70">
                I’m passionate about staying ahead of the curve in technology,
                and I love diving into tech blogs to explore the latest trends,
                innovations, and best practices. Reading these insights not only
                keeps me informed but also fuels my curiosity and drives me to
                continually enhance my skills and knowledge. It’s through these
                learnings that I find new ways to innovate and deliver better
                solutions in my work.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
