import { Badge } from '@/components/ui/badge';
import { imageBuilder } from '@/sanity/sanity-utils';
import type { Blog } from '@/types/blog';
import { CalendarIcon, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';

export default function BlogItem({ blog }: { blog: Blog }) {
  const imageUrl = imageBuilder(blog.mainImage.asset._ref).url();

  // Calculate estimated read time
  const getReadTime = () => {
    // @ts-ignore
    const text = blog.body[0]?.children[0]?.text || '';
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return readTime > 0 ? readTime : 1; // Minimum 1 minute
  };

  return (
    <Link href={`/blog/${blog.slug.current}`} className="block h-full group">
      <Card className="h-full border-white/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden flex flex-col p-0">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-5">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          {/* <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-grow">
            {blog.body[0]?.children[0]?.text.slice(0, 200) || ''}
          </p> */}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-white/50 text-xs mb-4">
            <div className="flex items-center">
              <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {getReadTime()} min read
            </div>
          </div>

          {/* Tags - Now at the bottom */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-white/5 hover:bg-white/10 text-emerald-400 text-xs border border-emerald-500/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
