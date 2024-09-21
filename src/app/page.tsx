import PageContainer from '@/components/layout/PageContainer';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import emojiImage from '@/assets/images/memoji-computer.png';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';
import Link from 'next/link';

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

          <HeroOrbit
            size={920}
            rotation={48}
            shouldOrbit
            orbitDuration="54s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className=" size-16 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={790}
            rotation={-72}
            shouldOrbit
            orbitDuration="52s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className=" size-16 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={780} rotation={130} shouldOrbit orbitDuration="50s">
            <SparkleIcon className=" size-14 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s">
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="46s">
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={610}
            rotation={-35}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className=" size-10 text-emerald-300" />
          </HeroOrbit>

          {/* <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="42s">
            <StarIcon className=" size-8 text-emerald-300" />
          </HeroOrbit> */}

          <HeroOrbit size={615} rotation={178} shouldOrbit orbitDuration="40s">
            <SparkleIcon className=" size-10 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className=" size-8 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-50} shouldOrbit orbitDuration="36s">
            <div className=" size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit
            size={450}
            rotation={222}
            shouldOrbit
            orbitDuration="34s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className=" size-6 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
            <SparkleIcon className=" size-5 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
            <SparkleIcon className=" size-8 text-emerald-300/20" />
          </HeroOrbit>
        </div>

        <div className="z-50">
          <div className="flex flex-col items-center">
            <Image
              src={emojiImage}
              alt="Person typing using his laptop"
              className="size-[100px]"
            />
            <div className=" bg-brand border border-brand-secondary px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className=" bg-green-500 size-2.5 rounded-full relative">
                <div className=" bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className=" text-sm font-medium">Available for work</div>
            </div>
          </div>

          <div className=" max-w-lg mx-auto">
            <h1 className=" font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
              Bringing Vision to Life Through Code
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I bring ideas to life by merging technology with human-centered
              design, creating solutions that connect, inspire, and solve
              real-world challenges. Together, we’ll turn your vision into
              impactful applications.
            </p>
          </div>

          <div className=" flex flex-col md:flex-row items-center mt-8 gap-4 justify-center">
            <Link
              href="/my-projects"
              className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
            >
              <span className=" font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </Link>
            <Link
              href="/contact"
              className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
            >
              <span>👋</span>
              <span className="font-semibold">Let's connect</span>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
