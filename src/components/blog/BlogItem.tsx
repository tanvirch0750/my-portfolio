import { imageBuilder } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';
import Card from '../Card';
import { Badge } from '@/components/ui/badge';

export default function BlogItem({ blog }: { blog: Blog }) {
  const imageUrl = imageBuilder(blog.mainImage.asset._ref).url();

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-0">
      <Link href={`/blog/${blog.slug.current}`} className="block">
        <article className="flex flex-col h-full">
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <Image
              src={imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col justify-between p-4 pb-0 space-y-3">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary line-clamp-2 text-white">
                {blog.title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <UserIcon className="mr-2 h-4 w-4" />
                {blog.author.name}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {new Date(blog.publishedAt).toLocaleDateString()}
              </div>
              <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                {/* @ts-ignore */}
                {blog.body[0].children[0].text}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 py-3">
              {blog.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/60 text-primary hover:bg-white/50 capitalize"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </Card>
  );
}
