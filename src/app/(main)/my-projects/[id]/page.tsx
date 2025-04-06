import Card from '@/components/Card';
import PageContainer from '@/components/layout/PageContainer';
import ProjectCarousel from '@/components/ProjectCarousel';
import { projectsData } from '@/constant/data';
import { CheckCircle, MoveUpRightIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project?.tag,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [project] = projectsData?.filter((item) => item?.tag === params?.id);

  return (
    <PageContainer scrollable={true}>
      <section className="lg:container pt-3 pb-10 px-4 md:px-10">
        <Card className="border-emerald-300/20 mb-8">
          {/* Back to List Link */}
          <Link
            href="/my-projects"
            className="text-sm pb-4 text-white/60 hover:text-emerald-300 flex items-center mb-6 border-b border-white/10 transition-colors"
          >
            <span className="mr-2">{'<'}</span> Back to list
          </Link>

          {/* Project Title */}
          <h1 className="text-3xl font-bold mb-8">
            {project?.title} - {project?.type}
          </h1>

          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-8 mb-12">
            {/* Date */}
            <div className="sm:col-span-2 hidden md:block">
              <h4 className="text-white/60 text-sm font-medium mb-2">Date</h4>
              <p className="text-white/80">{project?.year}</p>
            </div>

            {/* Technologies */}
            <div className="col-span-7 md:col-span-5">
              <h4 className="text-white/60 text-sm font-medium mb-2">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project?.technologies?.split(',').map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-2 group hover:bg-emerald-500/20 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform"></span>
                    <span className="text-white/90">{tech.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview Button */}
          <div className="flex flex-wrap gap-2 md:gap-8">
            {project?.links?.map((link) => (
              <Link
                key={link?.title}
                href={link?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-white text-sm transition-colors"
              >
                {link.title}
                <MoveUpRightIcon className="w-5 h-5 ml-2" />
              </Link>
            ))}
          </div>
        </Card>

        <Card className="border-emerald-300/20 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-white/70 leading-relaxed">{project?.overview}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl">
            <Image
              src={project?.heroImg || '/placeholder.svg'}
              alt={project?.title}
              className="w-full object-cover rounded-xl"
            />
          </div>
        </Card>

        <Card className="border-emerald-300/20 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Users Pages and Features
            </h2>
            <ul className="flex flex-col gap-3 text-white/70 mb-8">
              {project?.usersFeatures?.features?.map((feature, idx) => (
                <li className="flex items-center gap-4" key={idx}>
                  <CheckCircle
                    className="text-emerald-300 flex-shrink-0"
                    size={18}
                  />
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
        </Card>

        {project?.adminFeatures && (
          <Card className="border-emerald-300/20 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Admin Pages and Features
              </h2>
              <ul className="flex flex-col gap-3 text-white/70 mb-8">
                {project?.adminFeatures?.features?.map((feature, idx) => (
                  <li className="flex items-center gap-4" key={idx}>
                    <CheckCircle
                      className="text-emerald-300 flex-shrink-0"
                      size={18}
                    />
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
          </Card>
        )}

        {project?.securityFeatures && (
          <Card className="border-emerald-300/20 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Security Features</h2>
              <ul className="flex flex-col gap-3 text-white/70">
                {project?.securityFeatures?.features?.map((feature, idx) => (
                  <li className="flex items-center gap-4" key={idx}>
                    <CheckCircle
                      className="text-emerald-300 flex-shrink-0"
                      size={18}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        )}

        <Card className="border-emerald-300/20">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-white/70 leading-relaxed">
              {project?.conclusion}
            </p>
          </div>
        </Card>
      </section>
    </PageContainer>
  );
}
