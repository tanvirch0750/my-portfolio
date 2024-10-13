'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function FramerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
