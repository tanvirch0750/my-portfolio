import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({
  className,
  children,
  key,
  ...other
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      key={key}
      className={twMerge(
        "bg-brand-secondary  rounded-3xl relative overflow-hidden z-0 after:content-['']  after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
        className
      )}
      {...other}
    >
      <div
        className=" absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      {children}
    </div>
  );
}
