import PageContainer from '@/components/layout/PageContainer';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { projectsData } from '@/constant/data';

export default function MyProjectsPage() {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container py-10 md:py-14 px-4 md:px-10 ">
        <SectionHeader
          title="Turning Ideas into Reality"
          eybrow="Project Highlights"
          description=" Explore the innovative projects I’ve successfully built, demonstrating
          my ability to solve real-world problems."
        />

        <div className=" flex flex-col mt-10 md:mt-16 gap-20 ">
          {projectsData?.map((project, pIndex) => (
            <Card
              key={project?.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-12 lg:px-12 sticky"
              style={{
                top: `calc(64px + ${pIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                    <span>{project?.company}</span>
                    <span>&bull;</span>
                    <span>{project?.year}</span>
                    <span className="hidden md:block">&bull;</span>
                    <span className="hidden md:block">{project?.type}</span>
                  </div>

                  <h3 className=" font-serif text-2xl md:text-4xl mt-2 md:mt-5 tracking-wide">
                    {project?.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project?.keyConcepts?.map((result) => (
                      <li
                        key={result?.title}
                        className=" flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span>
                          <CheckIcon className="size-5 md:size-6" />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className=" mt-8">
                    {/* <Link
                  href="/"
                  className=" bg-white text-brand h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                >
                  <span className=" font-semibold">Explore My Work</span>
                  <ArrowRightIcon className="size-4" />
                </Link> */}
                    <Link
                      href={`/my-projects/${project?.tag}`}
                      className=" bg-white text-brand h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6"
                    >
                      <ArrowRight className="size-4 " />
                      <span>Project Details</span>
                    </Link>
                  </div>
                </div>
                <div className=" relateive ">
                  <Image
                    src={project.heroImg}
                    alt={project?.title}
                    className=" mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl border-white/20 border-2"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
