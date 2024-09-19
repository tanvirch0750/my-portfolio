import PageContainer from '@/components/layout/PageContainer';
import { portfolioProjects } from '@/sections/Projects';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function MyProjectsPage() {
  return (
    <PageContainer scrollable={true}>
      <section className="container py-10 md:py-20">
        <div className=" flex justify-center">
          <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
            Real-world Results
          </p>
        </div>

        <h2 className=" font-serif text-3xl md:text-5xl mt-6 text-center tracking-wide">
          Featured Projects
        </h2>
        <p className="  text-white/60 mt-4 text-center md:text-lg max-w-md mx-auto">
          These are the projects that I have worked on in the past or the ones
          that I am presently working on
        </p>

        <div className=" flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects?.map((project) => (
            <div
              key={project?.title}
              className=" bg-brand-secondary  rounded-3xl relative overflow-hidden z-0 after:content-['']  after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className=" absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm  bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">
                    <span>{project?.company}</span>
                    <span>&bull;</span>
                    <span>{project?.year}</span>
                  </div>

                  <h3 className=" font-serif text-2xl md:text-4xl mt-2 md:mt-5 tracking-wide">
                    {project?.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project?.results?.map((result) => (
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
                      href={project?.link}
                      className=" bg-white text-brand h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6"
                    >
                      <ArrowRight className="size-4 " />
                      <span>Visit Live Site</span>
                    </Link>
                  </div>
                </div>
                <div className=" relative">
                  <Image
                    src={project.image}
                    alt={project?.title}
                    className=" mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
