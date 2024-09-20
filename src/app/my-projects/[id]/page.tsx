import PageContainer from '@/components/layout/PageContainer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { MoveUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DemoImg from '@/assets/projects/meet-ease/me1.png';
import Card from '@/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProjectDetailPage() {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container pt-3 pb-10 px-4 md:px-10 ">
        <div className=" bg-brand text-white px-2 sm:px-2 py-8">
          {/* Back to List Link */}
          <Link
            href="/my-projects"
            className="text-sm pb-8 text-white/50 hover:text-white flex items-center mb-6 border-b border-brand-secondary"
          >
            <span className="mr-2">{'<'}</span> Back to list
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl font-bold mb-8 mt-12">
            New Financial System
          </h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-8 mb-12">
            {/* Date */}
            <div className="sm:col-span-2 hidden md:block">
              <h4 className="text-white/50 text-sm mb-2">Date</h4>
              <p className="text-white/70">2023 - 2024</p>
            </div>

            {/* Service */}
            <div className="col-span-7 md:col-span-5">
              <h4 className="text-white/50 text-sm mb-2">Core Technologies</h4>
              <p className="text-white/70">
                Next.js, Typescript, Redux, Ant Design, Node Js, Express,
                PostgreSQL, Prisma and JWT
              </p>
            </div>

            {/* Client */}
            {/* <div>
              <h4 className="text-gray-400 text-sm mb-2">Core Technologies</h4>
              <p className="">React js & Node Js</p>
            </div> */}
          </div>

          {/* Live Preview Button */}
          <div className=" flex flex-wrap gap-2 md:gap-8">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 hover:bg-gray-700 rounded-lg text-white text-sm transition"
            >
              Live Preview
              <MoveUpRightIcon className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 hover:bg-gray-700 rounded-lg text-white text-sm transition"
            >
              Github Frontend
              <MoveUpRightIcon className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 hover:bg-gray-700 rounded-lg text-white text-sm transition"
            >
              Github Server
              <MoveUpRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        <div className=" bg-brand text-white px-2 sm:px-2 py-8">
          <div>
            <h2 className=" text-2xl font-semibold mb-4">Overview</h2>
            <p className=" text-white/60">
              This is house related service Booking and Management. A one-stop
              platform offering a wide range of house servicing options,
              user-friendly registration and booking features, and a review
              system for service quality. The project provides robust
              administrative tools, allowing admins to manage users, services,
              and bookings. Super admins have the ability to add and manage
              admin users, ensuring efficient control of the platform's
              activities. Prioritizing user experience with an intuitive booking
              system, user dashboard, and feedback forms. Backend integration of
              Node.js, Prisma, PostgreSQL, and Next.js on the frontend ensures
              efficiency and a responsive interface.
            </p>
          </div>

          <Card className=" p-0 rounded-xl mt-8">
            <Image
              src={DemoImg}
              alt="Photo by Drew Beamer"
              className="h-full w-full object-contain rounded-xl"
            />
          </Card>

          <div className=" mt-8">
            <h2 className=" text-2xl font-semibold mb-4">
              Users Pages and Features
            </h2>
            <ul className=" flex flex-col gap-2 text-white/60">
              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>
            </ul>

            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card className=" p-0 rounded-xl mt-8">
                        <Image
                          src={DemoImg}
                          alt="Photo by Drew Beamer"
                          className="h-full w-full object-contain rounded-xl"
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
                <CarouselNext className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
              </Carousel>
            </div>
          </div>

          <div className=" mt-8">
            <h2 className=" text-2xl font-semibold mb-4">
              Admin Pages and Features
            </h2>
            <ul className=" flex flex-col gap-2 text-white/60">
              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>

              <li className=" flex items-start gap-3">
                {' '}
                <span className=" mt-[5px]">
                  <CheckCircledIcon />
                </span>{' '}
                <span>
                  Home: A vibrant and dynamic introduction to your portfolio,
                  featuring interactive elements that immediately capture
                  attention.
                </span>
              </li>
            </ul>

            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card className=" p-0 rounded-xl mt-8">
                        <Image
                          src={DemoImg}
                          alt="Photo by Drew Beamer"
                          className="h-full w-full object-contain rounded-xl"
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
                <CarouselNext className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
              </Carousel>
            </div>
          </div>

          <div className=" mt-8">
            <h2 className=" text-2xl font-semibold mb-4">Conclusion</h2>
            <p className=" text-white/60">
              This is house related service Booking and Management. A one-stop
              platform offering a wide range of house servicing options,
              user-friendly registration and booking features, and a review
              system for service quality. The project provides robust
              administrative tools, allowing admins to manage users, services,
              and bookings. Super admins have the ability to add and manage
              admin users, ensuring efficient control of the platform's
              activities. Prioritizing user experience with an intuitive booking
              system, user dashboard, and feedback forms. Backend integration of
              Node.js, Prisma, PostgreSQL, and Next.js on the frontend ensures
              efficiency and a responsive interface.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
