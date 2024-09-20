import { cn } from '@/lib/utils';

import { MobileSidebar } from './MobileSidebar';
import TanvirImage from '@/assets/images/tanvir-final.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full border-b border-gray-950 md:hidden">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div
          className={cn('flex justify-between w-full items-center lg:!hidden')}
        >
          <div className="flex items-center gap-4 ">
            <Image
              src={TanvirImage}
              alt="Tanvir Chowdhury Image"
              width={50}
              height={50}
              className=" rounded-lg"
            />
            <div className=" ">
              <h2 className="">Tanvir Chowdhury</h2>
              <p className=" text-sm text-white/50">Web Developer</p>
            </div>
          </div>
          <MobileSidebar />
        </div>
      </nav>
    </header>
  );
}
