'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '../Navigation';
import { navItems } from '@/constant/data';

// import { Playlist } from "../data/playlists";

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
          className="!px-0 bg-gray-900 border-transparent"
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
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
