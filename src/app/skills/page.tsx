import PageContainer from '@/components/layout/PageContainer';
import Image from 'next/image';
import { skills } from './data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function MyProjectsPage() {
  return (
    <PageContainer scrollable={true}>
      <section className="lg:container py-10 md:py-14 px-4 md:px-10">
        <SectionHeader
          title="The Tools of My Trade"
          eybrow=" Technical Expertise"
          description=" Here are the key competencies I’ve developed, allowing me to build
          robust, user-friendly, and impactful digital experiences."
        />

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills?.map((skill) => (
            <Card key={skill.name}>
              <div className=" flex gap-4 items-center">
                <div className=" size-14 ">
                  <Image
                    src={skill.icon}
                    alt={skill?.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <div className=" font-semibold">{skill?.name}</div>
                  <div className=" text-sm text-white/50">
                    {skill?.description}
                  </div>
                </div>
              </div>

              <p className=" mt-4 text-sm">{skill?.details}</p>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
