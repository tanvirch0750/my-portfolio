'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '../Navigation';
import { navItems } from '@/constant/data';

import { cn } from '@/lib/utils';

import Link from 'next/link';

export const socialList = [
  {
    title: 'Gitgub',
    link: 'https://github.com/tanvirch0750',
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/tanvirc/',
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/tanvirchowdhury.shahib',
  },
  {
    title: 'X (Twitter)',
    link: 'https://twitter.com/mtc0750',
  },
  {
    title: 'Discord User Id: tanvirch',
    link: 'https://discord.com/',
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="!px-0 bg-brand-secondary border-transparent"
        >
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <Navigation
                  items={navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
            {/* "Download Resume" section at the end */}
            <div className="p-5 mt-auto flex flex-col gap-2">
              <a
                href="/tanvir_chowdhury-resume.pdf"
                download="tanvir_chowdhury-resume.pdf"
                className={cn(
                  'flex items-center justify-center gap-2 overflow-hidden rounded-lg py-2 text-sm font-medium text-white/70 antialiased border  hover:bg-white/20 hover:border-white/5 transition-all duration-200 bg-white/10 border-white/15 px-4 w-full '
                )}
              >
                Download My Resume
              </a>

              {socialList.map((s) => (
                <Link
                  key={s?.title}
                  href={s.link}
                  className={cn(
                    'flex items-center justify-center gap-2 overflow-hidden rounded-lg py-2 text-sm font-medium text-white/70 antialiased border  hover:bg-white/20 hover:border-white/5 transition-all duration-200 bg-white/10 border-white/15 px-4 w-full '
                  )}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
