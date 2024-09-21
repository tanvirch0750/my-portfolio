import PageContainer from '@/components/layout/PageContainer';
import { CheckCircle, MoveUpRightIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import ProjectCarousel from '@/components/ProjectCarousel';
import { projectsData } from '@/constant/data';

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [project] = projectsData?.filter((item) => item?.tag === params?.id);

  console.log(project);

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
          <h1 className="text-3xl font-bold mb-8 mt-12">
            {project?.title} - {project?.type}
          </h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-8 mb-12">
            {/* Date */}
            <div className="sm:col-span-2 hidden md:block">
              <h4 className="text-white/50 text-sm mb-2">Date</h4>
              <p className="text-white/70">{project?.year}</p>
            </div>

            {/* Service */}
            <div className="col-span-7 md:col-span-5">
              <h4 className="text-white/50 text-sm mb-2">Core Technologies</h4>
              <p className="text-white/70">{project?.technologies}</p>
            </div>

            {/* Client */}
            {/* <div>
              <h4 className="text-gray-400 text-sm mb-2">Core Technologies</h4>
              <p className="">React js & Node Js</p>
            </div> */}
          </div>

          {/* Live Preview Button */}
          <div className=" flex flex-wrap gap-2 md:gap-8">
            {project?.links?.map((link) => (
              <Link
                key={link?.title}
                href={link?.link}
                className="inline-flex items-center px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 hover:bg-brand-secondary rounded-lg text-white text-sm transition"
              >
                {link.title}
                <MoveUpRightIcon className="w-5 h-5 ml-2" />
              </Link>
            ))}
          </div>
        </div>

        <div className=" bg-brand text-white px-2 sm:px-2 py-8">
          <div>
            <h2 className=" text-2xl font-semibold mb-4">Overview</h2>
            <p className=" text-white/60">{project?.overview}</p>
          </div>

          <Card className=" p-0 rounded-xl mt-8">
            <Image
              src={project?.heroImg}
              alt="Photo by Drew Beamer"
              className="h-full w-full object-contain rounded-xl"
            />
          </Card>

          <div className=" mt-16">
            <h2 className=" text-2xl font-semibold mb-4">
              Users Pages and Features
            </h2>
            <ul className=" flex flex-col gap-3 text-white/60">
              {project?.usersFeatures?.featrues?.map((feature, idx) => (
                <li className=" flex items-center gap-4" key={idx}>
                  {' '}
                  <span className="">
                    <CheckCircle className=" text-emerald-300" size={18} />
                  </span>{' '}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div>
              <ProjectCarousel
                images={project?.usersFeatures?.images as StaticImageData[]}
              />
            </div>
          </div>

          {project?.adminFeatures && (
            <div className=" mt-16">
              <h2 className=" text-2xl font-semibold mb-4">
                Admin Pages and Features
              </h2>
              <ul className=" flex flex-col gap-3 text-white/60">
                {project?.adminFeatures?.featrues?.map((feature, idx) => (
                  <li className=" flex items-center gap-4" key={idx}>
                    {' '}
                    <span className="">
                      <CheckCircle className=" text-emerald-300" size={18} />
                    </span>{' '}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <ProjectCarousel
                  images={project?.adminFeatures?.images as StaticImageData[]}
                />
              </div>
            </div>
          )}

          {project?.securityFeatures && (
            <div className=" mt-16">
              <h2 className=" text-2xl font-semibold mb-4">
                Security Features
              </h2>
              <ul className=" flex flex-col gap-3 text-white/60">
                {project?.securityFeatures?.featrues?.map((feature, idx) => (
                  <li className=" flex items-center gap-4" key={idx}>
                    {' '}
                    <span className="">
                      <CheckCircle className=" text-emerald-300" size={18} />
                    </span>{' '}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className=" mt-16">
            <h2 className=" text-2xl font-semibold mb-4">Conclusion</h2>
            <p className=" text-white/60">{project?.conclusion}</p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
