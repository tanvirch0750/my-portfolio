import React from 'react';
import { getPostBySlug } from '@/sanity/sanity-utils';
import RenderBodyContent from '@/components/blog/RenderBodyContent';
import PageContainer from '@/components/layout/PageContainer';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '@/sanity/sanity-utils';

export default async function SingleBlogPage({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug);
  const imageUrl = imageBuilder(post.mainImage.asset._ref).url();

  return (
    <PageContainer scrollable>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to all blogs
        </Link>

        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300"
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mb-8 overflow-hidden rounded-lg">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <RenderBodyContent post={post} />
        </div>
      </article>
    </PageContainer>
  );
}
