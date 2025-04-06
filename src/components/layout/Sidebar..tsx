'use client';

import { cn } from '@/lib/utils';

import TanvirImage from '@/assets/images/tanvir-final.png';
import { navItems } from '@/constant/data';
import Image from 'next/image';
import { Navigation } from '../Navigation';

import DiscordIcon from '@/assets/icons/discord-svgrepo-com.svg';
import FbIcon from '@/assets/icons/facebook-svgrepo-com.svg';
import GithubIcon from '@/assets/icons/github-svgrepo-com.svg';
import LinkedinIcon from '@/assets/icons/linkedin-svgrepo-com.svg';
import TwitterIcon from '@/assets/icons/twitter-154-svgrepo-com.svg';
import Link from 'next/link';
import TechIcon from '../TechIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type SidebarProps = {
  className?: string;
};

export const socialList = [
  {
    title: 'Gitgub',
    link: 'https://github.com/tanvirch0750',
    icon: GithubIcon,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/tanvirc/',
    icon: LinkedinIcon,
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/tanvirchowdhury.shahib',
    icon: FbIcon,
  },
  {
    title: 'X (Twitter)',
    link: 'https://twitter.com/mtc0750',
    icon: TwitterIcon,
  },
  {
    title: 'Discord User Id: tanvirch',
    link: 'https://discord.com/',
    icon: DiscordIcon,
  },
];

export default function Sidebar({ className }: SidebarProps) {
  const isMinimized = false;

  return (
    <aside
      className={cn(
        `relative hidden h-screen md:flex md:flex-col flex-none border-r border-brand-secondary transition-[width] duration-500  bg-[#000000]`,
        !isMinimized ? 'w-72 lg:w-72 md:w-56' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pt-10 md:flex items-center gap-4 lg:gap-2">
        <Image
          src={TanvirImage}
          alt="Tanvir Chowdhury Image"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div className="">
          <h2 className="text-lg">Tanvir Chowdhury</h2>
          <p className="text-sm text-white/50">Full-Stack Developer</p>
        </div>
      </div>

      <div className="space-y-4 py-4 flex-grow">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <Navigation items={navItems} />
          </div>
        </div>
      </div>

      {/* "Download Resume" section at the end */}
      <div className="p-5 mt-auto">
        <ul className=" flex justify-between items-center gap-2 mb-6 px-2">
          {socialList?.map((s) => (
            <li key={s?.title}>
              <TooltipProvider>
                <Tooltip delayDuration={30}>
                  <TooltipTrigger asChild>
                    <Link href={s?.link}>
                      <TechIcon component={s?.icon} className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{s?.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>

        <a
          href="/tanvir_chowdhury-resume.pdf"
          download="tanvir_chowdhury-resume.pdf"
          className={cn(
            'flex items-center justify-center gap-2 overflow-hidden rounded-lg py-2 text-sm font-medium text-white/70 antialiased border  hover:bg-white/20 hover:border-white/5 transition-all duration-200 bg-white/10 border-white/15 px-4 w-full '
          )}
        >
          Download My Resume
        </a>
      </div>
    </aside>
  );
}
