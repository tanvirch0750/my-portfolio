'use client';

import Image, { StaticImageData } from 'next/image';
import Card from './Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import DemoImg from '@/assets/projects/meet-ease/me1.png';

export default function ProjectCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  return (
    <Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent>
        {images?.map((item, index) => (
          <CarouselItem key={index}>
            <Card className=" p-0 rounded-xl mt-8">
              <Image
                src={item}
                alt="Photo of project item"
                className="h-full w-full object-contain rounded-xl"
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
      <CarouselNext className=" border-brand-secondary bg-brand-secondary hover:bg-brand-secondary/90 text-white/40 hover:text-white/40" />
    </Carousel>
  );
}
