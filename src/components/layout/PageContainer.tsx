import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = false,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh)]">
          <div className="h-screen">{children}</div>
        </ScrollArea>
      ) : (
        <div className="h-full">{children}</div>
      )}
    </>
  );
}
