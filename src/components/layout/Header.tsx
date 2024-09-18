import { cn } from '@/lib/utils';

import { MobileSidebar } from './MobileSidebar';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full border-b border-gray-950 md:hidden">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
      </nav>
    </header>
  );
}
