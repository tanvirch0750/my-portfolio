import PageContainer from '@/components/layout/PageContainer';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import emojiImage from '@/assets/images/memoji-computer.png';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';

export default function Home() {
  return (
    <PageContainer scrollable={true}>
      <div className=" flex items-center justify-center h-[calc(100dvh)] relative z-0 overflow-y-clip">
        <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
          <div
            className=" absolute inset-0 -z-30 opacity-[0.05]"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              height: 'h-100vh',
            }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroOrbit size={800} rotation={-72}>
            <StarIcon className=" size-24 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={140}>
            <StarIcon className=" size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={610} rotation={-35}>
            <StarIcon className=" size-10 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98}>
            <StarIcon className=" size-8 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={430} rotation={-14}>
            <SparkleIcon className=" size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}>
            <SparkleIcon className=" size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className=" size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className=" size-14 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85}>
            <div className=" size-14 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-50}>
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={650} rotation={-5}>
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>

        <div className="z-50">
          <div className="flex flex-col items-center">
            <Image
              src={emojiImage}
              alt="Person typing using his laptop"
              className="size-[100px]"
            />
            <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className=" bg-green-500 size-2.5 rounded-full"></div>
              <div className=" text-sm font-medium">
                Available for new projects
              </div>
            </div>
          </div>

          <div className=" max-w-lg mx-auto">
            <h1 className=" font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
              Building Exceptional user Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming desings into functional,
              high-performing web applications. Let's discuss your next project.
            </p>
          </div>

          <div className=" flex flex-col md:flex-row items-center mt-8 gap-4 justify-center">
            <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
              <span className=" font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's connect</span>
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
