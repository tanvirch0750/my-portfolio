'use client';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import Image from 'next/image';
import { navItems } from '@/constant/data';
import { Navigation } from '../Navigation';
import TanvirImage from '@/assets/images/tanvir-final.png';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  //   const { isMinimized, toggle } = useSidebar();

  //   const handleToggle = () => {
  //     toggle();
  //   };

  const isMinimized = false;

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r border-gray-950 transition-[width] duration-500 md:block bg-[#0f1623]`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pt-10 lg:flex items-center gap-2">
        <Image
          src={TanvirImage}
          alt="Tanvir Chowdhury Image"
          width={50}
          height={50}
          className=" rounded-lg"
        />
        <div className=" ">
          <h2 className=" text-lg">Tanvir Chowdhury</h2>
          <p className=" text-sm text-white/50">Web Developer</p>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <Navigation items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
